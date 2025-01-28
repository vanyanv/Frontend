function searchElement(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;
  let answer = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] >= target) {
      console.log(array[mid]);
      if (array[mid] === target) {
        answer = mid;
      }
      low = mid - 1;
    } else {
      high = mid + 1;
    }
  }

  return answer;
}

console.log(searchElement([4, 5, 6, 7, 0, 1, 2, 3], 0));
