# Left Rotate Array by One Position

## Problem Description
Given an array of N integers, write a program to rotate all elements of the array one position to the left.

In left rotation by one position, all elements in the array move one position left, and the first element becomes the last element.

## Examples

### Example 1:
**Input:**
```
N = 5
Array = [1, 2, 3, 4, 5]
```
**Output:**
```
[2, 3, 4, 5, 1]
```
**Explanation:**
After one left rotation, element at index 0 moves to the end, and all other elements shift one position left.

### Example 2:
**Input:**
```
N = 1
Array = [3]
```
**Output:**
```
[3]
```
**Explanation:**
For an array with single element, rotation doesn't change the array.

## Problem Constraints
- 1 ≤ N ≤ 10^5
- 1 ≤ Array elements ≤ 10^5

## Expected
- Time Complexity: Try to solve in O(n)
- Space Complexity: Try to solve in O(1)