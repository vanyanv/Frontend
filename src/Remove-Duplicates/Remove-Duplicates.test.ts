import { describe } from '@jest/globals';
import { removeDuplicates } from './Remove-Duplicates';

describe('removeDuplicates', () => {
  it('should remove duplicates from array of numbers', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return empty array when input is empty', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it('should return same array when no duplicates exist', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle array with all duplicate values', () => {
    expect(removeDuplicates([1, 1, 1, 1])).toEqual([1]);
  });

  it('should handle negative numbers', () => {
    expect(removeDuplicates([-2, -1, -1, 0, 1, 1, 2])).toEqual([
      -2, -1, 0, 1, 2,
    ]);
  });
});
