import { describe, expect, test } from '@jest/globals';
import findWinner from './BlackJack';
describe('BlackJack', () => {
  test('Can we find a winner', () => {
    expect(findWinner([]));
  });
});
