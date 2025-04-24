# Multichain Wallet Analytics API (GMGN)

Multichain Wallet Analytics API (GMGN) is a lightning-fast, budget-friendly Apify actor that gathers and analyzes deep trading metrics from up to **3** crypto wallets across leading blockchains (Ethereum, BSC, Base, Solana and Blast). Perfect for analysts, traders, and bot developers, it delivers actionable PnL figures, win/loss ratios, and performance insights in seconds.

**Why Choose Multichain Wallet Analytics API (GMGN)?**

-   **Fastest Analytics:** Accelerated scraping engine provides wallet stats within seconds
-   **Most Cost-Effective:** Streamlined resource usage cuts down on API and proxy costs
-   **Up to 3 Wallets:** Caps queries at 3 wallets per run for reliable, consistent performance
-   **Deep Insights:** Comprehensive PnL ratios, trade counts, risk metrics, and more
-   **Multi-Chain Coverage:** Supports Ethereum, BSC, Base, Solana, and Blast
-   **Flexible Timeframes:** Retrieve data over 1-day, 7-day, 30-day, or all-time periods

## Features

-   Scrape detailed statistics for up to **3** wallet addresses simultaneously
-   Fetch metrics for customizable periods: **1d**, **7d**, **30d**, **all**
-   Export results to Apify dataset in JSON, CSV, or Excel format
-   Automatic wallet address validation and format conversion
-   Multi-chain support: `eth`, `bsc`, `base`, `sol`, `blast`

## Use Cases

-   **Portfolio Analysis:** Measure ROI and monitor wallet performance over time
-   **Risk Profiling:** Identify high-risk trading patterns and exposure levels
-   **Investor Research:** Uncover strategies and behaviors of successful wallets
-   **Market Studies:** Compare asset performance and trading strategies across wallets
-   **Data Science Projects:** Generate rich datasets for machine learning and statistical analysis

## Usage

1. Run this actor in the Apify console.
2. Provide inputs:
    - `walletAddresses`: Array of wallet addresses (max 3)
    - `chain`: One of `eth`, `bsc`, `base`, `sol`, `blast`
    - `period`: One of `1d`, `7d`, `30d`, `all`

### Example Input

```json
{
    "walletAddresses": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
    "chain": "eth",
    "period": "all"
}
```

## Output

The collected data is saved to the Apify dataset with the following fields:

| Field                                                                                                                                                                                                         | Description                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `wallet_address`                                                                                                                                                                                              | Wallet address                           |
| `chain`                                                                                                                                                                                                       | Blockchain network                       |
| `period`                                                                                                                                                                                                      | Timeframe of statistics                  |
| **Trading Counts**                                                                                                                                                                                            |                                          |
| `buy`, `buy_1d`, `buy_7d`, `buy_30d`                                                                                                                                                                          | Number of buys overall and by period     |
| `sell`, `sell_1d`, `sell_7d`, `sell_30d`                                                                                                                                                                      | Number of sells overall and by period    |
| **Profit / Loss**                                                                                                                                                                                             |                                          |
| `pnl`, `pnl_1d`, `pnl_7d`, `pnl_30d`                                                                                                                                                                          | Profit/Loss ratios overall and by period |
| `all_pnl`                                                                                                                                                                                                     | All-time profit/loss ratio               |
| `realized_profit`, `realized_profit_1d`, `realized_profit_7d`, `realized_profit_30d`                                                                                                                          | Realized profits overall and by period   |
| `unrealized_profit`, `unrealized_pnl`                                                                                                                                                                         | Unrealized profit and P/L ratio          |
| `total_profit`, `total_profit_pnl`                                                                                                                                                                            | Total profit and profit/L ratio          |
| **Balances & Value**                                                                                                                                                                                          |                                          |
| `balance`, `eth_balance`, `sol_balance`, `trx_balance`, `bnb_balance`                                                                                                                                         | Token balances by chain                  |
| `total_value`                                                                                                                                                                                                 | Total wallet value                       |
| **Win Rate & Token Stats**                                                                                                                                                                                    |                                          |
| `winrate`, `token_sold_avg_profit`, `history_bought_cost`, `token_avg_cost`                                                                                                                                   | Win rate and cost metrics                |
| `token_num`, `profit_num`                                                                                                                                                                                     | Total tokens and profitable tokens count |
| `pnl_lt_minus_dot5_num`, `pnl_minus_dot5_0x_num`, `pnl_lt_2x_num`, `pnl_2x_5x_num`, `pnl_gt_5x_num`                                                                                                           | Distribution of token P/L brackets       |
| **Profile & Metadata**                                                                                                                                                                                        |                                          |
| `bind`, `avatar`, `name`, `ens`, `tags`, `tag_rank`                                                                                                                                                           | Wallet binding and identity data         |
| `twitter_name`, `twitter_username`, `twitter_bind`, `twitter_fans_num`                                                                                                                                        | Twitter profile information              |
| `followers_count`, `is_contract`, `last_active_timestamp`                                                                                                                                                     | Activity and contract status             |
| **Risk Metrics**                                                                                                                                                                                              |                                          |
| `risk.token_active`, `risk.token_honeypot`, `risk.token_honeypot_ratio`, `risk.no_buy_hold`, `risk.no_buy_hold_ratio`, `risk.sell_pass_buy`, `risk.sell_pass_buy_ratio`, `risk.fast_tx`, `risk.fast_tx_ratio` | Detailed risk indicators                 |
| **Timestamps**                                                                                                                                                                                                |                                          |
| `avg_holding_period`, `updated_at`, `refresh_requested_at`                                                                                                                                                    | Holding period and update timestamps     |

