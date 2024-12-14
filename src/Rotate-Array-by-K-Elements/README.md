# Rotate Array by K Elements

## Problem Description
Given an array of integers, write a program to rotate the array by 'K' elements. The rotation can be either towards the left or right.

## Problem Statement
You need to implement a function that takes an array of integers, a value 'K', and a direction (left/right) as input. The function should rotate the array by 'K' positions in the specified direction.

## Examples

### Example 1:
**Input:**
- Array: [1,2,3,4,5,6,7]
- K: 2
- Direction: right

**Output:** 
- [6,7,1,2,3,4,5]

### Example 2:
**Input:**
- Array: [3,7,8,9,10,11]
- K: 3
- Direction: left

**Output:**
- [9,10,11,3,7,8]

## Notes
- The array can contain any number of integers
- K can be any positive integer
- Direction will be either 'left' or 'right'
- Consider handling edge cases where K might be larger than array length