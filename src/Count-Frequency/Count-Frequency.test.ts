import { describe, test, expect } from '@jest/globals';
import { countFrequency } from './Count-Frequency';

describe('countFrequency', () => {
    test('should return frequency map of array elements', () => {
        expect(countFrequency([1, 2, 2, 3, 3, 3])).toEqual(new Map([
            [1, 1],
            [2, 2],
            [3, 3]
        ]));
        
        expect(countFrequency(['a', 'b', 'b', 'c'])).toEqual(new Map([
            ['a', 1],
            ['b', 2],
            ['c', 1]
        ]));
    });

    test('should handle empty array', () => {
        expect(countFrequency([])).toEqual(new Map());
    });

    test('should handle array with single element', () => {
        expect(countFrequency([5])).toEqual(new Map([[5, 1]]));
    });

    test('should handle mixed type array', () => {
        expect(countFrequency([true, true, false])).toEqual(new Map([
            [true, 2],
            [false, 1]
        ]));
    });
});