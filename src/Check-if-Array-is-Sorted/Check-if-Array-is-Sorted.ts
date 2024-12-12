export function arrayIsSorted(array: number[]): boolean {
  if (array.length < 2) return true;

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] < array[i - 1]) return false;
  }

  return true;
}
