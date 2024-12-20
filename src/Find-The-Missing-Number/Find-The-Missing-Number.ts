export function findMissingNumber(array: number[], n: number): number {
  const hash: { [key: number]: number } = {};
  for (let i = 1; i <= n; i++) {
    hash[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] in hash) {
      hash[array[i]] += 1;
    }
  }

  for (const key in hash) {
    if (hash[key] === 0) {
      return Number(key);
    }
  }

  return -1;
}

/*
console.log(findMissingNumber([1, 2, 3, 5], 5));
console.log(findMissingNumber([1, 2, 4, 5], 5)); // Should return 3
console.log(findMissingNumber([2, 3, 4, 5], 5)); // Should return 1
console.log(findMissingNumber([1, 3, 4, 5], 5)); // Should return 2
console.log(findMissingNumber([1, 2, 3, 4], 5)); // Should return 5
console.log(findMissingNumber([1, 2, 3, 4, 5], 5)); // Should return undefined (no missing number)
*/

//O(n) + O(m) + O(h) this is a O(n + m + h ) solution

export function findMissingNumberOptimal(array: number[], n: number): number {
  const sum1 = array.reduce((sum, curr) => (sum += curr));
  let sum2 = 0;

  for (let i = 1; i <= n; i++) {
    sum2 += i;
  }

  return sum2 - sum1;
}

//O(n + m)  because we have to loop thru first the array then we have to add all the numbers from 1 to N
//O(1) because we are not using any extra space
console.log(findMissingNumberOptimal([1, 2, 3, 5], 5));
console.log(findMissingNumberOptimal([1, 2, 4, 5], 5)); // Should return 3
console.log(findMissingNumberOptimal([2, 3, 4, 5], 5)); // Should return 1
console.log(findMissingNumberOptimal([1, 3, 4, 5], 5)); // Should return 2
console.log(findMissingNumberOptimal([1, 2, 3, 4], 5)); // Should return 5
console.log(findMissingNumberOptimal([1, 2, 3, 4, 5], 5)); // Should return undefined (no missing number)s
