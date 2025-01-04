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

//Time Complexity -> O(n^3)
//Space Complexity -> O(1)

function setMatrixBetter(array: number[][]): number[][] {
  const columns = [];
  const rows = [];

  for (let i = 0; i < array.length; i++) {
    const currentArray = array[i];

    for (let j = 0; j < currentArray.length; j++) {
      if (currentArray[j] === 0) {
        columns[j] = -1;
        rows[i] = -1;
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    const currentArray = array[i];

    for (let j = 0; j < currentArray.length; j++) {
      if (columns[j] === -1) {
        currentArray[j] = 0;
      }

      if (rows[i] === -1) {
        currentArray[j] = 0;
      }
    }
  }
  return array;
}

console.log('Better Solution');
console.log(
  setMatrixBetter([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  setMatrixBetter([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

//Time Complexity -> O(n^2)
//Space COmplexity -> O(r) + O(c)
