import { largestElement } from './Largest-Element-In-Array';

describe('largestElement', () => {
    test('should return the largest element in the array', () => {
        expect(largestElement([1, 2, 3, 4, 5])).toBe(5);
        expect(largestElement([5, 4, 3, 2, 1])).toBe(5);
        expect(largestElement([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toBe(9);
    });

    test('should return the only element in a single-element array', () => {
        expect(largestElement([42])).toBe(42);
    });

    test('should handle arrays with negative numbers', () => {
        expect(largestElement([-1, -2, -3, -4, -5])).toBe(-1);
        expect(largestElement([-5, -4, -3, -2, -1])).toBe(-1);
    });

    test('should handle arrays with both positive and negative numbers', () => {
        expect(largestElement([-10, 0, 10, 20, -20])).toBe(20);
    });

    test('should handle an empty array', () => {
        expect(() => largestElement([])).toThrow();
    });
});