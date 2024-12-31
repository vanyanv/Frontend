export function longestConescutiveSeq(array: number[]): number {
  let answer = 0;
  //i need to sort the array
  array.sort((a, b) => a - b);

  //go thru the array and get the longest sequence
  for (let i = 0; i < array.length; i++) {
    let currentSeq = 0;
    for (let j = i; j < array.length; j++) {
      if (array[j] === array[i] + currentSeq) {
        currentSeq++;
      } else {
        break;
      }
    }
    answer = Math.max(answer, currentSeq);
  }

  return answer;
}

console.log(longestConescutiveSeq([100, 200, 1, 3, 2, 4]));
console.log(longestConescutiveSeq([3, 8, 5, 7, 6]));
console.log(longestConescutiveSeq([1, 2, 3, 4, 5]));

//Time Complextiy -> o(nlogN) + O(N^2)
//Space Complexity -> o(1)
