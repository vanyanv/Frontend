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

function binarySearchRecursively(
  array: number[],
  target: number,
  low: number = 0,
  high: number = array.length - 1
): boolean {
  if (low > high) return false;

  const current = Math.floor((low + high) / 2);
  const mid = array[current];
  if (target === mid) return true;

  if (mid > target) {
    return binarySearchRecursively(array, target, low, current - 1);
  } else {
    return binarySearchRecursively(array, target, current + 1, high);
  }
}

console.log('brute force recursively');
console.log(binarySearchRecursively([3, 4, 6, 7, 9, 12, 16, 17], 6));
