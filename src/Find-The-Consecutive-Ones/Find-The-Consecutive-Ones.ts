export function consecutiveOnes(array: number[]): number {
  if (array.length === 0) return 0;
  let maxCount = 0;
  let currentCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 1) {
      maxCount = currentCount;
      currentCount = 0;
    } else {
      currentCount++;
    }
  }

  if (currentCount > maxCount) maxCount = currentCount;
  return maxCount;
}

console.log(consecutiveOnes([1, 1, 0, 1, 1, 1])); //3
console.log(consecutiveOnes([1, 0, 1, 1, 0, 1])); //2
console.log(consecutiveOnes([])); //0
console.log(consecutiveOnes([1, 1, 0, 1, 1, 1, 1, 1])); //5

// O(n) because we are only using one for loop to go thru the array
// O(1) because we are not using any extra space to store anything
