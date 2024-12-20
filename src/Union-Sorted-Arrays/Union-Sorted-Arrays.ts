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

// console.log(unionOfSortedArrays([1, 2, 3, 4, 5], [2, 3, 4, 4, 5], 5, 5)); // [1, 2, 3, 4, 5]
// console.log(unionOfSortedArrays([1, 1, 1, 2, 3], [2, 3, 4, 5, 6], 5, 5)); // [1, 2, 3, 4, 5, 6]
// console.log(unionOfSortedArrays([1, 2], [3, 4], 2, 2)); // [1, 2, 3, 4]
// console.log(unionOfSortedArrays([1], [2], 1, 1)); // [1, 2]

//O(n) + o(m) -> time complexity o(2n)
//0(m) + O(n) -> space 0(M + N)
function unionOfSortedArraysOptimal(
  array1: number[],
  array2: number[],
  n: number,
  m: number
): number[] {
  let pointer1 = 0;
  let pointer2 = 0;

  const unionArray: number[] = [];
  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (array1[pointer1] < array2[pointer2]) {
      if (unionArray[unionArray.length - 1] !== array1[pointer1]) {
        unionArray.push(array1[pointer1]);
      }
      pointer1++;
    } else {
      if (unionArray[unionArray.length - 1] !== array2[pointer2]) {
        unionArray.push(array2[pointer2]);
      }
      pointer2++;
    }
  }

  while (pointer1 < array1.length) {
    if (unionArray[unionArray.length - 1] !== array1[pointer1]) {
      unionArray.push(array1[pointer1]);
    }
    pointer1++;
  }

  while (pointer2 < array2.length) {
    if (unionArray[unionArray.length - 1] !== array2[pointer2]) {
      unionArray.push(array2[pointer2]);
    }
    pointer2++;
  }
  return unionArray;
}

// O(n + m) + O(n) + O(m) -> O(3n) time complexity because we are running 3 while loops and we have to go thru both arrays
// O(1) if the return arrays is not considered but O(n+m) if it is
console.log(unionOfSortedArraysOptimal([1, 2, 3, 4, 5], [2, 3, 4, 4, 5], 5, 5)); // [1, 2, 3, 4, 5]
console.log(unionOfSortedArraysOptimal([1, 1, 1, 2, 3], [2, 3, 4, 5, 6], 5, 5)); // [1, 2, 3, 4, 5, 6]
console.log(unionOfSortedArraysOptimal([1, 2], [3, 4], 2, 2)); // [1, 2, 3, 4]
console.log(unionOfSortedArraysOptimal([1], [2], 1, 1)); // [1, 2]
