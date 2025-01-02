# Count Subarrays with Sum K

Given an array of integers and a target sum `k`, find the total number of subarrays whose elements sum up to `k`.

## Problem Statement

Write a function that:
- Takes an array of integers and a target sum `k`
- Returns the count of all possible contiguous subarrays that sum to exactly `k`
- A subarray is a contiguous section of the array

## Examples

### Example 1:
```javascript
const nums = [3, 1, 2, 4];
const k = 6;
// Expected output: 2
// Explanation: [3,1,2] and [2,4] sum to 6
```

### Example 2:
```javascript
const nums = [1, 2, 3];
const k = 3;
// Expected output: 2
// Explanation: [1,2] and [3] sum to 3
```

### Function Signature:
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countSubarraysWithSum(nums, k) {
    // Your solution here
}
```

## Constraints
- 1 ≤ nums.length ≤ 2 * 10⁴
- -1000 ≤ nums[i] ≤ 1000
- -10⁷ ≤ k ≤ 10⁷

## Notes
- The solution should handle both positive and negative integers
- Consider efficiency in your solution
- Think about using prefix sum technique