export default function countBy<T>(
  array: Array<T>,
  iteratee: (value: T) => number | string
): Record<string, number> {
  const cache: Record<string, number> = {};

  array.forEach((ele) => {
    const current = iteratee(ele);
    if (!cache[current]) {
      cache[current] = 1;
    } else {
      cache[current] += 1;
    }
  });

  return cache;
}
