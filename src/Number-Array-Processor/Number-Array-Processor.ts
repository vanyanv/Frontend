// Create a number array processor with these functions:
type NumberProcessor = {
  getEvenNumbers: (numbers: number[]) => number[];
  sumGreaterThanFive: (numbers: number[]) => number;
  calculateAverage: (numbers: number[]) => number;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberProcessor: NumberProcessor = {
  getEvenNumbers: (numbers: number[]): number[] => {
    return numbers.filter((number) => number % 2 === 0);
  },

  sumGreaterThanFive: (numbers: number[]): number => {
    // Your implementation here
    return 0;
  },

  calculateAverage: (numbers: number[]): number => {
    // Your implementation here
    return 0;
  },
};

export default numberProcessor;
