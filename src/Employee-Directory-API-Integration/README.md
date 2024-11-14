# Problem 1: Employee Directory API Integration

**Difficulty**: Medium  
**Time**: 30-45 minutes

## Problem Statement
Create a function that fetches employee data from multiple endpoints and combines them into a unified employee directory.

## Requirements

```typescript
// Endpoint 1: /api/employees
// Returns: { id: number, name: string, department: string }[]

// Endpoint 2: /api/performance
// Returns: { employeeId: number, rating: number, lastReview: string }[]

// Endpoint 3: /api/teams
// Returns: { id: number, teamName: string, members: number[] }[]

// Create a function that:
// 1. Fetches data from all endpoints
// 2. Combines the data into a single employee directory
// 3. Includes error handling
// 4. Returns employees sorted by department, then by name
```

## Expected Output Format

```typescript
interface Employee {
    id: number;
    name: string;
    department: string;
    rating?: number;
    lastReview?: string;
    team?: string;
}

// Return type: Employee[]
```

## Test Cases
```javascript
// Test Case 1: All data available
// Test Case 2: Missing performance data
// Test Case 3: Employee not assigned to team
// Test Case 4: API endpoint failure
```