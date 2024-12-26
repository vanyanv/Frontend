export function sortArray(array: number[]): number[] {
  let countZeros = 0;
  let countOnes = 0;
  let countTwos = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) countZeros++;
    if (array[i] === 1) countOnes++;
    if (array[i] === 2) countTwos++;
  }

  for (let i = 0; i < countZeros; i++) {
    array[i] = 0;
  }

  for (let i = countZeros; i < countZeros + countOnes; i++) {
    array[i] = 1;
  }

  for (
    let i = countZeros + countOnes;
    i < countZeros + countOnes + countTwos;
    i++
  ) {
    array[i] = 2;
  }
  return array;
}

console.log(sortArray([2, 0, 2, 1, 1, 0]));

console.log(sortArray([2, 0, 1]));

console.log(sortArray([0]));
