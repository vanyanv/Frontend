# Pascal's Triangle

## Problem Description
Write a program to solve three variations of Pascal's Triangle problems:

### Variation 1
Given row number `r` and column number `c`, find the element at position (r, c) in Pascal's triangle.

### Variation 2
Given row number `n`, print the entire n-th row of Pascal's triangle.

### Variation 3
Given number of rows `n`, print the first n rows of Pascal's triangle.

## Examples

### Example 1
```
Input: N = 5, r = 5, c = 3

Expected Output:
Variation 1: 6
Variation 2: 1 4 6 4 1
Variation 3:
1 
1 1 
1 2 1 
1 3 3 1 
1 4 6 4 1
```

### Example 2
```
Input: N = 1, r = 1, c = 1

Expected Output:
Variation 1: 1
Variation 2: 1
Variation 3: 1
```

## Test Cases
```javascript
describe('Pascal Triangle Tests', () => {
    test('Variation 1 - Get Element', () => {
        expect(getElement(5, 3)).toBe(6);
        expect(getElement(1, 1)).toBe(1);
        expect(getElement(4, 2)).toBe(3);
    });

    test('Variation 2 - Get Row', () => {
        expect(getRow(5)).toEqual([1, 4, 6, 4, 1]);
        expect(getRow(1)).toEqual([1]);
        expect(getRow(3)).toEqual([1, 2, 1]);
    });

    test('Variation 3 - Get Triangle', () => {
        expect(getTriangle(1)).toEqual([[1]]);
        expect(getTriangle(3)).toEqual([[1], [1,1], [1,2,1]]);
    });
});
```

## Constraints
- 1 ≤ N ≤ 50
- 1 ≤ r, c ≤ N
- Row and column numbers start from 1