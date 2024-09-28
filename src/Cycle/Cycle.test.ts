import { beforeAll, describe, expect, test } from '@jest/globals';
import cycle from './Cycle';

describe('Cycle Function', () => {
  let onOffFn: () => string;

  beforeAll(() => {
    onOffFn = cycle('on', 'off');
  });

  test('first call', () => {
    expect(onOffFn()).toBe('on');
  });

  test('second call', () => {
    expect(onOffFn()).toBe('off');
  });

  test('third call', () => {
    expect(onOffFn()).toBe('on');
  });
});
