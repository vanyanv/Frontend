import { describe, test } from '@jest/globals';
import { reverseArrayR, reverseArray } from './Reverse-Array';

describe('reverseArrayR', () => {
    test('should reverse an array of numbers', () => {
        expect(reverseArrayR([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });

    test('should reverse an array of strings', () => {
        expect(reverseArrayR(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
    });

    test('should handle empty array', () => {
        expect(reverseArrayR([])).toEqual([]);
    });

    test('should handle array with one element', () => {
        expect(reverseArrayR([1])).toEqual([1]);
    });

    test('should handle array with even number of elements', () => {
        expect(reverseArrayR([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });

    test('should handle array with odd number of elements', () => {
        expect(reverseArrayR([1, 2, 3])).toEqual([3, 2, 1]);
    });
});

describe('reverseArray', () => {
    test('should reverse an array of numbers', () => {
        expect(reverseArray([1, 2, 3, 4, 5], 0)).toEqual([5, 4, 3, 2, 1]);
    });

    test('should reverse an array of strings', () => {
        expect(reverseArray(['a', 'b', 'c'], 0)).toEqual(['c', 'b', 'a']);
    });

    test('should handle empty array', () => {
        expect(reverseArray([], 0)).toEqual([]);
    });

    test('should handle array with one element', () => {
        expect(reverseArray([1], 0)).toEqual([1]);
    });

    test('should handle array with even number of elements', () => {
        expect(reverseArray([1, 2, 3, 4], 0)).toEqual([4, 3, 2, 1]);
    });

    test('should handle array with odd number of elements', () => {
        expect(reverseArray([1, 2, 3], 0)).toEqual([3, 2, 1]);
    });
});
