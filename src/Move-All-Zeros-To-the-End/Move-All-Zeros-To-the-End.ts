function moveAllZerosToEnd(array: number[]) {
  let zerosCount = 0;
  //count all the zeros
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zerosCount++;
    }
  }

  console.log(zerosCount);
  const newArray = array.filter((number) => number !== 0);

  for (let i = 0; i < zerosCount; i++) {
    newArray.push(0);
  }

  return newArray;
}

console.log(moveAllZerosToEnd([1, 0, 2, 3, 0, 4, 0, 1]));
console.log(moveAllZerosToEnd([1, 2, 0, 1, 0, 4, 0]));

//time complexity
// O(3N) -> have 3 for loops
// O(N) -> have an extra array because we are filtering out all the zeros
