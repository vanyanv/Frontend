# Union of Two Sorted Arrays

## Problem Description
Given two sorted arrays, `arr1` and `arr2` of sizes `n` and `m` respectively, find their union. The union should contain both common and distinct elements from both arrays in ascending order.

## Examples

### Example 1
```
Input:
n = 5, m = 5
arr1[] = {1, 2, 3, 4, 5}
arr2[] = {2, 3, 4, 4, 5}

Output: {1, 2, 3, 4, 5}
```

### Example 2
```
Input:
n = 10, m = 7
arr1[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
arr2[] = {2, 3, 4, 4, 5, 11, 12}

Output: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}
```

## Test Cases to Consider
1. Arrays with no common elements
2. Arrays with all common elements
3. Arrays with duplicate elements
4. One empty array
5. Both empty arrays
6. Arrays of significantly different sizes
7. Arrays with negative numbers
8. Single element arrays

## Constraints
- Arrays are sorted in ascending order
- 1 ≤ n, m ≤ 10^5
- Arrays may contain duplicate elements
