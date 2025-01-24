function lastOccurance(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;
  let answer = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] <= target) {
      if (array[mid] === target) answer = mid;

      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return answer;
}

console.log(lastOccurance([3, 4, 13, 13, 13, 20, 40], 13));
console.log(lastOccurance([3, 4, 13, 13, 13, 20, 40], 60));
