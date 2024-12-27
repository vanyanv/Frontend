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

// console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubarray([4, -1, 2, 1]));
// console.log(maxSubarray([1]));

//Time Complexity O(N) * O(N) = O(N^2) -> nested for loops thats go to N

//Space Complexity O(2N) -> we are using extra space to store the sub array

export function maxSubarrayOptimal(array: number[]): number {
  let sum = 0;
  let maximum = array[0];
  let sumArray = [];

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    sumArray.push(array[i]);
    if (sum > maximum) {
      maximum = sum;
    }

    if (sum < 0) {
      sum = 0;
      sumArray = [];
    }
  }

  console.log(sumArray);
  return maximum;
}

console.log('Kadans Algo');
console.log(maxSubarrayOptimal([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarrayOptimal([4, -1, 2, 1]));
console.log(maxSubarrayOptimal([1]));

//Time Complexity -> O(n) we are running one loop
//Space Complexity -> O(1) if we dont have to show the subArray and  O(n) if we do
