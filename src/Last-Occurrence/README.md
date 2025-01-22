# Last Occurrence in a Sorted Array

Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.

## Problem Statement

Write a function that takes a sorted array and a target value as input and returns the index of the last occurrence of the target value in the array. If the target is not found, return -1.

**Note:** Consider 0-based indexing.

## Examples

### Example 1:
```
Input: 
N = 7
target = 13
array[] = [3, 4, 13, 13, 13, 20, 40]

Output: 4

Explanation: 
Target value 13 appears last at index 4
```

### Example 2:
```
Input:
N = 7
target = 60
array[] = [3, 4, 13, 13, 13, 20, 40]

Output: -1

Explanation:
Target value 60 is not present in the array
```

## Test Cases
```
test1 = [1, 1, 1, 2, 2, 3], target = 2     # Should return 4
test2 = [5, 7, 7, 8, 8, 10], target = 8    # Should return 4
test3 = [1, 2, 3, 4, 5], target = 6        # Should return -1
test4 = [1], target = 1                     # Should return 0
test5 = [], target = 5                      # Should return -1
```

## Function Signature
```python
def lastOccurrence(arr: List[int], target: int) -> int:
    # Your implementation here
    pass
```
