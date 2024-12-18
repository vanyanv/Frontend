# Linear Search

## Problem Description
Given an array of integers and a target number, implement linear search to find if the target number exists in the array. If present, return its index; otherwise, return -1.

## Examples

### Example 1
```
Input: 
Array = [1, 2, 3, 4, 5]
Target = 3

Output: 2
Explanation: Element 3 is found at index 2
```

### Example 2
```
Input:
Array = [5, 4, 3, 2, 1]
Target = 5

Output: 0
Explanation: Element 5 is found at index 0
```

## Test Cases
```
Test Case 1:
Array: [1, 2, 3, 4, 5]
Target: 6
Expected Output: -1

Test Case 2:
Array: [10, 20, 30, 40, 50]
Target: 30
Expected Output: 2

Test Case 3:
Array: [1]
Target: 1
Expected Output: 0
```

## Constraints
- 1 ≤ Array Length ≤ 10^5
- -10^9 ≤ Array Elements ≤ 10^9
- Time Complexity: O(n)
- Space Complexity: O(1)