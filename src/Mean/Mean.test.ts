import { describe, expect, test } from '@jest/globals';
import mean from './Mean';

describe('Mean', () => {
  test('Getting the mean of [4, 2, 8, 6]', () => {
    expect(mean([4, 2, 8, 6])).toBe(5);
  });
  test('Getting the mean of [1, 2, 3, 4]', () => {
    expect(mean([1, 2, 3, 4])).toBe(2.5);
  });
  test('Getting the mean of [1, 2, 2]', () => {
    expect(mean([1, 2, 2])).toBe(1.6666666666666667);
  });
});
