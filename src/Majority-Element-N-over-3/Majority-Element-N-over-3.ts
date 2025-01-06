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

export function majoritySumOptimal(array: number[], n: number): number[] {
  const k = Math.floor(n / 3);
  let element1: number | undefined;
  let count1 = 0;
  let element2: number | undefined;
  let count2 = 0;
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (count1 === 0 && element1 !== element2) {
      element1 = array[i];
    } else if (count2 === 0 && element2 !== element2) {
      element1 = array[i];
    } else if (element1 === array[i]) {
      count1++;
    } else if (element2 === array[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  if (element1 !== undefined && element1 > k) {
    answer.push(element1);
  }
  if (element2 !== undefined && element2 > k) {
    answer.push(element2);
  }

  return answer;
}

console.log('optimal');
console.log(majoritySumBetter([1, 2, 2, 3, 2], 5));
console.log(majoritySumBetter([11, 33, 33, 11, 33, 11], 6));
