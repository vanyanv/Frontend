import { secondSmallestGeatest } from './Second-Smallest-Largest';

describe('secondSmallestGeatest', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should log the second highest and second lowest numbers', () => {
        secondSmallestGeatest([1, 2, 3, 4, 5]);
        expect(consoleSpy).toHaveBeenCalledWith(4);
        expect(consoleSpy).toHaveBeenCalledWith(2);
    });

    it('should handle arrays with negative numbers', () => {
        secondSmallestGeatest([-10, -20, -30, -40, -50]);
        expect(consoleSpy).toHaveBeenCalledWith(-20);
        expect(consoleSpy).toHaveBeenCalledWith(-40);
    });

    it('should handle arrays with duplicate numbers', () => {
        secondSmallestGeatest([1, 2, 2, 3, 3, 4, 5]);
        expect(consoleSpy).toHaveBeenCalledWith(4);
        expect(consoleSpy).toHaveBeenCalledWith(2);
    });

    it('should handle arrays with only two elements', () => {
        secondSmallestGeatest([1, 2]);
        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
    });

    it('should handle arrays with all elements the same', () => {
        secondSmallestGeatest([1, 1, 1, 1, 1]);
        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(1);
    });
});