### Example Output

```json
{
    "address": "3kebnKw7cPdSkLRfiMEALyZJGZ4wdiSRvmoN4rD1yPzV",
    "chain": "sol",
    "period": "7d",
    "buy": 581,
    "buy_1d": 115,
    "buy_7d": 581,
    "buy_30d": 1322,
    "sell": 502,
    "sell_1d": 98,
    "sell_7d": 502,
    "sell_30d": 1126,
    "pnl": -0.10828719023520679,
    "pnl_1d": 0.03140758753773306,
    "pnl_7d": -0.10828719023520679,
    "pnl_30d": -0.08746015532886187,
    "all_pnl": 0.12871069195157267,
    "realized_profit": 1684772.7576239784,
    "realized_profit_1d": 851.1409791878604,
    "realized_profit_7d": -25207.50269218135,
    "realized_profit_30d": -45563.020845507424,
    "unrealized_profit": 4110.971943821579,
    "unrealized_pnl": 0.00030513736589427,
    "total_profit": 1688883.7295678,
    "total_profit_pnl": 0.12877634799199128,
    "balance": "614.0013232",
    "eth_balance": "614.0013232",
    "sol_balance": "614.0013232",
    "trx_balance": "614.0013232",
    "bnb_balance": "614.0013232",
    "total_value": 122227.40625175112,
    "winrate": 0.4805194805194805,
    "token_sold_avg_profit": -79.02038461498856,
    "history_bought_cost": 304309.6197517237,
    "token_avg_cost": 953.948651259322,
    "token_num": 319,
    "profit_num": 148,
    "pnl_lt_minus_dot5_num": 50,
    "pnl_minus_dot5_0x_num": 115,
    "pnl_lt_2x_num": 149,
    "pnl_2x_5x_num": 5,
    "pnl_gt_5x_num": 0,
    "bind": false,
    "avatar": "https://pbs.twimg.com/profile_images/1913058996174405632/11uKxGds_400x400.jpg",
    "name": "Bastille",
    "ens": "",
    "tags": ["kol", "pump_smart", "photon", "bullx"],
    "tag_rank": {
        "bullx": 0,
        "kol": 1072,
        "photon": 0,
        "pump_smart": 35
    },
    "twitter_name": "Bastille",
    "twitter_username": "BastilleBtc",
    "twitter_bind": false,
    "twitter_fans_num": 64103,
    "followers_count": 64103,
    "is_contract": false,
    "last_active_timestamp": 1745407556,
    "risk": {
        "token_active": 319,
        "token_honeypot": 0,
        "token_honeypot_ratio": 0,
        "no_buy_hold": 7,
        "no_buy_hold_ratio": 0.02147239263803681,
        "sell_pass_buy": 2,
        "sell_pass_buy_ratio": 0.006269592476489028,
        "fast_tx": 20,
        "fast_tx_ratio": 0.06269592476489028
    },
    "avg_holding_period": 23827.617554858934,
    "updated_at": 1745407556,
    "refresh_requested_at": null
}
```

_Notes: All data is stored in Apify's default dataset._
