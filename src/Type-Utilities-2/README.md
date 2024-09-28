# Type Utilities II

## Languages

- JavaScript (JS)
- TypeScript (TS)

## Difficulty

**Easy**

## Recommended duration to spend during interviews

**15 mins**

## Users completed

**2739 completed**

---

JavaScript is a dynamically typed language, which means the types of variable types can be changed during runtime. Many interview questions involve recursion of objects that can hold values of different types, and how to handle each value type differs according to the type (e.g. different code is needed to iterate over an array vs an object). Knowledge of handling JavaScript types is crucial to solving questions like **Deep Clone** and **Deep Equal**.

In **Type Utilities**, we have implemented utility functions to determine the types of primitive values. In this question, we will implement the following utility functions to determine the types of non-primitive values.

### Utility Functions

- **`isArray(value)`**: Return `true` if `value` is an array, `false` otherwise.
- **`isFunction(value)`**: Return `true` if `value` is a function, `false` otherwise.
- **`isObject(value)`**: Return `true` if `value` is an object (e.g., arrays, functions, objects, etc., but not including `null` and `undefined`), `false` otherwise.
- **`isPlainObject(value)`**: Return `true` if `value` is a plain object, `false` otherwise (not for arrays, functions, etc.).

A **plain object**, or what is commonly known as a **Plain Old JavaScript Object (POJO)**, is any object whose prototype is `Object.prototype` or an object created via `Object.create(null)`.
