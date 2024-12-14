export function rotateArrayByK(
  array: number[],
  k: number,
  direction: string
): number[] {
  const storage =
    direction == 'right'
      ? array.splice(array.length - k, k)
      : array.splice(0, k);

  if (direction == 'right') {
    return [...storage, ...array];
  } else {
    return [...array, ...storage];
  }
}

console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 2, 'right'));
console.log(rotateArrayByK([3, 7, 8, 9, 10, 11], 3, 'left'));
