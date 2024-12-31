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

export function longestConescutiveSeqBetter(array: number[]): number {
  let longest = 1;
  let countCurr = 0;
  let lastSmallest = -Infinity;

  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (current - 1 === lastSmallest) {
      countCurr++;
      lastSmallest = current;
    } else if (current - 1 !== lastSmallest) {
      lastSmallest = current;
      countCurr = 1;
    }

    longest = Math.max(longest, countCurr);
  }

  return longest;
}

console.log(longestConescutiveSeqBetter([100, 200, 1, 3, 2, 4]));
console.log(longestConescutiveSeqBetter([3, 8, 5, 7, 6]));
console.log(longestConescutiveSeqBetter([1, 2, 3, 4, 5]));

export function longestConescutiveSeqOptimal(array: number[]): number {
  const hashMap = new Set<number>();
  let longest = 1;

  for (let i = 0; i < array.length; i++) {
    hashMap.add(array[i]);
  }

  for (const key of hashMap) {
    const num = key;

    if (!hashMap.has(num - 1)) {
      let count = 1;
      let x: number = key;

      while (hashMap.has(x + 1)) {
        x = x + 1;
        count = count + 1;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;
}

console.log('Optimal Solution');
console.log(longestConescutiveSeqOptimal([100, 200, 1, 3, 2, 4]));
console.log(longestConescutiveSeqOptimal([3, 8, 5, 7, 6]));
console.log(longestConescutiveSeqOptimal([1, 2, 3, 4, 5]));

//Time Complexity O