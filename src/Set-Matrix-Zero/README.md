# Set Matrix Zeroes

## Problem Statement
Given a matrix, if an element is 0, set its entire row and column to 0. Perform it in-place.

## Examples

### Example 1:
```javascript
let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
// After setZeroes(matrix);
// Output: 
// [
//     [1, 0, 1],
//     [0, 0, 0],
//     [1, 0, 1]
// ]
```

### Example 2:
```javascript
let matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
// After setZeroes(matrix);
// Output:
// [
//     [0, 0, 0, 0],
//     [0, 4, 5, 0],
//     [0, 3, 1, 0]
// ]
```

## Function Signature
```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    // Your solution here
}
```

## Constraints
- m == matrix.length
- n == matrix[0].length
- 1 <= m, n <= 200
- -231 <= matrix[i][j] <= 231 - 1