import { jest, describe, test, expect } from '@jest/globals';
import throttle from './Throttle';

jest.useFakeTimers();

describe('throttle', () => {
  test('should call the function immediately on first call', () => {
    let counter = 0;
    const increment = () => counter++;
    const throttledIncrement = throttle(increment, 100);

    throttledIncrement();
    expect(counter).toBe(1);
  });

  test('should not call the function again before the wait time', () => {
    let counter = 0;
    const increment = () => counter++;
    const throttledIncrement = throttle(increment, 100);

    throttledIncrement(); // t=0
    throttledIncrement(); // t=50 (shouldn't increment)
    expect(counter).toBe(1);

    jest.advanceTimersByTime(50); // Move time forward by 50ms
    throttledIncrement(); // t=100 (now it should increment)
    expect(counter).toBe(2);
  });

  test('should throttle multiple calls within the wait period', () => {
    let counter = 0;
    const increment = () => counter++;
    const throttledIncrement = throttle(increment, 100);

    throttledIncrement(); // t=0
    throttledIncrement(); // t=50
    throttledIncrement(); // t=75
    expect(counter).toBe(1); // Only called once so far

    jest.advanceTimersByTime(100); // Move time forward by 100ms
    throttledIncrement(); // Now it should be called again
    expect(counter).toBe(2);
  });

  test('should call the function after wait time even with rapid calls', () => {
    let counter = 0;
    const increment = () => counter++;
    const throttledIncrement = throttle(increment, 100);

    throttledIncrement(); // t=0
    throttledIncrement(); // t=25
    throttledIncrement(); // t=50
    expect(counter).toBe(1); // Only called once

    jest.advanceTimersByTime(100); // Move time forward by 100ms
    expect(counter).toBe(2); // Should call it again after 100ms

    throttledIncrement(); // t=150
    throttledIncrement(); // t=175
    expect(counter).toBe(2); // No increment yet

    jest.advanceTimersByTime(100); // Move time forward by 100ms
    expect(counter).toBe(3); // Finally called again
  });
});
