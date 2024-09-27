export default class Stack<T> {
  stack: T[];
  constructor() {
    this.stack = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item: T) {
    this.stack.unshift(item);
    return this.stack.length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    if (this.stack.length === 0) return undefined;
    const topOfStack = this.stack.shift();
    return topOfStack;
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    if (this.stack.length > 0) return false;
    return true;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    if (this.stack.length === 0) return undefined;
    const top = this.stack[0];
    return top;
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    const length = this.stack.length;
    return length;
  }
}
