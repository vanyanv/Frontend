# Merge Two Sorted Arrays Without Extra Space

## Problem Statement
Given two sorted arrays `arr1[]` and `arr2[]` of sizes `n` and `m` in non-decreasing order. Merge them in sorted order. Modify `arr1` so that it contains the first `N` elements and modify `arr2` so that it contains the last `M` elements.

## Examples

### Example 1
**Input:**
```
n = 4, arr1[] = [1, 4, 8, 10]
m = 5, arr2[] = [2, 3, 9]
```

**Expected Output:**
```
arr1[] = [1, 2, 3, 4]
arr2[] = [8, 9, 10]
```

### Example 2
**Input:**
```
n = 4, arr1[] = [1, 3, 5, 7]
m = 5, arr2[] = [0, 2, 6, 8, 9]
```

**Expected Output:**
```
arr1[] = [0, 1, 2, 3]
arr2[] = [5, 6, 7, 8, 9]
```

## Test Cases
```
# Test Case 1
arr1 = [2, 6, 7, 9]
arr2 = [1, 3, 4, 8]

# Test Case 2
arr1 = [10, 12]
arr2 = [5, 18, 20]

# Test Case 3
arr1 = [1, 2, 3]
arr2 = [4, 5]
```