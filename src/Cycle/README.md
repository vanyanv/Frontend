# Cycle

### Languages

- JavaScript (JS)
- TypeScript (TS)

### Difficulty

- Easy

### Recommended duration to spend during interviews

- 15 minutes

### Users completed

- 3417 completed

---

## Problem Statement

Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

### Examples

```js
const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
```
