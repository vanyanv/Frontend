# Throttle

**Author**: Yangshun Tay  
**Ex-Meta Staff Engineer**

**Languages**: JS, TS  
**Difficulty**: Medium  
**Recommended duration to spend during interviews**: 15 mins  
**Users completed**: 6131 completed

---

Throttling is a technique used to ensure that a function is not called more frequently than a specified interval of time. When a JavaScript function is throttled with a wait time of X milliseconds, it can only be invoked once within every X milliseconds, no matter how many times it is called during that period. 

A real-world example is scrolling. If you attach a throttled event handler to the scroll event, it will limit how frequently the handler is called as the user scrolls, improving performance.

---

### Task

Implement a throttle function which accepts a callback function and a wait duration. Calling `throttle()` returns a function that invokes the callback at most once every X milliseconds, no matter how many times the returned function is called.

### Examples

```js
let i = 0;
function increment() {
  i++;
}
const throttledIncrement = throttle(increment, 100);

// t = 0: Call throttledIncrement().
throttledIncrement(); // i = 1

// t = 50: i is still 1 because 100ms have not passed yet.
throttledIncrement(); // i = 1

// t = 100: increment() can be invoked again. 
throttledIncrement(); // i = 2
