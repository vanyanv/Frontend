export function findMajority(array: number[], n: number): number {
  const majority = n / 2;

  const storage = new Map<number, number>();

  for (let i = 0; i < array.length; i++) {
    if (!storage.has(array[i])) {
      storage.set(array[i], 1);
    } else {
      storage.set(array[i], storage.get(array[i])! + 1);
    }
  }

  for (const [key, value] of storage) {
    if (value > majority) return key;
  }
}

console.log(findMajority([2, 2, 1, 1, 1, 2, 2], 7));
console.log(findMajority([3, 2, 3], 3));
console.log(findMajority([4, 4, 2, 4, 3, 4, 4, 3, 2, 4], 10));

//O(n) + O(n)
//O(n)