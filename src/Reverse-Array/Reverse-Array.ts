function reverseArray<T>(array: T[], i: number): T[] {
  //base case
  if (i > Math.floor(array.length / 2)) return array;

  //swapping elements in place
  [array[i], array[array.length - 1 - i]] = [
    array[array.length - 1 - i],
    array[i],
  ];
  return reverseArray(array, i + 1);
}

console.log(reverseArray([1, 2, 4, 5, 6], 0));
