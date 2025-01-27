# Count Occurrences in Sorted Array

Given a sorted array containing N integers and a number X, find the number of occurrences of X in the array.

## Problem Description
- Input consists of array size N, target number X, and a sorted array
- Array can contain duplicate elements
- Need to return the count of how many times X appears

## Examples

### Example 1
```
Input:
N = 7, X = 3
array[] = {2, 2, 3, 3, 3, 3, 4}

Output: 4

Explanation: 3 appears 4 times in array
```

### Example 2
```
Input: 
N = 8, X = 2
array[] = {1, 1, 2, 2, 2, 2, 2, 3}

Output: 5

Explanation: 2 appears 5 times in array
```

## Test Cases
```javascript
assert(countOccurrences([2, 2, 3, 3, 3, 3, 4], 3) === 4)
assert(countOccurrences([1, 1, 2, 2, 2, 2, 2, 3], 2) === 5)
assert(countOccurrences([1, 2, 3, 4, 5], 6) === 0)
assert(countOccurrences([1, 1, 1], 1) === 3)
```

## Constraints
- 1 ≤ N ≤ 10^5
- Array is sorted in non-decreasing order
- Array elements can be in range [-10^9, 10^9]