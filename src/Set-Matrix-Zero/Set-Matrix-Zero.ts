export function setMatrix(array: number[][]): number[][] {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(0)) {
      array[i].fill(0);
    }
  }

  return array;
}

console.log(
  setMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  setMatrix([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

//Time Complexity -> O(n * m)
//Space Complexity -> O(1)
