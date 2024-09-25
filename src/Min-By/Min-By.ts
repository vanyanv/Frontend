const minBy = <T, R>(array: T[], iteratee: (item: T) => R) => {
  if (array.length === 0) return undefined;

  return array.reduce((acc, curr) => {
    return iteratee(acc) < iteratee(curr) ? acc : curr;
  });
};

console.log(minBy([2, 3, 1, 4], (num) => num));
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n));
