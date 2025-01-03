# Find Elements Appearing More Than N/3 Times

## Problem Description
Given an array of N integers, find all elements that appear more than N/3 times. If no such element exists, return an empty array.

## Problem Statement
You need to identify elements in an array that appear more than N/3 times in the input array.

## Examples

### Example 1
```
Input: N = 5, array = [1,2,2,3,2]
Output: [2]
Explanation: Count(1) = 1, Count(2) = 3, Count(3) = 1
2 appears 3 times which is greater than N/3
```

### Example 2
```
Input: N = 6, array = [11,33,33,11,33,11]
Output: [11,33]
Explanation:
- Count(11) = 3 (appears 3 times)
- Count(33) = 3 (appears 3 times)
Both appear more than N/3 (2) times
```

## JavaScript Example
```javascript
const arr = [11, 33, 33, 11, 33, 11];
// Your solution here
```

## Related Topics
- Arrays
- Counting
- Boyer-Moore Majority Vote Algorithm