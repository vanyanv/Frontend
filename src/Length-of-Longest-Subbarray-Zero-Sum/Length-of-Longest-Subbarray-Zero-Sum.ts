export default function longestSubarray(array: number[]): number {
  let longestSubarray = 0;

  for (let i = 0; i < array.length; i++) {
    const current = [];
    let sum = array[i];
    current.push(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      current.push(array[j]);
      if (sum === 0) {
        longestSubarray = Math.max(longestSubarray, current.length);
      }
    }
  }

  return longestSubarray;
}

console.log('first solution');
console.log(longestSubarray([9, -3, 3, -1, 6, -5]));
console.log(longestSubarray([6, -2, 2, -8, 1, 7, 4, -10]));
console.log(longestSubarray([1, 3, -5, 6, -2]));

//Time Complexity -> O(n^2)
//Space Complexity -> O(N)
