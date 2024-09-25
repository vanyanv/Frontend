# Make Counter

## Languages

- JavaScript (JS)
- TypeScript (TS)

## Difficulty

**Easy**

## Recommended duration to spend during interviews

5 mins

## Users completed

8474 completed

## Problem

Implement a function `makeCounter` that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.

## Examples

```javascript
const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```
