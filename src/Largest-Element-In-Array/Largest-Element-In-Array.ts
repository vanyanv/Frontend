export function largestElement(array: number[]): number {
  if (array.length === 0) throw new Error('Empty Array');
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
}

//O(N) -> because we loop thru the array one time;
//O(N) -> we have one variable and just an array;
