# 3Sum

Given an array of integers, find all unique triplets that sum to zero.

## Problem Statement

Given an array of N integers, find all unique triplets [nums[i], nums[j], nums[k]] where:
- i ≠ j ≠ k
- nums[i] + nums[j] + nums[k] = 0

## Examples

```javascript
// Example 1
const nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1, -1, 2], [-1, 0, 1]]

// Example 2
const nums = [-1, 0, 1, 0];
// Output: [[-1, 0, 1]]
```

## Notes
- Solution should not contain duplicate triplets
- Related to Two Sum problem
- Each number can be used only once in each triplet
