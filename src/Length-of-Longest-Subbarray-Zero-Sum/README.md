# Length of the Longest Subarray with Zero Sum

## Problem Statement

Given an array containing both positive and negative integers, find the length of the longest subarray where the sum of all elements equals zero.

## Examples

### Example 1
```javascript
const arr1 = [9, -3, 3, -1, 6, -5];
// Expected output: 5
// Explanation: Subarrays with sum 0:
// {-3, 3}
// {-1, 6, -5}
// {-3, 3, -1, 6, -5} <- longest with length 5
```

### Example 2
```javascript
const arr2 = [6, -2, 2, -8, 1, 7, 4, -10];
// Expected output: 8
// Explanation: Longest subarray is the entire array
```

### Example 3
```javascript
const arr3 = [1, 0, -5];
// Expected output: 1
// Explanation: Subarray {0} has sum 0
```

### Example 4
```javascript
const arr4 = [1, 3, -5, 6, -2];
// Expected output: 0
// Explanation: No subarray has sum 0
```

## Task
Write a function that returns the length of the longest subarray with sum zero:
```javascript
function findLongestZeroSumSubarray(arr) {
    // Your code here
}
```
