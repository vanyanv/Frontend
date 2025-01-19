# Count Inversions in an Array

## 🚀 Problem Statement

Given an array of N integers, count the inversion of the array.

**Definition:** For all indices i & j where i < j, find all pairs (A[i], A[j]) where A[j] < A[i].

## Examples

### Example 1
```
Input: N = 5, array[] = {1, 2, 3, 4, 5}
Output: 0

Explanation: 
This is a sorted array with 0 inversions as there are no pairs where A[j] < A[i] for i < j.
```

### Example 2
```
Input: N = 5, array[] = {5, 4, 3, 2, 1}
Output: 10

Explanation:
All possible inversions are:
(5,4), (5,3), (5,2), (5,1)
(4,3), (4,2), (4,1)
(3,2), (3,1)
(2,1)
```

### Example 3
```
Input: N = 5, array[] = {5, 3, 2, 1, 4}
Output: 7

Explanation:
The inversion pairs are:
(5,3), (5,2), (5,1)
(3,2), (3,1)
(2,1)
(4,1)
```

## 📝 Notes
- Time complexity should be optimized
- Consider using divide and conquer approach
- Think about how sorting algorithms could help
