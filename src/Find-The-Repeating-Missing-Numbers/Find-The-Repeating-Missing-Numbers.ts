function findTheRepeatingandMissing(array: number[]): number[] {
  let repeating: number = -1;

  const cache = new Set<number>();

  for (let i = 0; i < array.length; i++) {
    if (cache.has(array[i])) {
      repeating = array[i];
    }

    cache.add(array[i]);
  }

  const sum = Array.from(cache).reduce((acc, val) => acc + val, 0);
  let sum2 = 0;
  for (let i = 1; i <= array.length; i++) {
    sum2 += i;
  }

  return [repeating, sum2 - sum];
}

console.log('brute force');
console.log(findTheRepeatingandMissing([3, 1, 2, 5, 3]));
console.log(findTheRepeatingandMissing([3, 1, 2, 5, 4, 6, 7, 5]));
