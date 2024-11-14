// =====================================
// Problem 1: Employee Directory API Integration
// =====================================

interface Employee {
  id: number;
  name: string;
  department: string;
  rating?: number;
  lastReview?: string;
  team?: string;
}

interface RawEmployee {
  id: number;
  name: string;
  department: string;
}

interface PerformanceData {
  employeeId: number;
  rating: number;
  lastReview: string;
}

interface TeamData {
  id: number;
  teamName: string;
  members: number[];
}

async function getEmployeeDirectory(): Promise<Employee[]> {
  try {
    // TODO: Implement API calls and data combination
    // Hint: Use Promise.all for concurrent requests

    // Mock API endpoints - replace with actual fetch calls in real implementation
    const employeesPromise = fetch('/api/employees').then((res) => res.json());
    const performancePromise = fetch('/api/performance').then((res) =>
      res.json()
    );
    const teamsPromise = fetch('/api/teams').then((res) => res.json());

    // Your code here

    return [];
  } catch (error) {
    console.error('Error fetching employee directory:', error);
    throw error;
  }
}
