import { arrayIsSorted } from './Check-if-Array-is-Sorted';

describe('arrayIsSorted', () => {
  test('empty array should return true', () => {
    expect(arrayIsSorted([])).toBe(true);
  });

  test('single element array should return true', () => {
    expect(arrayIsSorted([1])).toBe(true);
  });

  test('sorted array in ascending order should return true', () => {
    expect(arrayIsSorted([1, 2, 3, 4, 5])).toBe(true);
  });

  test('unsorted array should return false', () => {
    expect(arrayIsSorted([1, 3, 2, 4, 5])).toBe(false);
  });

  test('array with duplicate values in sorted order should return true', () => {
    expect(arrayIsSorted([1, 2, 2, 3, 4])).toBe(true);
  });

  test('array with duplicate values in unsorted order should return false', () => {
    expect(arrayIsSorted([1, 2, 1, 3, 4])).toBe(false);
  });

  test('array with negative numbers in sorted order should return true', () => {
    expect(arrayIsSorted([-5, -3, 0, 2, 4])).toBe(true);
  });

  test('array with negative numbers in unsorted order should return false', () => {
    expect(arrayIsSorted([-3, -5, 0, 2, 4])).toBe(false);
  });

  test('array with all same numbers should return true', () => {
    expect(arrayIsSorted([2, 2, 2, 2])).toBe(true);
  });

  test('large sorted array should return true', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(arrayIsSorted(largeArray)).toBe(true);
  });

  test('large unsorted array should return false', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    largeArray[500] = 1000; // Make array unsorted
    expect(arrayIsSorted(largeArray)).toBe(false);
  });
});
