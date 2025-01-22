function findFloorandCeil(array: number[], target: number): number[] {
  const floor = findFloor(array, target);
  const ceil = findCeil(array, target);

  return [floor, ceil];
}

function findFloor(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;
  let answer = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] >= target) {
      answer = array[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}

function findCeil(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;
  let answer = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] <= target) {
      answer = array[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return answer;
}

console.log(findFloorandCeil([3, 4, 4, 7, 8, 10], 5));
console.log(findFloorandCeil([3, 4, 4, 7, 8, 10], 8));
