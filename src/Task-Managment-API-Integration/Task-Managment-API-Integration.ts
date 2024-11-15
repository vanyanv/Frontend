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

async function getTaskDashboard(): Promise<{
  tasks: TaskDashboardItem[];
  userStats: UserTaskStats[];
}> {
  try {
    const [usersRes, tasksRes, commentsRes] = await Promise.all([
      fetch('https://run.mocky.io/v3/094db9d0-9567-4cf4-8edd-afbeacbe8c25'),
      fetch('https://run.mocky.io/v3/7efd563b-5f04-4af2-9078-6af4c7682d52'),
      fetch('https://run.mocky.io/v3/88dfb823-7ae4-4cfb-b7bd-bb01ea06d4d8'),
    ]);

    if (!usersRes.ok || !tasksRes.ok || !commentsRes.ok) {
      throw new Error('Failed to fetch data');
    }
    const usersData = await usersRes.json();
    const taskData = await tasksRes.json();
    const commentsData = await commentsRes.json();

    const tasks = taskData?.tasks?.map((task: Task): TaskDashboardItem => {
      const userData: User = usersData.users.find(
        (u: User) => u.id === task.assigneeId
      );
      const userComments: TaskComment = commentsData.comments.find(
        (c: TaskComment) => c.userId === task.assigneeId
      );

      return {
        taskId: task.id,
        title: task.title,
        status: task.status,
        assignee: userData.name,
        assigneeRole: userData.role,
        priority: task.priority,
        latestComment: userComments
          ? {
              comment: userComments.comment,
              timestamp: userComments.timestamp,
            }
          : undefined,
      };
    });

    //sort tasks by priorty
    tasks.sort((a: TaskDashboardItem, b: TaskDashboardItem): number => a.priority - b.priority);

    const userStats = usersData?.users?.map((user: User) => {
      const userTasks = taskData.tasks.filter(
        (task: Task) => task.assigneeId === user.id
      );
      const completedTasks = userTasks.filter(
        (task: Task) => task.status === 'done'
      ).length;
      const tasksInReview = userTasks.filter(
        (task: Task) => task.status === 'review'
      ).length;

      const averagePriority: number =
        userTasks.reduce((acc: number, task: Task) => acc + task.priority, 0) /
        userTasks.length;

      return {
        userId: user.id,
        userName: user.name,
        totalTasks: userTasks.length,
        completedTasks,
        tasksInReview,
        averagePriority,
      };
    });

    console.log(tasks);
    return {
      tasks,
      userStats,
    };
  } catch (error) {
    console.log('could not get daya from API', error);
    throw error;
  }
}

getTaskDashboard();
