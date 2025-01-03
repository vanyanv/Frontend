export function majoritySum(array: number[], n: number): number[] {
  const nover3 = Math.floor(n / 3);

  const hashMap = new Map<number, number>();
  const elements: number[] = [];
  for (let i = 0; i < array.length; i++) {
    hashMap.set(array[i], (hashMap.get(array[i]) ?? 0) + 1);
  }

  for (const [key, value] of hashMap) {
    if (value > nover3) {
      elements.push(key);
    }
  }
  return elements;
}

console.log(majoritySum([1, 2, 2, 3, 2], 5));
console.log(majoritySum([11, 33, 33, 11, 33, 11], 6));

//Time Complexity -> O(N);
//Space Complexity -> O(N) because im only creating a hashmap and no extra space for returning the answer

export function majoritySumBetter(array: number[], n: number): number[] {
  const nover3 = Math.floor(n / 3);

  const hashMap = new Map<number, number>();
  const elements: number[] = [];
  for (let i = 0; i < array.length; i++) {
    hashMap.set(array[i], (hashMap.get(array[i]) ?? 0) + 1);

    if ((hashMap.get(array[i]) ?? 0) > nover3 && !elements.includes(array[i])) {
      elements.push(array[i]);
    }
  }

  return elements;
}

console.log('better');
console.log(majoritySumBetter([1, 2, 2, 3, 2], 5));
console.log(majoritySumBetter([11, 33, 33, 11, 33, 11], 6));
