# Problem 3: API Data Transformation

**Difficulty:** Medium  
**Time:** 30 minutes

## Problem Statement

Transform a nested API response into a flat structure for easier data visualization.

## Input Data

```javascript
const apiResponse = {
  departments: [
    {
      id: 1,
      name: 'Engineering',
      teams: [
        {
          id: 101,
          name: 'Frontend',
          members: [
            { id: 1, name: 'Alice', role: 'Senior' },
            { id: 2, name: 'Bob', role: 'Junior' },
          ],
        },
        {
          id: 102,
          name: 'Backend',
          members: [
            { id: 3, name: 'Charlie', role: 'Lead' },
            { id: 4, name: 'David', role: 'Senior' },
          ],
        },
      ],
    },
    // ... more departments
  ],
};
```

## Expected Output

```javascript
[
  {
    employeeId: 1,
    employeeName: 'Alice',
    role: 'Senior',
    team: 'Frontend',
    department: 'Engineering',
  },
  // ... more flattened employee records
];
```
