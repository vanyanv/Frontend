import debounce from './Debounce';
import { describe, test, expect } from '@jest/globals';

describe('debounce', () => {
  test('can be initialized', () => {
    const increment = debounce(() => {}, 50);
    expect(increment).toBeTruthy();
  });

  test('executes after duration', (done) => {
    let i = 0;
    const increment = debounce(() => {
      i++;
    }, 10);

    expect(i).toBe(0);
    increment(undefined);
    expect(i).toBe(0);

    setTimeout(() => {
      expect(i).toBe(1);
      done();
    }, 20);
  });
});
