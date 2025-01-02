# Spiral Traversal of Matrix

## Problem Statement

Given a Matrix, print the given matrix in spiral order.

## Examples

### Example 1:

**Input:**
```
Matrix[][] = {
    { 1,  2,  3,  4 },
    { 5,  6,  7,  8 },
    { 9,  10, 11, 12 },
    { 13, 14, 15, 16 }
}
```

**Output:** 
```
1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10
```

### Example 2:

**Input:**
```
Matrix[][] = {
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
}
```

**Output:**
```
1, 2, 3, 6, 9, 8, 7, 4, 5
```

## Task

Write a program to traverse the given matrix in spiral form and print the elements in the order of traversal.

## Notes

- The matrix can be of any size (M x N)
- The elements should be printed in the order of spiral traversal starting from the top-left corner
- Move right → down → left → up, and repeat until all elements are visited