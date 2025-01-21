# Implement Upper Bound

Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

## Problem Description

The upper bound is the smallest index where the value at that index is greater than x.

### Pre-requisite
* Binary Search algorithm

## Examples

### Example 1

```
Input: 
N = 4
arr[] = {1, 2, 2, 3}
x = 2

Output: 3

Explanation: 
arr[3] = 3 is the first element that is greater than x = 2
```

### Example 2

```
Input:
N = 6
arr[] = {3, 5, 8, 9, 15, 19}
x = 9

Output: 4

Explanation:
arr[4] = 15 is the first element that is greater than x = 9
```

## Test Cases

```cpp
assert(upperBound({1, 2, 2, 3}, 2) == 3);
assert(upperBound({3, 5, 8, 9, 15, 19}, 9) == 4);
assert(upperBound({1, 2, 3, 4, 5}, 5) == 5);
assert(upperBound({1, 1, 1, 2, 2, 2}, 1) == 3);
```

Try implementing this function on your own!