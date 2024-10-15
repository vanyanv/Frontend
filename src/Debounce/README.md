# Debounce

**Author**  
Yangshun Tay  
Ex-Meta Staff Engineer

**Languages**

- JS
- TS

**Difficulty**  
Medium

**Recommended duration to spend during interviews**  
15 mins

**Users completed**  
6129 completed

---

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

## Task

Implement a debounce function which accepts a callback function and a wait duration. Calling `debounce()` returns a function which has debounced invocations of the callback function following the behavior described above.

### Examples

```js
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 100: increment() was invoked and i is now 1.
```
