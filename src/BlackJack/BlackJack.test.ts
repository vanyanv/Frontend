import { describe, expect, test } from '@jest/globals';
import findWinner from './BlackJack';

describe('Blackjack Game', () => {
  describe('Basic Number Cards', () => {
    test('should correctly compare basic number cards', () => {
      expect(findWinner(['2', '7'], ['5', '2'])).toEqual([['2', '7'], 9]);
      expect(findWinner(['9', '8'], ['5', '4'])).toEqual([['9', '8'], 17]);
    });
  });

  describe('Face Cards', () => {
    test('should handle face cards with value of 10', () => {
      expect(findWinner(['J', '5'], ['Q', '4'])).toEqual([['J', '5'], 15]);
      expect(findWinner(['K', '7'], ['J', '6'])).toEqual([['K', '7'], 17]);
      expect(findWinner(['Q', 'K'], ['9', '9'])).toEqual([['Q', 'K'], 20]);
    });
  });

  describe('Single Ace Handling', () => {
    test('should count Ace as 11 when possible', () => {
      expect(findWinner(['A', '8'], ['10', '5'])).toEqual([['A', '8'], 19]);
      expect(findWinner(['A', '7'], ['9', '9'])).toEqual([['A', '7'], 18]);
    });

    test('should count Ace as 1 when necessary to prevent bust', () => {
      expect(findWinner(['A', '8', '5'], ['10', '5'])).toEqual([
        ['A', '8', '5'],
        14,
      ]);
    });
  });

  describe('Multiple Aces Handling', () => {
    test('should handle multiple Aces optimally', () => {
      expect(findWinner(['A', 'A', '9'], ['10', '6'])).toEqual([
        ['A', 'A', '9'],
        21,
      ]);
      expect(findWinner(['A', 'A', '2'], ['10', '8'])).toEqual([
        ['A', 'A', '2'],
        14,
      ]);
    });
  });

  describe('Bust Conditions', () => {
    test('should handle player bust', () => {
      expect(findWinner(['K', 'Q', '5'], ['10', '5'])).toEqual([
        ['10', '5'],
        15,
      ]);
    });

    test('should handle dealer bust', () => {
      expect(findWinner(['10', '5'], ['K', 'Q', '5'])).toEqual([
        ['10', '5'],
        15,
      ]);
    });
  });

  describe('Complex Scenarios', () => {
    test('should handle mix of face cards and Aces', () => {
      expect(findWinner(['A', 'K'], ['Q', '9'])).toEqual([['A', 'K'], 21]);
      expect(findWinner(['A', 'Q', '5'], ['K', '9'])).toEqual([
        ['A', 'Q', '5'],
        16,
      ]);
    });

    test('should handle edge cases with multiple card types', () => {
      expect(findWinner(['A', 'J', 'A'], ['K', '5', '4'])).toEqual([
        ['A', 'J', 'A'],
        12,
      ]);
      expect(findWinner(['K', 'A', '8'], ['Q', 'A', '7'])).toEqual([
        ['K', 'A', '8'],
        19,
      ]);
    });
  });
});
