function rotateArray(n: number, array: number[]): number[] {
  const rotated = Array(n);

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      rotated[n - 1] = array[i];
    } else {
      rotated[i - 1] = array[i];
    }
  }

  console.log(rotated);
  return rotated;
}

rotateArray(5, [1, 2, 3, 4, 5]);
rotateArray(1, [3]);

//this function runs at O(N) -> we only have on for loop
//space complexity will be 0(N) -> since we are only using N extra space for a new array;

function rotateArrayOptimal(n: number, array: number[]): number[] {
  const temp = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array[n - 1] = temp;

  console.log(array);
  return array;
}

rotateArrayOptimal(5, [1, 2, 3, 4, 5]);
rotateArrayOptimal(1, [3]);
