function numberOfSubbarays(array: number[], K: number): number {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    const currentSub = [];

    for (let j = i; j < array.length; j++) {
      currentSub.push(array[j]);

      const currentXor = currentSub.reduce((acc, curr) => acc ^ curr);

      if (currentXor === K) {
        console.log(currentSub);
        count++;
      }
    }
  }

  return count;
}

console.log('solved using brute force');
console.log(numberOfSubbarays([4, 2, 2, 6, 4], 6));

console.log(numberOfSubbarays([5, 6, 7, 8, 9], 5));

function numberOfSubbaraysBetter(array: number[], k): number {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let currentXor = 0;

    for (let j = i; j < array.length; j++) {
      currentXor = currentXor ^ array[j];

      if (currentXor === k) {
        count++;
      }
    }
  }

  return count;
}

console.log('solved using Better');
console.log(numberOfSubbaraysBetter([4, 2, 2, 6, 4], 6));

console.log(numberOfSubbaraysBetter([5, 6, 7, 8, 9], 5));
