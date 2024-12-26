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

export function longestSubarrayOptimal(array: number[], k: number): number {
  let i = 0;
  let j = 0;
  let sum = array[0];
  let max = 0;

  while (i < array.length) {
    while (j <= i && sum > k) {
      sum -= array[j];
      j++;
    }

    if (sum === k) {
      max = Math.max(max, i - j + 1);
    }

    i++;
    if (i < array.length) {
      sum += array[i];
    }
  }

  return max;
}

console.log('OPTIMAL');
console.log(longestSubarrayOptimal([2, 3, 5], 5));
console.log(longestSubarrayOptimal([2, 3, 5, 1, 9], 10));
console.log(longestSubarrayOptimal([1, 2, 3, 4, 5], 9));
console.log(longestSubarrayOptimal([1, 2, 3, 4, 5], 15));
console.log(longestSubarrayOptimal([1, 2, 3, 4, 5], 5));
console.log(longestSubarrayOptimal([1, 2, 3, 4, 5], 1));
