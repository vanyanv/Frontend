# Search Element in a Rotated Sorted Array

## Problem Description
Given a sorted integer array that has been rotated around an unknown pivot point, find the index of a target element in the array. The array contains distinct values.

### Input
- An integer array `arr` that was originally sorted in ascending order but is now rotated
- A target value `k` to search for
- Array size `N`

### Output
- Return the index where `k` is found
- If `k` is not present, return -1

## Examples

### Example 1
```javascript
Input: arr = [4,5,6,7,0,1,2,3], k = 0
Output: 4
Explanation: Target 0 is found at index 4
```

### Example 2
```javascript
Input: arr = [4,5,6,7,0,1,2], k = 3
Output: -1
Explanation: Target 3 is not present in array
```

## Test Cases
```javascript
test('Empty array', () => {
    expect(search([], 5)).toBe(-1);
});

test('Single element array', () => {
    expect(search([1], 1)).toBe(0);
});

test('Array rotated once', () => {
    expect(search([2,1], 2)).toBe(0);
});

test('Larger rotated array', () => {
    expect(search([4,5,6,7,0,1,2], 6)).toBe(2);
});
```