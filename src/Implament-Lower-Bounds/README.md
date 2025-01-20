# Implement Lower Bound Algorithm

## Problem Description
Given a sorted array of N integers and an integer x, find the lower bound of x.

The lower bound is defined as the smallest index 'ind' where arr[ind] >= x. If no such index exists, return the size of the array.

### Prerequisites
- Understanding of Binary Search algorithm
- Basic array operations
- Sorting concepts

## Examples

### Example 1:
```
Input: 
arr = [1, 2, 2, 3, 3, 5]
x = 2

Output: 1
Explanation: First occurrence of 2 is at index 1
```

### Example 2:
```
Input:
arr = [1, 2, 3, 4, 5]
x = 6

Output: 5
Explanation: No element >= 6 exists, so return array length
```

### Example 3:
```
Input:
arr = [1, 1, 1, 2, 2, 2]
x = 1

Output: 0
Explanation: First occurrence of element >= 1 is at index 0
```

## Practice
Try solving this problem before looking at any solutions!

You can practice this problem at:
- [Code Studio](insert-link-here)

## Note
- The input array must be sorted
- Time complexity should be optimized
- Consider edge cases in your solution
