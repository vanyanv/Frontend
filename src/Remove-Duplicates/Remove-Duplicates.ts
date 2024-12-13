export function removeDuplicates(array: number[]): number {
  //we need a way to keep track of elements that have been seen
  const seen = new Set(array);
  const uniqueArr = Array.from(seen);

  for (let i = 0; i < uniqueArr.length; i++) {
    array[i] = uniqueArr[i];
  }

  return uniqueArr.length;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3]));

//optimal solution:

export function removeDuplicatesOptimal(array: number[]): number {
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }

  return i + 1;
}
