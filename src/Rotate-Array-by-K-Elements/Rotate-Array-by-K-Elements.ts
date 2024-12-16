export function rotateArrayByK(
  array: number[],
  k: number,
  direction: string
): number[] {
  //check when k is greater than the length of the array
  k = k % array.length;

  if (array.length < 2) return array;
  const storage =
    direction === 'right'
      ? array.splice(array.length - k, k)
      : array.splice(0, k);

  if (direction === 'right') {
    return [...storage, ...array];
  } else {
    return [...array, ...storage];
  }
}

console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 2, 'right'));
console.log(rotateArrayByK([3, 7, 8, 9, 10, 11], 3, 'left'));

// 0(n) -> time complexity because we are using the spread operator to got thru storage and the array
// 0(n) -> space complexity because we use storage to hold out numbers and also another array to return the rotated array

