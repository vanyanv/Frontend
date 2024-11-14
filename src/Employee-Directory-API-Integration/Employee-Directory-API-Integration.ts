import { mockApi } from './mockAPI';
interface Employee {
  id: number;
  name: string;
  department: string;
  rating?: number;
  lastReview?: string;
  team?: string;
}
// Types
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

    const [employeesRes, performaceRes, teamsRes] = await Promise.all([
      mockApi.fetchEmployees(),
      mockApi.fetchPerformance(),
      mockApi.fetchTeams(),
    ]);

    console.log(employeesRes.data, performaceRes.data, teamsRes.data);

    //create employee directory

    return [];
  } catch (error) {
    console.error('Error fetching employee directory:', error);
    throw error;
  }
}

getEmployeeDirectory();
