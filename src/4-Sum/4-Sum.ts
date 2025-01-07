export function fourSum(array: number[], target: number): number[][] {
  array.sort((a, b) => a - b);
  const hash = new Set<string>();
  for (let i = 0; i < array.length; i++) {
    if (i > 0 && i == array[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < array.length; j++) {
      if (j == array[j - 1] || j === array[i]) {
        continue;
      }

      let k = j + 1;
      let l = array.length - 1;

      while (k < l) {
        const sum = array[i] + array[j] + array[k] + array[l];

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          hash.add(JSON.stringify([array[i], array[j], array[k], array[l]]));

          k++;
          l--;
          while (k < l && array[k] === array[k - 1]) k++;
          while (k < l && array[l] === array[l + 1]) l--;
        }
      }
    }
  }

  return [...hash].map((string) => JSON.parse(string));
}

console.log('brute force');
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));

//Time Complexity O(n^2) + Nlog(n)
//Space Complexity O(N) + O(n)
