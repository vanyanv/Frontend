# 4 Sum - Find Quadruplets with Target Sum

## Problem Statement
Given an array of N integers, find all unique quadruplets [arr[a], arr[b], arr[c], arr[d]] that sum up to a given target value.

### Prerequisites
- Understanding of 2-sum problem
- Understanding of 3-sum problem

### Constraints
- 0 ≤ a, b, c, d < n
- a, b, c, and d must be distinct
- arr[a] + arr[b] + arr[c] + arr[d] == target

## Examples

### Example 1
```
Input: 
arr = [1,0,-1,0,-2,2]
target = 0

Output: 
[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Explanation: Each quadruplet sums to target (0)
```

### Example 2
```
Input:
arr = [4,3,3,4,4,2,1,2,1,1]
target = 9

Output:
[[1,1,3,4],[1,2,2,4],[1,2,3,3]]

Explanation: Each quadruplet sums to target (9)
```

## Test Cases
```javascript
test('Empty array should return empty result', () => {
    expect(fourSum([], 0)).toEqual([]);
});

test('Array with less than 4 elements should return empty result', () => {
    expect(fourSum([1,2,3], 6)).toEqual([]);
});

test('Array with no valid quadruplets should return empty result', () => {
    expect(fourSum([1,2,3,4], 20)).toEqual([]);
});

test('Array with duplicate quadruplets should return unique results', () => {
    expect(fourSum([2,2,2,2,2], 8)).toEqual([[2,2,2,2]]);
});
```