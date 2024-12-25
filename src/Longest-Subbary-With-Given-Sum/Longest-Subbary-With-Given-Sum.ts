export function longestSubarray(array: number[], k: number): number {
  let maxLength = 0;

  for (let start = 0; start < array.length; start++) {
    let sum = 0;
    let length = 0;
    for (let end = start; end < array.length; end++) {
      sum += array[end];
      length++;
      if (sum === k) {
        maxLength = Math.max(maxLength, length);
      }
      if (sum > k) break;
    }
  }

  return maxLength;
}

console.log(longestSubarray([2, 3, 5], 5));
console.log(longestSubarray([2, 3, 5, 1, 9], 10));
console.log(longestSubarray([1, 2, 3, 4, 5], 9));
console.log(longestSubarray([1, 2, 3, 4, 5], 15));
console.log(longestSubarray([1, 2, 3, 4, 5], 5));
console.log(longestSubarray([1, 2, 3, 4, 5], 1));

export function longestSubarrayOptimal(array: number[], k: number): number {}
