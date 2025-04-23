**Multichain Wallet Analytics API (GMGN)**

Multichain Wallet Analytics API (GMGN) The fastest & cheapest API to scrape wallet trading stats from GMGN.ai across multiple blockchains (Ethereum, BSC, Base, Solana, Blast, and Tron). Instantly access PnL, trade history, win/loss ratio & performance metrics for any crypto wallet. Perfect for analysts, traders, and bot builders. 

Why Should You Use Multichain Wallet Analytics API (GMGN)?
Multichain Wallet Analytics API (GMGN) saves you hours by automating manual data collection processes and provides you with access to the most up-to-date wallet statistics. This tool offers you the following advantages:

Time Saving: Saves you hours by automating manual data collection processes
Comprehensive Data: Complete statistical data set including trading numbers, profit/loss ratios, and risk metrics
Multi-Blockchain Support: Works on Ethereum, BSC, Base, Solana, Blast, and Tron networks
Customizable Data Collection: Ability to collect statistical data over different time periods

**Features**

Extracts comprehensive statistical data from crypto wallets on GMGN.ai
Can scan multiple wallet addresses simultaneously
Can retrieve wallet statistics according to different time periods (1 day, 7 days, 30 days, all time)
Stores collected data in Apify data storage and allows you to export it in various formats (JSON, CSV, Excel)
Provides faster and more reliable results with proxy support
Automatic wallet address validation and conversion to appropriate format

**Use Cases**

Portfolio Performance Analysis: Analyze the overall performance and trading behaviors of wallets

Risk Assessment: Evaluate the risk profiles and investment strategies of wallets
Investor Behavior Study: Examine behavior models of successful investors
Market Research: Research the performance of crypto assets in different wallets
Data Science Projects: Create comprehensive statistical datasets for crypto markets

**Usage**

Run this actor in the Apify console.

Provide the required inputs:

walletAddresses: Wallet addresses to be scanned (you can enter multiple addresses)
chain: Blockchain network to be scanned (eth, bsc, base, sol, blast, tron)
period: Statistical time period (1d, 7d, 30d, all)
proxyConfiguration: Proxy configuration

Example Input
{
  "walletAddresses": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
  "chain": "eth",
  "period": "all",
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": []
  }
}

Output
The collected data is saved to the Apify dataset. The output data includes the following fields:

wallet_address: Wallet address
chain: Blockchain network
period: Statistical time period
buy: Total number of buys
buy_1d: Number of buys in 1 day
buy_7d: Number of buys in 7 days
buy_30d: Number of buys in 30 days
sell: Total number of sells
sell_1d: Number of sells in 1 day
sell_7d: Number of sells in 7 days
sell_30d: Number of sells in 30 days
pnl: Profit/Loss ratio
pnl_1d: 1-day Profit/Loss ratio
pnl_7d: 7-day Profit/Loss ratio
pnl_30d: 30-day Profit/Loss ratio
all_pnl: All-time Profit/Loss ratio
realized_profit: Realized profit
realized_profit_1d: 1-day realized profit
realized_profit_7d: 7-day realized profit
realized_profit_30d: 30-day realized profit
unrealized_profit: Unrealized profit
unrealized_pnl: Unrealized Profit/Loss ratio
total_profit: Total profit
total_profit_pnl: Total profit Profit/Loss ratio
balance: Token balance
eth_balance: ETH balance
sol_balance: SOL balance
trx_balance: TRX balance
bnb_balance: BNB balance
total_value: Total value
winrate: Win rate
token_sold_avg_profit: Average profit of sold tokens
history_bought_cost: Historical purchase cost
token_avg_cost: Average token cost
token_num: Number of tokens
profit_num: Number of profitable tokens
pnl_lt_minus_dot5_num: Number of tokens with PnL < -0.5
pnl_minus_dot5_0x_num: Number of tokens with PnL between -0.5 and 0x
pnl_lt_2x_num: Number of tokens with PnL < 2x
pnl_2x_5x_num: Number of tokens with PnL between 2x and 5x
pnl_gt_5x_num: Number of tokens with PnL > 5x
bind: Binding status
avatar: Avatar URL
name: Name
ens: ENS name
tags: Tags
tag_rank: Tag ranking
twitter_name: Twitter name
twitter_username: Twitter username
twitter_bind: Twitter binding status
twitter_fans_num: Number of Twitter followers
followers_count: Followers count
is_contract: Whether it is a contract
last_active_timestamp: Last active time
risk: Risk metrics
avg_holding_peroid: Average holding period
updated_at: Update time
refresh_requested_at: Refresh request time

Example Output
{
  "buy": 5,
  "buy_1d": 0,
  "buy_7d": 0,
  "buy_30d": 0,
  "sell": 78,
  "sell_1d": 2,
  "sell_7d": 2,
  "sell_30d": 3,
  "pnl": -0.0002872711899513403,
  "pnl_1d": 0,
  "pnl_7d": 0,
  "pnl_30d": 0,
  "all_pnl": -0.012391918863559689,
  "realized_profit": 0,
  "realized_profit_1d": 0,
  "realized_profit_7d": 0,
  "realized_profit_30d": 0,
  "unrealized_profit": -1132.7714693194157,
  "unrealized_pnl": -0.0009643805337237632,
  "total_profit": -2256.4155123647643,
  "total_profit_pnl": -0.02441492602232377,
  "balance": "521.632140040817202251",
  "eth_balance": "521.632140040817202251",
  "sol_balance": "521.632140040817202251",
  "trx_balance": "521.632140040817202251",
  "bnb_balance": "521.632140040817202251",
  "total_value": 19087194637518.703,
  "winrate": 0,
  "token_sold_avg_profit": -32.10411551558139,
  "history_bought_cost": 1174610.4672451697,
  "token_avg_cost": 391536.8224150566,
  "token_num": 35,
  "profit_num": 0,
  "pnl_lt_minus_dot5_num": 0,
  "pnl_minus_dot5_0x_num": 2,
  "pnl_lt_2x_num": 33,
  "pnl_2x_5x_num": 0,
  "pnl_gt_5x_num": 0,
  "bind": false,
  "avatar": "https://pbs.twimg.com/profile_images/1880759276169224192/rXpjZO0A_400x400.jpg",
  "name": "vitalik.eth",
  "ens": "tipsforcoins.eth",
  "tags": [
    "kol",
    "bluechip_owner"
  ],
  "tag_rank": {
    "bluechip_owner": 0,
    "kol": 139
  },
  "twitter_name": "vitalik.eth",
  "twitter_username": "VitalikButerin",
  "twitter_bind": false,
  "twitter_fans_num": 5734536,
  "followers_count": 5734536,
  "is_contract": false,
  "last_active_timestamp": 1743451607,
  "risk": {
    "token_active": 35,
    "token_honeypot": 0,
    "token_honeypot_ratio": 0,
    "no_buy_hold": 7422,
    "no_buy_hold_ratio": 0.995306423494703,
    "sell_pass_buy": 33,
    "sell_pass_buy_ratio": 0.9428571428571428,
    "fast_tx": 1,
    "fast_tx_ratio": 0.02857142857142857
  },
  "avg_holding_peroid": 0,
  "updated_at": 1743458941,
  "refresh_requested_at": null,
  "wallet_address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  "chain": "eth",
  "period": "all"
}

This example output shows the statistical data for a single wallet. The actual output will be a list of similar objects for all processed wallets.

Notes
The collected data is stored in Apify's default data store.
