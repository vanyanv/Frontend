function mergeTwoSortedArray(array1: number[], array2: number[]) {
  const array = [];

  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (j >= array2.length || (i < array1.length && array1[i] < array2[j])) {
      array.push(array1[i]);
      i++;
    } else {
      array.push(array2[j]);
      j++;
    }
  }

  for (let i = 0; i < array1.length; i++) {
    array1[i] = array[i];
  }

  for (let i = array1.length; i < array.length; i++) {
    array2[i - array1.length] = array[i];
  }

  console.log(array1);
  console.log(array2);
}

console.log('brute force');
console.log(mergeTwoSortedArray([1, 4, 8, 10], [2, 3, 9]));
console.log(mergeTwoSortedArray([1, 3, 5, 7], [0, 2, 6, 8, 9]));

function mergeTwoSortedArrayOptimal(array1: number[], array2: number[]) {
  if (array1.length === 0 || array2.length === 0) {
    return;
  }

  let end = array1.length - 1;
  let start = 0;

  while (end >= 0 && start < array2.length && array1[end] > array2[start]) {
    [array1[end], array2[start]] = [array2[start], array1[end]];
    end--;
    start++;
  }

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  console.log(array1);
  console.log(array2);
}

console.log('Optimally');
console.log(mergeTwoSortedArrayOptimal([1, 4, 8, 10], [2, 3, 9]));
console.log(mergeTwoSortedArrayOptimal([1, 3, 5, 7], [0, 2, 6, 8, 9]));
