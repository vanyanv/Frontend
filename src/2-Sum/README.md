Two Sum : Check if a pair with given sum exists in Array


# Two Sum Problem

## Problem Statement
Given an array of integers `arr[]` and an integer `target`, determine if there exist two numbers in the array that sum up to the target value.

**Note:** You cannot use the same element twice. For example, if target = 6 and num[1] = 3, then nums[1] + nums[1] = target is not a valid solution.

## Function Signatures

### Variant 1
```javascript
function checkForSum(arr, target)
```
Returns: "YES" if pair exists, "NO" otherwise

### Variant 2
```javascript
function findPairIndices(arr, target)
```
Returns: Array containing indices of two numbers that sum to target, or [-1, -1] if no such pair exists

## Examples

### Test Case 1
```
Input: 
arr = [2, 6, 5, 8, 11]
target = 14

Output:
Variant 1: "YES"
Variant 2: [1, 3]

Explanation: 6 + 8 = 14
```

### Test Case 2
```
Input:
arr = [2, 6, 5, 8, 11]
target = 15

Output:
Variant 1: "NO"
Variant 2: [-1, -1]

Explanation: No pair exists that sums to 15
```

## Constraints
- 2 ≤ N ≤ 10^5
- -10^8 ≤ arr[i] ≤ 10^8
- -10^8 ≤ target ≤ 10^8