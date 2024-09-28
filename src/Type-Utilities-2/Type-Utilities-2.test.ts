import {
  isArray,
  isFunction,
  isObject,
  isPlainObject,
} from './Type-Utilities-2';

import { describe, expect, test } from '@jest/globals';
describe('type-utilities-ii', () => {
  test('isArray', () => {
    expect(isArray([])).toBe(true);
  });

  test('isFunction', () => {
    function identity<T>(x: T): T {
      return x;
    }

    expect(isFunction(identity)).toBe(true);
  });

  test('isObject', () => {
    expect(isObject({ a: 1 })).toBe(true);
  });

  test('isPlainObject', () => {
    expect(isPlainObject({})).toBe(true);
  });
});
