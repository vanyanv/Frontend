export function rotate(array: number[][]): number[][] {
  const answer: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    answer.push([]);
  }

  for (let i = 0; i < array.length; i++) {
    const current = array[i]; //array

    for (let j = 0; j < current.length; j++) {
      answer[j][array.length - 1 - i] = current[j];
    }
  }

  return answer;
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

//Time Complexity -> O(n) + O(n^2)
//Space Complexity -> O(n2)
