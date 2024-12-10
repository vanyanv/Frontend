export function countFrequency<T>(array: T[]) {
  //create a cache
  const cache = new Map<T, number>();

  //itterate thru the array and store found in cache
  for (let i = 0; i < array.length; i++) {
    if (!cache.has(array[i])) {
      cache.set(array[i], 1);
    } else {
      cache.set(array[i], (cache.get(array[i]) || 0) + 1);
    }
  }

  return cache;
}
