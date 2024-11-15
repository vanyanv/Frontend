# Problem 5: Task Management API Integration

## Interfaces

```typescript
interface User {
  id: number;
  name: string;
  role: string;
}

interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  assigneeId: number;
  priority: number;
}

interface TaskComment {
  id: number;
  taskId: number;
  userId: number;
  comment: string;
  timestamp: string;
}

interface TaskDashboardItem {
  taskId: number;
  title: string;
  status: string;
  assignee: string;
  assigneeRole: string;
  priority: number;
  latestComment?: {
    comment: string;
    timestamp: string;
  };
}

interface UserTaskStats {
  userId: number;
  userName: string;
  totalTasks: number;
  completedTasks: number;
  tasksInReview: number;
  averagePriority: number;
}
```

## Mock Endpoints

- `GET /api/users` - Returns `User[]`
- `GET /api/tasks` - Returns `Task[]`
- `GET /api/comments` - Returns `TaskComment[]`

## Requirements

1. Fetch data from all endpoints
2. Combine into a single task dashboard
3. Calculate task statistics by user
4. Sort tasks by priority
5. Include user's latest comment on each task
