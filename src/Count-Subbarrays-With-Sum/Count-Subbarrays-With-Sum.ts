export function countSubarray(array: number[], k: number): number {
  if (array.length === 0) return -1;
  let answerCount = 0;

  for (let i = 0; i < array.length; i++) {
    let count = 0;

    for (let j = i; j < array.length; j++) {
      count += array[j];

      if (count === k) {
        answerCount++;
      }
    }
  }

  return answerCount;
}

console.log('Brute Force');
console.log(countSubarray([3, 1, 2, 4], 6));
console.log(countSubarray([1, 2, 3], 3));

//Time Complexity -> O(N^2)
//Space Complexity -> O(1) or O(N) if we store our subarrays

export function countSubarrayOptimal(array: number[], k: number): number {
  const hash = new Map<number, number>();
  let prefixSum = 0;
  let count = 0;

  hash.set(0, 1);
  for (let i = 0; i < array.length; i++) {
    prefixSum += array[i];
    const prev = prefixSum - k;

    if (hash.has(prev)) {
      count += hash.get(prev) ?? 0;
    }

    hash.set(prefixSum, (hash.get(prefixSum) ?? 0) + 1);
  }

  return count;
}
console.log('Optimal');
console.log(countSubarrayOptimal([3, 1, 2, 4], 6));
console.log(countSubarrayOptimal([1, 2, 3], 3));
console.log(countSubarrayOptimal([-1, -1, 1], 0));

//time complexity O(n)
//space complexity o(n)
