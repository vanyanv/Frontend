import { describe, expect, test } from '@jest/globals';
import {
  isBoolean,
  isNumber,
  isNull,
  isString,
  isSymbol,
  isUndefined,
} from './TypeUtilities';

describe('type-utilities', () => {
  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
  });

  test('isNumber', () => {
    expect(isNumber(1)).toBe(true);
  });

  test('isNull', () => {
    expect(isNull(null)).toBe(true);
  });

  test('isString', () => {
    expect(isString('hello')).toBe(true);
  });

  test('isSymbol', () => {
    expect(isSymbol(Symbol('hello'))).toBe(true);
  });

  test('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
});
