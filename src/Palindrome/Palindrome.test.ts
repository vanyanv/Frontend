import { describe, test, expect } from '@jest/globals';
import { palindrome, palindromeR } from './Palindrome';

describe('palindrome', () => {
  test('should return false for empty string', () => {
    expect(palindrome('')).toBe(false);
  });

  test('should return true for single character', () => {
    expect(palindrome('a')).toBe(true);
  });

  test('should return true for palindrome string', () => {
    expect(palindrome('radar')).toBe(true);
    expect(palindrome('level')).toBe(true);
    expect(palindrome('noon')).toBe(true);
  });

  test('should return false for non-palindrome string', () => {
    expect(palindrome('hello')).toBe(false);
    expect(palindrome('world')).toBe(false);
  });

  test('should handle case-sensitive palindromes', () => {
    expect(palindrome('Radar')).toBe(false);
    expect(palindrome('Level')).toBe(false);
  });
});

describe('palindromeR', () => {
  test('should return false for an empty string', () => {
    expect(palindromeR('', 0)).toBe(false);
  });

  test('should return true for a single character string', () => {
    expect(palindromeR('a', 0)).toBe(true);
  });

  test('should return true for a palindrome string', () => {
    expect(palindromeR('racecar', 0)).toBe(true);
    expect(palindromeR('madam', 0)).toBe(true);
    expect(palindromeR('level', 0)).toBe(true);
  });

  test('should return false for a non-palindrome string', () => {
    expect(palindromeR('hello', 0)).toBe(false);
    expect(palindromeR('world', 0)).toBe(false);
  });

  test('should return true for an even-length palindrome string', () => {
    expect(palindromeR('abba', 0)).toBe(true);
    expect(palindromeR('deed', 0)).toBe(true);
  });

  test('should return false for an even-length non-palindrome string', () => {
    expect(palindromeR('abcd', 0)).toBe(false);
    expect(palindromeR('aabb', 0)).toBe(false);
  });
});
