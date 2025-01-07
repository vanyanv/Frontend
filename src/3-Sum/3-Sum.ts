export function findtriplets(array: number[]): number[][] {
  const storage = new Set<string>();

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) {
          const sorted = JSON.stringify(
            [array[i], array[j], array[k]].sort((a, b) => a - b)
          );
          if (!storage.has(sorted)) {
            storage.add(sorted);
          }
        }
      }
    }
  }

  return [...storage].map((str) => JSON.parse(str));
}

console.log(findtriplets([-1, 0, 1, 2, -1, -4]));
console.log(findtriplets([-1, 0, 1, 0]));

export function findtripletsBetter(array: number[]): number[][] {
  const nonDuplicates = new Set<string>();
  for (let i = 0; i < array.length; i++) {
    const hashMap = new Map<number, number>();
    for (let j = i + 1; j < array.length; j++) {
      const k = -(array[i] + array[j]);

      if (hashMap.has(k)) {
        nonDuplicates.add(
          JSON.stringify([array[i], array[j], k].sort((a, b) => a - b))
        );
      }

      hashMap.set(array[j], 1);
    }
  }

  return [...nonDuplicates].map((ele) => JSON.parse(ele));
}

console.log('better');
console.log(findtripletsBetter([-1, 0, 1, 2, -1, -4]));
console.log(findtripletsBetter([-1, 0, 1, 0]));

export function findtripletsOptimal(array: number[]): number[][] {
  array.sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (i > 0 && array[i] == array[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = array.length - 1;

    while (j < k) {
      const sum = array[i] + array[j] + array[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        answer.push([array[i], array[j], array[k]]);
        j++;
        k--;
        while (j < k && array[j] == array[j - 1]) j++;
        while (j < k && array[k] == array[k + 1]) k--;
      }
    }
  }

  return answer;
}

console.log('optimal');
console.log(findtripletsBetter([-1, 0, 1, 2, -1, -4]));
console.log(findtripletsBetter([-1, 0, 1, 2, -1, -4]));
