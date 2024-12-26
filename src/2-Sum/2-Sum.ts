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
