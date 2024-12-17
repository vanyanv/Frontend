function moveAllZerosToEnd(array: number[]) {
  let zerosCount = 0;
  //count all the zeros
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zerosCount++;
    }
  }

  const newArray = array.filter((number) => number !== 0);

  for (let i = 0; i < zerosCount; i++) {
    newArray.push(0);
  }

  return newArray;
}

// console.log(moveAllZerosToEnd([1, 0, 2, 3, 0, 4, 0, 1]));
// console.log(moveAllZerosToEnd([1, 2, 0, 1, 0, 4, 0]));

//time complexity
// O(3N) -> have 3 for loops
// O(N) -> have an extra array because we are filtering out all the zeros

function moveAllZerosToEnd2(array: number[]): number[] {
  const tempStorage = [];

  //get all the non zeros
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      tempStorage.push(array[i]);
    }
  }

  //put all non zeros number back into the correct order in the original array
  for (let i = 0; i < tempStorage.length; i++) {
    array[i] = tempStorage[i];
  }

  //we need to add all the zeros at the end of the array

  for (let i = tempStorage.length; i < array.length; i++) {
    array[i] = 0;
  }

  return array;
}

console.log(moveAllZerosToEnd2([1, 0, 2, 3, 0, 4, 0, 1]));
console.log(moveAllZerosToEnd2([1, 2, 0, 1, 0, 4, 0]));
