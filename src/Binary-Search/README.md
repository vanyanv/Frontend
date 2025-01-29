# Binary Search Explained

## Introduction
Binary Search is a fundamental searching algorithm that works on sorted collections. This guide will help you understand binary search through real-world examples and coding problems.

## Real-World Example: Dictionary Search
Imagine searching for a word in a dictionary. You could:
1. Check every page one by one (Linear Search)
2. Use the dictionary's sorted nature to skip sections (Binary Search)

## Key Concepts
- Works only on sorted collections
- Divides search space into two parts
- Eliminates half of the remaining search space in each step

## Problem Example

Given a sorted array of integers and a target value, implement binary search to find the target.

```
Input:
array = [3, 4, 6, 7, 9, 12, 16, 17]
target = 6

Your task: Write a function that returns the index of target (or appropriate value if not found)
```

## Practice Problems
1. Basic Binary Search
    - Search in sorted array
    - Find first occurrence
    - Find last occurrence

2. Advanced Applications
    - Search in rotated sorted array
    - Find peak element
    - Search in infinite sorted array

## Requirements
- Array must be sorted
- Handle edge cases
- Consider overflow scenarios

Try implementing both iterative and recursive solutions!