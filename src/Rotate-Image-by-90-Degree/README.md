# Rotate Image by 90 Degree

## Problem Statement

Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

## Examples

### Example 1:

```javascript
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// After 90° clockwise rotation
// Expected output:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
```

### Example 2:

```javascript
const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

// After 90° clockwise rotation
// Expected output:
// [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11]
// ]
```

## Constraints:

- Matrix must be n x n (square matrix)
- Matrix elements can be any integers

## Challenge

Try to solve this problem:

1. In-place (without using extra space)
2. With O(n²) time complexity where n is the dimension of matrix

Good luck! 🚀
