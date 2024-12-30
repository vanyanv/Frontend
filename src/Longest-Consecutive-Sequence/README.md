# Longest Consecutive Sequence

## Problem Statement
Given an array of integers, find the length of the longest sequence which contains consecutive elements.

## Examples

### Example 1
```javascript
const arr = [100, 200, 1, 3, 2, 4];
// Output: 4
// Explanation: Longest consecutive sequence is [1, 2, 3, 4]
```

### Example 2
```javascript
const arr = [3, 8, 5, 7, 6];
// Output: 4
// Explanation: Longest consecutive sequence is [5, 6, 7, 8]
```

## Test Cases
```javascript
describe('Longest Consecutive Sequence', () => {
    test('should return 4 for [100, 200, 1, 3, 2, 4]', () => {
        expect(longestConsecutiveSequence([100, 200, 1, 3, 2, 4])).toBe(4);
    });

    test('should return 4 for [3, 8, 5, 7, 6]', () => {
        expect(longestConsecutiveSequence([3, 8, 5, 7, 6])).toBe(4);
    });

    test('should return 1 for [1]', () => {
        expect(longestConsecutiveSequence([1])).toBe(1);
    });

    test('should return 0 for empty array', () => {
        expect(longestConsecutiveSequence([])).toBe(0);
    });
});
```