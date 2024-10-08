# Stack Data Structure in JavaScript

Implement a stack data structure in JavaScript that contains the following operations:

## Operations

### `new Stack()`

Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.

### `push(item)`

Pushes an item onto the top of the stack and returns the new length of the stack.  
**Required time complexity:** O(1)

### `pop()`

Removes an item at the top of the stack and returns that item.  
**Required time complexity:** O(1)

### `isEmpty()`

Determines if the stack is empty.  
**Required time complexity:** O(1)

### `peek()`

Returns the item at the top of the stack without removing it from the stack.  
**Required time complexity:** O(1)

### `length()`

Returns the number of items in the stack.  
**Required time complexity:** O(1)

## Examples

```javascript
const stack = new Stack();
stack.isEmpty(); // true
stack.push(1);
stack.push(2);
stack.length(); // 2
stack.push(3);
stack.peek(); // 3
stack.pop(); // 3
stack.isEmpty(); // false
```
