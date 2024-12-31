export function setMatrix(array: number[][]): number[][] {
  //n^2
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        const column = j;
        const row = i;
        updateColumn(array, column);
        updateRow(array, row);
      }
    }
  }

  //O(n^2)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === -1) {
        array[i][j] = 0;
      }
    }
  }

  return array;
}

//O(N)
function updateColumn(array: number[][], index: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][index] !== 0) {
      array[i][index] = -1;
    }
  }
}

//O(N^2)
function updateRow(array: number[][], index: number) {
  for (let i = index; i <= index; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] !== 0) {
        array[i][j] = -1;
      }
    }
  }
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
