import { describe, expect, test } from '@jest/globals';
import numberProcessor from './Number-Array-Processor';

describe('NumberProcessor', () => {
  describe('calculateAverage', () => {
    test('calculates average of positive numbers correctly', () => {
      expect(numberProcessor.calculateAverage([1, 2, 3, 4])).toBe(2.5);
    });

    test('handles empty array by returning 0', () => {
      expect(numberProcessor.calculateAverage([])).toBe(0);
    });

    test('handles negative numbers correctly', () => {
      expect(numberProcessor.calculateAverage([-1, -2, -3, -4])).toBe(-2.5);
    });

    test('handles array with single number', () => {
      expect(numberProcessor.calculateAverage([5])).toBe(5);
    });
  });

  describe('sumGreaterThanFive', () => {
    test('sums numbers greater than 5 correctly', () => {
      expect(numberProcessor.sumGreaterThanFive([1, 6, 3, 7])).toBe(13);
    });

    test('returns 0 when no numbers are greater than 5', () => {
      expect(numberProcessor.sumGreaterThanFive([1, 2, 3, 4, 5])).toBe(0);
    });

    test('handles empty array', () => {
      expect(numberProcessor.sumGreaterThanFive([])).toBe(0);
    });

    test('handles negative numbers correctly', () => {
      expect(numberProcessor.sumGreaterThanFive([-1, 6, -7, 8])).toBe(14);
    });
  });

  describe('getEvenNumbers', () => {
    test('returns only even numbers from array', () => {
      expect(numberProcessor.getEvenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
    });

    test('returns empty array when no even numbers present', () => {
      expect(numberProcessor.getEvenNumbers([1, 3, 5, 7])).toEqual([]);
    });

    test('handles empty array', () => {
      expect(numberProcessor.getEvenNumbers([])).toEqual([]);
    });

    test('handles negative even numbers', () => {
      expect(numberProcessor.getEvenNumbers([-2, 1, -4, 3])).toEqual([-2, -4]);
    });

    test('preserves original array order', () => {
      expect(numberProcessor.getEvenNumbers([4, 1, 2, 3])).toEqual([4, 2]);
    });
  });
});
