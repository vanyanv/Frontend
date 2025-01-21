function lowerBounds(array: number[], x: number): number {
  let start = 0;
  let end = array.length - 1;
  let smallest = array.length;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const current = array[mid];

    if (current >= x) {
      smallest = mid;
    }

    if (current >= x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return smallest;
}

console.log('brute force');
console.log(lowerBounds([1, 2, 2, 3], 2));
console.log(lowerBounds([3, 5, 8, 15, 19], 9));
