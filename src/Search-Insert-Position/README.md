# Search Insert Position

## Problem Statement
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

## Examples

### Example 1:
```javascript
Input: nums = [1, 2, 4, 7], target = 6
Output: 3
// Explanation: 6 would be inserted at index 3 to maintain sorted order
```

### Example 2:
```javascript
Input: nums = [1, 2, 4, 7], target = 2
Output: 1
// Explanation: 2 is found at index 1
```

## Test Cases
```javascript
// Test Case 1
const nums1 = [1, 3, 5, 6];
const target1 = 5;
// Expected: 2

// Test Case 2
const nums2 = [1, 3, 5, 6];
const target2 = 2;
// Expected: 1

// Test Case 3
const nums3 = [1, 3, 5, 6];
const target3 = 7;
// Expected: 4

// Test Case 4
const nums4 = [];
const target4 = 1;
// Expected: 0
```

## Function Signature
```javascript
/**
 * @param {number[]} nums - Sorted array of distinct integers
 * @param {number} target - Target value to search/insert
 * @return {number} - Index where target is found or should be inserted
 */
function searchInsert(nums, target) {
    // Your implementation here
}
```

## Constraints
- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` contains distinct values sorted in ascending order
- `-10^4 <= target <= 10^4`