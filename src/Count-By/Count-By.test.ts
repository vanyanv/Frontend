import { describe, expect, test } from '@jest/globals';
import countBy from './Count-By';

describe('countBy', () => {
  test('empty array', () => {
    expect(countBy([], Math.floor)).toEqual({});
  });

  test('single-element arrays', () => {
    expect(countBy([6.1], Math.floor)).toEqual({ 6: 1 });
  });

  test('two-element arrays', () => {
    expect(countBy([6.1, 4.2], Math.floor)).toEqual({ 4: 1, 6: 1 });
  });

  // Additional Test Cases
  test('repeated elements', () => {
    expect(countBy([6.1, 6.3, 4.2], Math.floor)).toEqual({ 4: 1, 6: 2 });
  });

  test('array with objects', () => {
    const array = [{ n: 3 }, { n: 5 }, { n: 3 }];
    expect(countBy(array, (o) => o.n)).toEqual({ 3: 2, 5: 1 });
  });

  test('iteratee returning strings', () => {
    const array = ['apple', 'banana', 'apricot', 'blueberry'];
    expect(countBy(array, (fruit) => fruit[0])).toEqual({ a: 2, b: 2 });
  });

  test('mixed numbers and strings in array', () => {
    const array = [6.1, '6', 4.2, '4'];
    expect(countBy(array, String)).toEqual({
      '6.1': 1,
      '6': 1,
      '4.2': 1,
      '4': 1,
    });
  });

  test('iteratee always returning same value', () => {
    const array = [1, 2, 3, 4];
    expect(countBy(array, () => 'same')).toEqual({ same: 4 });
  });
});
