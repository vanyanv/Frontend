# Number Array Processor

## Problem Description

Create a set of utility functions to process arrays of numbers with TypeScript type safety.

### Requirements

Implement a `NumberProcessor` interface with three functions:

1. `getEvenNumbers`

   - Input: Array of numbers
   - Output: Array containing only even numbers
   - Example: `[1,2,3,4] → [2,4]`

2. `sumGreaterThanFive`

   - Input: Array of numbers
   - Output: Sum of all numbers greater than 5
   - Example: `[1,6,3,7] → 13` (6 + 7)

3. `calculateAverage`
   - Input: Array of numbers
   - Output: Average (mean) of all numbers
   - Example: `[1,2,3,4] → 2.5`

### Edge Cases to Consider

- Empty arrays
- Arrays with negative numbers
- Arrays with floating point numbers
- Very large arrays
- Arrays with only one element

### Example Usage

```typescript
const processor = numberProcessor;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(processor.getEvenNumbers(numbers)); // [2, 4, 6, 8, 10]
console.log(processor.sumGreaterThanFive(numbers)); // 40
console.log(processor.calculateAverage(numbers)); // 5.5
```
