export function linearSearch(array: number[], num: number): number {
  if (array.length === 0) return -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 6));
console.log(linearSearch([10, 20, 30, 40, 50], 30));
console.log(linearSearch([1], 1));
