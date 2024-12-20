export function findMissingNumber(array: number[], n: number): number {
  const hash: { [key: number]: number } = {};
  for (let i = 1; i <= n; i++) {
    hash[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] in hash) {
      hash[array[i]] += 1;
    }
  }

  for (const key in hash) {
    if (hash[key] === 0) {
      return Number(key);
    }
  }

  return -1;
}

console.log(findMissingNumber([1, 2, 3, 5], 5));
console.log(findMissingNumber([1, 2, 4, 5], 5)); // Should return 3
console.log(findMissingNumber([2, 3, 4, 5], 5)); // Should return 1
console.log(findMissingNumber([1, 3, 4, 5], 5)); // Should return 2
console.log(findMissingNumber([1, 2, 3, 4], 5)); // Should return 5
console.log(findMissingNumber([1, 2, 3, 4, 5], 5)); // Should return undefined (no missing number)
