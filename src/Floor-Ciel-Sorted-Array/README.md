# Floor and Ceiling in Sorted Array

## Problem Statement

Given a sorted array `arr` of `n` integers and a target integer `x`, find:
- The **floor** (largest element ≤ x)
- The **ceiling** (smallest element ≥ x) 

## Examples

### Example 1
```
Input: 
arr = [3, 4, 4, 7, 8, 10]
x = 5

Output:
Floor = 4
Ceiling = 7
```

### Example 2
```
Input:
arr = [3, 4, 4, 7, 8, 10]
x = 8

Output: 
Floor = 8
Ceiling = 8
```

## Notes
- Array is always sorted
- Array may contain duplicates
- Solution should be optimized for time complexity

## Try it yourself!
1. Think about using binary search
2. Consider edge cases where:
    - Target equals an array element
    - Target is smaller than first element
    - Target is larger than last element 

[For complete solution, check the code]