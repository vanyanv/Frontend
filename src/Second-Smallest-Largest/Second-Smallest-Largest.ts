export function secondSmallestGeatest(array: number[]): void {
  if (!array || array.length < 2) {
    console.log('please submit an array');
  }
  {
    let highest = -Infinity;
    let secondHighest = -Infinity;
    let lowest = Infinity;
    let secondLowest = Infinity;

    // Single pass through the array
    for (let i = 0; i < array.length; i++) {
      // Update highest and second highest
      if (array[i] > highest) {
        secondHighest = highest;
        highest = array[i];
      } else if (array[i] > secondHighest) {
        secondHighest = array[i];
      }

      // Update lowest and second lowest
      if (array[i] < lowest) {
        secondLowest = lowest;
        lowest = array[i];
      } else if (array[i] < secondLowest) {
        secondLowest = array[i];
      }
    }

    console.log(secondHighest);
    console.log(secondLowest);
  }
}

secondSmallestGeatest([1, 2, 3, 4, 5]);

// 2
// 4
