function unionOfSortedArrays(
  array1: number[],
  array2: number[],
  n: number,
  m: number
): number[] {
  const union = new Set<number>();

  array1.forEach((element) => {
    if (!union.has(element)) {
      union.add(element);
    }
  });

  array2.forEach((element) => {
    if (!union.has(element)) {
      union.add(element);
    }
  });

  return [...union];
}

console.log(unionOfSortedArrays([1, 2, 3, 4, 5], [2, 3, 4, 4, 5], 5, 5)); // [1, 2, 3, 4, 5]
console.log(unionOfSortedArrays([1, 1, 1, 2, 3], [2, 3, 4, 5, 6], 5, 5)); // [1, 2, 3, 4, 5, 6]
console.log(unionOfSortedArrays([1, 2], [3, 4], 2, 2)); // [1, 2, 3, 4]
console.log(unionOfSortedArrays([1], [2], 1, 1)); // [1, 2]

//O(n) + o(m) -> time complexity o(2n)
//0(m) + O(n) -> space 0(M + N)
