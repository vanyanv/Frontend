# Type Utilities

### Languages

- JS
- TS

### Difficulty

**Easy**

### Recommended Duration for Interviews

**10 mins**

### Users Completed

**6052 completed**

---

JavaScript is a dynamically typed language, meaning the types of variables can change during runtime. Many interview questions involve recursion over values containing different types, and how to handle each value type differs according to the type (e.g. different code is needed to iterate over an array vs an object). Knowledge of handling JavaScript types is crucial for solving questions like **Deep Clone** and **Deep Equal**.

In this question, we will implement the following utility functions to determine the types of primitive values:

- **`isBoolean(value)`**: Returns `true` if `value` is a boolean, `false` otherwise.
- **`isNumber(value)`**: Returns `true` if `value` is a number, `false` otherwise. Note that `NaN` is considered a number.
- **`isNull(value)`**: Returns `true` if `value` is `null`, `false` otherwise.
- **`isString(value)`**: Returns `true` if `value` is a string, `false` otherwise.
- **`isSymbol(value)`**: Returns `true` if `value` is a symbol primitive, `false` otherwise.
- **`isUndefined(value)`**: Returns `true` if `value` is `undefined`, `false` otherwise.
