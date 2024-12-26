export function twoSum(array: number[], int: number): number[] | undefined {
  const cache = new Map<number, number>();

  for (let i = 0; i < array.length; i++) {
    const diff = int - array[i];

    if (!cache.has(diff)) {
      cache.set(array[i], i);
    } else {
      const cachedIndex = cache.get(diff);
      if (cachedIndex !== undefined) {
        return [cachedIndex, i];
      }
    }
  }

  return [-1, -1];
}

console.log(twoSum([2, 6, 5, 8, 11], 14));
console.log(twoSum([2, 6, 5, 8, 11], 15));

export function twoSumOptimal(array: number[], target: number): number[] {
  let right = 0;
  let left = array.length - 1;

  //sort the array
  array.sort((a, b) => a - b);

  while (right < left) {
    const sum = array[right] + array[left];

    if (sum === target) return [right, left];
    if (sum < target) {
      right++;
    }

    if (sum > target) {
      left--;
    }
  }
  return [-1, -1];
}
console.log('TWO POinter OPTIMAL');
console.log(twoSumOptimal([2, 6, 5, 8, 11], 14));
console.log(twoSumOptimal([2, 6, 5, 8, 11], 15));

