function countOccurance(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;
  let answer = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] >= target) {
      answer += 1;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  low = 0;
  high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] <= target) {
      answer += 1;

      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return answer;
}

console.log(countOccurance([2, 2, 3, 3, 3, 3, 4], 3));
console.log(countOccurance([1, 1, 2, 2, 2, 2, 2, 3], 2));
