//recursively
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

function reverseArrayR<T>(array: T[]): T[] {
  //go thru half the array
  for (let i = 0; i < Math.floor((array.length - 1) / 2); i++) {
    //swap the elements in place
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i],
    ];
  }

  return array;
}

console.log(reverseArrayR([1, 2, 4, 5, 6], 0));
