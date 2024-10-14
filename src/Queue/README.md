# Queue

### Author
**Yangshun Tay**  
Ex-Meta Staff Engineer

### Languages
- JavaScript (JS)
- TypeScript (TS)

### Difficulty
**Medium**

### Recommended duration to spend during interviews
**15 mins**

### Users completed
**1585 completed**

---

## Problem Statement

Implement a queue data structure in JavaScript that contains the following operations:

1. **`new Queue()`**:  
   Creates an instance of a Queue class that doesn't contain any items. The constructor does not accept any arguments.

2. **`enqueue()`**:  
   Adds an item to the back of the queue.  
   **Required time complexity**: O(1).

3. **`dequeue()`**:  
   Removes an item from the front of the queue.  
   **Required time complexity**: O(1).

4. **`isEmpty()`**:  
   Determines if the queue is empty.  
   **Required time complexity**: O(1).

5. **`front()`**:  
   Returns the item at the front of the queue without removing it from the queue.  
   **Required time complexity**: O(1).

6. **`back()`**:  
   Returns the item at the back of the queue without removing it from the queue.  
   **Required time complexity**: O(1).

7. **`length()`**:  
   Returns the number of items in the queue.  
   **Required time complexity**: O(1).

---

## Examples

```js
const queue = new Queue();
queue.isEmpty(); // true
queue.enqueue(1);
queue.enqueue(2);
queue.length(); // 2
queue.enqueue(3);
queue.front(); // 1
queue.back(); // 3
queue.dequeue(); // 1
queue.isEmpty(); // false
