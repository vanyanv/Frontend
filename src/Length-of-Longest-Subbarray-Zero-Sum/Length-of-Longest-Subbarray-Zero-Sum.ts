export function longestSubarray(array: number[]): number {
  let longestSubarray = 0;

  for (let i = 0; i < array.length; i++) {
    const current = [];
    let sum = array[i];
    current.push(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      current.push(array[j]);
      if (sum === 0) {
        longestSubarray = Math.max(longestSubarray, current.length);
      }
    }
  }

  return longestSubarray;
}

console.log('first solution');
console.log(longestSubarray([9, -3, 3, -1, 6, -5]));
console.log(longestSubarray([6, -2, 2, -8, 1, 7, 4, -10]));
console.log(longestSubarray([1, 3, -5, 6, -2]));

//Time Complexity -> O(n^2)
//Space Complexity -> O(N)

export function longestSubarrayOptimal(array: number[]): number {
  const cache = new Map<number, number>();
  let maximum = 0;

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (sum === 0) {
      maximum = i + 1;
    } else {
      if (cache.has(sum)) {
        maximum = Math.max(maximum, i - (cache.get(sum) ?? 0));
      } else {
        cache.set(sum, i);
      }
    }
  }
  return maximum;
}

console.log('Optimal');
console.log(longestSubarrayOptimal([9, -3, 3, -1, 6, -5]));
console.log(longestSubarrayOptimal([6, -2, 2, -8, 1, 7, 4, -10]));
console.log(longestSubarrayOptimal([1, 3, -5, 6, -2]));
