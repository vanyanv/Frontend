export function maxSubarray(array: number[]): number {
  let largest = -Infinity;
  let largestSub: number[] = [];
  for (let i = 0; i < array.length; i++) {
    const currentSub = [];
    let currentLargest = 0;
    for (let j = i; j < array.length; j++) {
      currentSub.push(array[j]);
      currentLargest += array[j];

      if (currentLargest >= largest) {
        largest = currentLargest;
        largestSub = currentSub;
      }
    }
  }
  console.log(largestSub);
  return largest;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarray([4, -1, 2, 1]));
console.log(maxSubarray([1]));
