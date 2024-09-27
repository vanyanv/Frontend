import { beforeAll, describe, expect, test } from '@jest/globals';
import Stack from './Stack';

describe('Stack', () => {
  let newStack: Stack<number>;

  beforeAll(() => {
    newStack = new Stack();
  });

  test('check if the stack is empty', () => {
    expect(newStack.isEmpty()).toBe(true);
  });

  test('adding to the top of the stack', () => {
    expect(newStack.push(1)).toBe(1);
  });

  test('adding to the top of the stack', () => {
    expect(newStack.push(2)).toBe(2);
  });

  test('getting the length of the stack', () => {
    expect(newStack.length()).toBe(2);
  });

  test('adding to the top of the stack', () => {
    expect(newStack.push(3)).toBe(3);
  });

  test('PEEK the top of the stack', () => {
    expect(newStack.peek()).toBe(3);
  });

  test('Remove an item at the top of the stack', () => {
    expect(newStack.pop()).toBe(3);
    expect(newStack.length()).toBe(2);
  });

  test('check if the stack is empty', () => {
    expect(newStack.isEmpty()).toBe(false);
  });
});
