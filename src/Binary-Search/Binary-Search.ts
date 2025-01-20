function binarySearch(array: number[], target: number): boolean {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midValue = array[mid];
    if (midValue === target) return true;
    if (midValue > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
}

console.log('brute force');
console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 6));
