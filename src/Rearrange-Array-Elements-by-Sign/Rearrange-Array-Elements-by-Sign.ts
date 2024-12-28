export function rearrange(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (i % 2 === 0 && array[i] < 0 && array[j] > 0) {
        [array[i], array[j]] = [array[j], array[i]];
      }

      if (i % 2 !== 0 && array[i] > 0 && array[j] < 0) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

console.log(rearrange([1, 2, -4, -5]));
console.log(rearrange([1, 2, -3, -1, -2, 3]));


//Time Complexity => O(N) * O(N)
//Space COmplexity => O(1)