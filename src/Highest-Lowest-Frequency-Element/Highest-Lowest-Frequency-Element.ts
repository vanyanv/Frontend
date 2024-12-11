export function frequency<T extends number>(array: T[]): number[] {
  const cache: Map<T, number> = new Map();

  for (let i = 0; i < array.length; i++) {
    if (!cache.has(array[i])) {
      cache.set(array[i], 1);
    } else {
      cache.set(array[i], (cache.get(array[i]) || 0) + 1);
    }
  }

  let mostFrequent = -Infinity;
  let leastFrequent = Infinity;
  let maxFreq = 0;
  let minFreq = Infinity;

  // Find most and least frequent numbers
  for (const [num, freq] of cache) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mostFrequent = num;
    }
    if (freq < minFreq) {
      minFreq = freq;
      leastFrequent = num;
    }
  }

  return [mostFrequent, leastFrequent];
}

console.log(frequency([10, 5, 10, 15, 10, 5]));
console.log(frequency([2, 2, 3, 4, 4, 2]));
