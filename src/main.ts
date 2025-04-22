// Apify SDK - toolkit for building Apify Actors (Read more at https://docs.apify.com/sdk/js/)
import { Actor } from 'apify';
import { gotScraping } from 'got-scraping';

// Define interfaces
interface Input {
    walletAddresses: string[];
    period?: string;
    maxConcurrency?: number;
}

interface GmgnWalletStatResponse {
    code: number;
    reason: string;
    message: string;
    data: WalletStatData;
}

interface WalletStatData {
    buy: number;
    buy_1d: number;
    buy_7d: number;
    buy_30d: number;
    sell: number;
    sell_1d: number;
    sell_7d: number;
    sell_30d: number;
    pnl: number;
    pnl_1d: number;
    pnl_7d: number;
    pnl_30d: number;
    all_pnl: number;
    realized_profit: number;
    realized_profit_1d: number;
    realized_profit_7d: number;
    realized_profit_30d: number;
    unrealized_profit: number;
    unrealized_pnl: number;
    total_profit: number;
    total_profit_pnl: number;
    balance: string;
    eth_balance: string;
    sol_balance: string;
    trx_balance: string;
    bnb_balance: string;
    total_value: number;
    winrate: number;
    token_sold_avg_profit: number;
    history_bought_cost: number;
    token_avg_cost: number;
    token_num: number;
    profit_num: number;
    pnl_lt_minus_dot5_num: number;
    pnl_minus_dot5_0x_num: number;
    pnl_lt_2x_num: number;
    pnl_2x_5x_num: number;
    pnl_gt_5x_num: number;
    bind: boolean;
    avatar: string;
    name: string;
    ens: string;
    tags: any[];
    tag_rank: Record<string, any>;
    twitter_name: string;
    twitter_username: string;
    twitter_bind: boolean;
    twitter_fans_num: number;
    followers_count: number;
    is_contract: boolean;
    last_active_timestamp: number;
    risk: any;
    avg_holding_peroid: number;
    updated_at: number;
    refresh_requested_at: any;
}

interface WalletData {
    address: string;
    stats: WalletStatData;
}

// Helper function to delay execution
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to fetch wallet stats
async function fetchWalletStats(
    walletAddress: string,
    period: string,
): Promise<WalletStatData | null> {
    try {
        // Generate query parameters
        const queryParams = new URLSearchParams({
            device_id: '0a95111c-3b19-4f49-b0da-742a65f887e4',
            client_id: 'gmgn_web_2025.0418.112049',
            from_app: 'gmgn',
            app_ver: '2025.0418.112049',
            tz_name: 'Asia/Calcutta',
            tz_offset: '19800',
            app_lang: 'en-US',
            fp_did: '73262958e673b77d2022a2011dc75437',
            os: 'web',
            period,
        });

        // Construct the URL
        const url = `https://gmgn.ai/api/v1/wallet_stat/sol/${walletAddress}/${period}?${queryParams}`;

        console.log(`Fetching data for wallet: ${walletAddress}`);

        // Use got-scraping to fetch data with HTTP/2
        const response = await gotScraping({
            url,
            responseType: 'json',
            http2: true,
            headerGeneratorOptions: {
                browsers: [
                    {
                        name: 'chrome',
                        minVersion: 100,
                        maxVersion: 112,
                    },
                ],
                devices: ['desktop'],
                locales: ['en-US'],
                operatingSystems: ['windows', 'macos'],
            },
            headers: {
                // Adding some common headers that might be required
                Accept: 'application/json',
                Referer: 'https://gmgn.ai/',
                Origin: 'https://gmgn.ai',
            },
        });

        // Log the full response body for debugging
        console.log('Response body:', JSON.stringify(response.body, null, 2));

        const data = response.body as GmgnWalletStatResponse;

        if (data && data.code === 0 && data.message === 'success') {
            return data.data;
        } else {
            console.error(
                `Failed to fetch data for wallet ${walletAddress}: ${
                    data?.message || 'Unknown error'
                }`,
            );
            return null;
        }
    } catch (error) {
        console.error(
            `Error fetching wallet stats for ${walletAddress}:`,
            error,
        );
        return null;
    }
}

// Process wallets with concurrency control
async function processWallets(
    walletAddresses: string[],
    period: string,
    maxConcurrency: number,
): Promise<WalletData[]> {
    const results: WalletData[] = [];

    // Process wallets in chunks based on maxConcurrency
    for (let i = 0; i < walletAddresses.length; i += maxConcurrency) {
        const chunk = walletAddresses.slice(i, i + maxConcurrency);
        const chunkPromises = chunk.map(async (address) => {
            const stats = await fetchWalletStats(address, period);

            if (stats) {
                return { address, stats };
            }
            return null;
        });

        const chunkResults = await Promise.all(chunkPromises);

        // Filter out null results and add to the results array
        results.push(
            ...chunkResults.filter(
                (result): result is WalletData => result !== null,
            ),
        );

        // Add delay between chunks to avoid rate limiting
        if (i + maxConcurrency < walletAddresses.length) {
            await delay(500);
        }
    }

    return results;
}

// Main function
async function main() {
    await Actor.init();

    // Get input
    const input = (await Actor.getInput()) as Input;

    if (
        !input?.walletAddresses ||
        !Array.isArray(input.walletAddresses) ||
        input.walletAddresses.length === 0
    ) {
        throw new Error('Input must contain an array of wallet addresses');
    }

    // Set default options
    const period = input.period || '7d';
    const maxConcurrency = input.maxConcurrency || 3;

    console.log(
        `Fetching wallet stats for ${input.walletAddresses.length} addresses...`,
    );

    // Process the wallets
    const results = await processWallets(
        input.walletAddresses,
        period,
        maxConcurrency,
    );

    // Create a wallet-to-data map object
    const walletDataMap = {
        timestamp: new Date().toISOString(),
        period: period,
        wallets: results,
    };

    // Save all data as a single dataset item
    await Actor.pushData(walletDataMap);

    console.log(
        `Successfully processed ${results.length} of ${input.walletAddresses.length} wallet addresses.`,
    );

    await Actor.exit();
}

// Run the actor
main().catch((error) => {
    console.error('Actor failed:', error);
    Actor.fail(error.message);
});
