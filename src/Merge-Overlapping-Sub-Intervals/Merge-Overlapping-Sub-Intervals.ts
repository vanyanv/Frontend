function mergeOverlapping(array: number[][]): number[][] {
  if (array.length === 0) return [];
  
  array.sort((a, b) => a[0] - b[0]);
  const answer: number[][] = [];
  
  let start = array[0][0];
  let end = array[0][1];

  for (let i = 1; i < array.length; i++) {
    if (array[i][0] <= end) {
      end = Math.max(end, array[i][1]);
    } else {
      answer.push([start, end]);
      start = array[i][0];
      end = array[i][1];
    }
  }
  
  answer.push([start, end]);
  return answer;
}

console.log('brute froce');
console.log(
  mergeOverlapping([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  mergeOverlapping([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  mergeOverlapping([
    [1, 4],
    [0, 4],
  ])
);
