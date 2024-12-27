Stock Buy And Sell


# Stock Buy and Sell Problem

## Problem Statement
Given an array of prices where `prices[i]` represents the price of a stock on the `ith` day, find the maximum profit you can achieve. You can complete only one transaction (buy one stock and sell it later).

The goal is to maximize profit by choosing a single day to buy and a different future day to sell. Return 0 if no profit is possible.

## Examples

### Example 1:
```javascript
const prices = [7, 1, 5, 3, 6, 4];
// Expected Output: 5
// Buy on day 2 (price = 1) and sell on day 5 (price = 6)
// Profit = 6 - 1 = 5
```

### Example 2:
```javascript
const prices = [7, 6, 4, 3, 1];
// Expected Output: 0
// No transactions possible for profit
```

## Notes
- You must buy before selling (time travel not allowed!)
- Only one transaction is allowed
- Array will contain positive integers representing daily prices

## Function Signature
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    // Your solution here
}
```