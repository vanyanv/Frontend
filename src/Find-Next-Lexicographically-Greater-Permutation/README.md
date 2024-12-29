# Find Next Lexicographically Greater Permutation

Find the next lexicographically greater permutation of numbers in an array of integers.

## Problem Description

For a given sequence of numbers, find the next sequence that is just larger than the current one when considering all possible permutations. If such an arrangement is not possible, return the numbers sorted in ascending order.

## Examples

```javascript
// Example 1
const nums1 = [1, 2, 3];
console.log(nextPermutation(nums1)); // Expected output: [1, 3, 2]

// Example 2
const nums2 = [3, 2, 1];
console.log(nextPermutation(nums2)); // Expected output: [1, 2, 3]

// Example 3
const nums3 = [1, 1, 5];
console.log(nextPermutation(nums3)); // Expected output: [1, 5, 1]

// Example 4
const nums4 = [1];
console.log(nextPermutation(nums4)); // Expected output: [1]
```

## Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

## Function Signature

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextPermutation(nums) {
    // Your implementation here
}
```

## Notes

- The replacement must be done in-place and use only constant extra memory.
- The next permutation of an array of integers is the next lexicographically greater permutation of its integers.
