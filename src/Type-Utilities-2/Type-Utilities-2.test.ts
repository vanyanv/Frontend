import {
  isArray,
  isFunction,
  isObject,
  isPlainObject,
} from './Type-Utilities-2';

import { describe, expect, test } from '@jest/globals';
describe('type-utilities-ii', () => {
  //truthy
  test('isArray should return true', () => {
    expect(isArray([])).toBe(true);
  });

  //falsy
  test('isArray should return false', () => {
    expect(isArray(5)).toBe(false);
  });

  test('isFunction to be true', () => {
    function identity<T>(x: T): T {
      return x;
    }
    expect(isFunction(identity)).toBe(true);
  });

  test('isFunction to be false', () => {
    const identity = [1, 2, 3];
    expect(isFunction(identity)).toBe(false);
  });

  test('isObject is true', () => {
    expect(isObject({ a: 1 })).toBe(true);
  });

  test('isObject is false', () => {
    expect(isObject([])).toBe(false);
  });

  test('isPlainObject', () => {
    expect(isPlainObject({})).toBe(true);
  });
});
