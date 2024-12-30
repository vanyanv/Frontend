# Leaders in an Array

## Problem Statement
Given an array, find all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

## Examples

### Example 1:
```javascript
Input: arr = [4, 7, 1, 0]
Output: [7, 1, 0]
```
**Explanation:** 
- 0 is a leader as it's the rightmost element
- 1 is a leader as it's greater than 0
- 7 is a leader as it's greater than 1 and 0

### Example 2:
```javascript
Input: arr = [10, 22, 12, 3, 0, 6]
Output: [22, 12, 6]
```
**Explanation:**
- 6 is a leader as it's the rightmost element
- 12 is a leader as it's greater than all elements to its right (3, 0, 6)
- 22 is a leader as it's greater than all elements to its right (12, 3, 0, 6)

## Test Cases
```javascript
describe('Leaders in Array', () => {
    test('should return leaders for regular array', () => {
        expect(findLeaders([4, 7, 1, 0])).toEqual([7, 1, 0]);
    });

    test('should return leaders for array with multiple leaders', () => {
        expect(findLeaders([10, 22, 12, 3, 0, 6])).toEqual([22, 12, 6]);
    });

    test('should handle array with all elements as leaders', () => {
        expect(findLeaders([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2, 1]);
    });

    test('should handle array with only one element', () => {
        expect(findLeaders([1])).toEqual([1]);
    });
});
```