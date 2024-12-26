export function findMajority(array: number[], n: number): number {
  const majority = n / 2;

  const storage = new Map<number, number>();

  for (let i = 0; i < array.length; i++) {
    if (!storage.has(array[i])) {
      storage.set(array[i], 1);
    } else {
      storage.set(array[i], storage.get(array[i])! + 1);
    }
  }

  for (const [key, value] of storage) {
    if (value > majority) return key;
  }

  return -1;
}

console.log(findMajority([2, 2, 1, 1, 1, 2, 2], 7));
console.log(findMajority([3, 2, 3], 3));
console.log(findMajority([4, 4, 2, 4, 3, 4, 4, 3, 2, 4], 10));

//O(n) + O(n)
//O(n)

//use moors voting law algo to solve

export function findMajorityOptimal(array: number[], n: number): number {
  let ele: number = array[0];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (count === 0) {
      ele = array[i];
    }

    if (array[i] === ele) {
      count++;
    } else {
      count--;
    }
  }

  let eleCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === ele) {
      eleCount++;
    }

    if (eleCount > Math.floor(n / 2)) {
      return ele;
    }
  }

  return -1;
}

//using moors voting law algo
console.log('MOORS VOTING LAW ');
console.log(findMajorityOptimal([2, 2, 1, 1, 1, 2, 2], 7));
console.log(findMajorityOptimal([3, 2, 3], 3));
console.log(findMajorityOptimal([4, 4, 2, 4, 3, 4, 4, 3, 2, 4], 10));

//O(N + N)
//O(1)
