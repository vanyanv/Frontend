export function longestSubarray(array: number[], k: number): number {
  let max = 0;

  let current = 0;
  let i = 0;
  let j = 0;
  let sum = 0;

  while (i < array.length) {
    if (sum < k) {
      sum += array[j];
      current += 1;
      j++;
    }

    if (sum == k) {
      if (current > max) {
        max = current;
      }
      sum = 0;
      current = 0;
      i++;
      j = i + 1;
    }
  }

  return max;
}

console.log(longestSubarray([2, 3, 5], 5));
console.log(longestSubarray([2, 3, 5, 1, 9], 10));
console.log(longestSubarray([1, 2, 3, 4, 5], 9));
console.log(longestSubarray([1, 2, 3, 4, 5], 15));
console.log(longestSubarray([1, 2, 3, 4, 5], 5));
console.log(longestSubarray([1, 2, 3, 4, 5], 1));
