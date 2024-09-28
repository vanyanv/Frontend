export default function cycle<T>(...args: T[]) {
  const data = [...args];
  const length = data.length;
  let current = -1;

  return function () {
    if (current >= length - 1) {
      current = 0;
      return data[0];
    }
    current++;
    return data[current];
  };
}
