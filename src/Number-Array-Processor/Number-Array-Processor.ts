// Create a number array processor with these functions:
type NumberProcessor = {
  getEvenNumbers: (numbers: number[]) => number[];
  sumGreaterThanFive: (numbers: number[]) => number;
  calculateAverage: (numbers: number[]) => number;
};

const numberProcessor: NumberProcessor = {
  getEvenNumbers: (numbers: number[]): number[] => {
    if (numbers.length === 0) return [];
    return numbers.filter((number) => number % 2 === 0);
  },

  sumGreaterThanFive: (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    // Your implementation here
    return numbers.reduce((acc, curr) => {
      if (curr > 5) {
        return acc + curr;
      }
      return acc;
    }, 0);
  },

  calculateAverage: (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    // Your implementation here
    const sum = numbers.reduce((acc, curr) => acc + curr);
    return sum / numbers.length;
  },
};

export default numberProcessor;
