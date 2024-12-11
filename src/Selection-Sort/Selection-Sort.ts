export function selectionSort(array: number[]): number[] {
  if (array.length < 2) return array;
  for (let i = 0; i < array.length - 2; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }

  
  return array;
}

selectionSort([64, 25, 12, 12, 22, 11]);
