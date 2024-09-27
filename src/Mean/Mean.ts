const mean = (array: number[]): number => {
  return array.reduce((acc, curr) => acc + curr) / array.length;
};

console.log(mean([4, 2, 8, 6])); // => 5
console.log(mean([1, 2, 3, 4])); // => 2.5
console.log(mean([1, 2, 2])); // => 1.6666666666666667

export default mean;
