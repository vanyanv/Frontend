Easy #2 - Student Score Analyzer:

````markdown
# Student Score Analyzer

## Problem Description

Create functions to analyze student scores using TypeScript interfaces and type safety.

## Requirements

Implement two main functions:

### findTopStudent

- **Input**: Array of Student objects
- **Output**: Student with highest score
- Handle ties by returning the first student

### getHighScorers

- **Input**: Array of Student objects, threshold (default: 80)
- **Output**: Array of Students who scored above threshold
- Sort result by score (descending)

### Edge Cases to Consider

- Empty student array
- Multiple students with same score
- Invalid scores (negative or > 100)
- Missing or null values
- Case sensitivity in names

### Data Structure

```typescript
interface Student {
  name: string;
  score: number;
}
```
````
