import { beforeAll, describe, expect, test } from '@jest/globals';

import Queue from './Queue';

describe('Stack', () => {
  let newQueue: Queue<number>;

  beforeAll(() => {
    newQueue = new Queue();
  });

  test('check if the queue is empty', () => {
    expect(newQueue.isEmpty()).toBe(true);
  });

  test('Adds an item to the back of the queue.', () => {
    expect(newQueue.enqueue(1)).toBe(1);
  });

  test('Adds an item to the back of the queue.', () => {
    expect(newQueue.enqueue(1)).toBe(2);
  });

  test('getting the length of the queue', () => {
    expect(newQueue.length()).toBe(2);
  });

  test('Adds an item to the back of the queue.', () => {
    expect(newQueue.enqueue(3)).toBe(3);
  });

  test('PEEK the top of the queue', () => {
    expect(newQueue.front()).toBe(1);
  });

  test('PEEK the top of the queue', () => {
    expect(newQueue.back()).toBe(3);
  });

  test('Remove an item at the front of the queue', () => {
    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.length()).toBe(2);
  });

  test('check if the stack is empty', () => {
    expect(newQueue.isEmpty()).toBe(false);
  });
});
