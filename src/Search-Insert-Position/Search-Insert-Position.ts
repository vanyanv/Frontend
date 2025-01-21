function searchInsert(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;

  let answer = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const current = array[mid];

    if (current >= target) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}

console.log(searchInsert([1, 2, 4, 7], 6));
console.log(searchInsert([1, 2, 4, 7], 2));
