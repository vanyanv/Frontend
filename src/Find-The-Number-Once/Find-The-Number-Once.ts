export function findTheSingleNumber(array: number[]): number {
  const cache: { [key: number]: number } = {};

  for (let i = 0; i < array.length; i++) {
    if (array[i] in cache) {
      cache[array[i]] += 1;
    } else {
      cache[array[i]] = 1;
    }
  }

  for (const key in cache) {
    if (cache[key] === 1) {
      return Number(key);
    }
  }
}

// console.log(findTheSingleNumber([2, 2, 1]));
// console.log(findTheSingleNumber([4, 1, 2, 1, 2]));

//O(n + m) because we have to go thru the entier array to create a cache and then the cache
//O(m) we have to use up extra space by create a cache the size of m

//XOR
export function findTheSingleNumberOptimal(array: number[]): number {
  let xor = 0;
  for (let i = 0; i < array.length; i++) {
    xor = xor ^ array[i];
  }

  return xor;
}

console.log(findTheSingleNumberOptimal([2, 2, 1]));
console.log(findTheSingleNumberOptimal([4, 1, 2, 1, 2]));

