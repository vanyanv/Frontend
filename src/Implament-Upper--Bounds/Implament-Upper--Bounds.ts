function upperBounds(array: number[], x: number): number {
  let low = 0;
  let high = array.length - 1;

  let answer = array.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const current = array[mid];

    if (current > x) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}

console.log('brut force');
console.log(upperBounds([1, 2, 2, 3], 2));
console.log(upperBounds([3, 5, 8, 9, 15, 19], 9));
