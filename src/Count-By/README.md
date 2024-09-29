# Count By

## Languages

- JavaScript (JS)
- TypeScript (TS)

## Difficulty

**Medium**

## Recommended duration to spend during interviews

**15 mins**

## Users completed

**2100 completed**

---

### Problem Statement

Implement a function `countBy(array, iteratee)` that creates an object composed of keys generated from the results of running each element of the array through the iteratee. The corresponding value of each key is the number of times the key was returned by the iteratee.

```js
countBy(array, iteratee);
countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': 2, '5': 1 }

countBy([], (o) => o);
// => {}

countBy([{ n: 1 }, { n: 2 }], (o) => o.m);
// => { undefined: 2 }
```
