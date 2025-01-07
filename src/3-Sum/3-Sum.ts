export function findtriplets(array: number[]): number[][] {
  const storage = new Set<string>();

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) {
          const sorted = JSON.stringify(
            [array[i], array[j], array[k]].sort((a, b) => a - b)
          );
          if (!storage.has(sorted)) {
            storage.add(sorted);
          }
        }
      }
    }
  }

  return [...storage].map((str) => JSON.parse(str));
}

console.log(findtriplets([-1, 0, 1, 2, -1, -4]));
console.log(findtriplets([-1, 0, 1, 0]));
