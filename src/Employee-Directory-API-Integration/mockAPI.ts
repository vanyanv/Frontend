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

// Mock Data
const mockEmployees: RawEmployee[] = [
  { id: 1, name: 'John Doe', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', department: 'Design' },
  { id: 3, name: 'Bob Wilson', department: 'Engineering' },
  { id: 4, name: 'Alice Brown', department: 'Product' },
  { id: 5, name: 'Charlie Davis', department: 'Design' },
];

const mockPerformance: PerformanceData[] = [
  { employeeId: 1, rating: 4.5, lastReview: '2024-01-15' },
  { employeeId: 2, rating: 4.8, lastReview: '2024-02-01' },
  { employeeId: 3, rating: 4.2, lastReview: '2024-01-20' },
  { employeeId: 5, rating: 4.6, lastReview: '2024-02-10' },
];

const mockTeams: TeamData[] = [
  { id: 1, teamName: 'Frontend', members: [1, 3] },
  { id: 2, teamName: 'UI/UX', members: [2, 5] },
  { id: 3, teamName: 'Product Strategy', members: [4] },
];

// Mock API Response Type
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: {
    'content-type': string;
    'x-request-id': string;
  };
}

class MockApi {
  private createResponse<T>(data: T): ApiResponse<T> {
    return {
      data,
      status: 200,
      statusText: 'OK',
      headers: {
        'content-type': 'application/json',
        'x-request-id': Math.random().toString(36).substring(7),
      },
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private simulateNetworkConditions(): Promise<void> {
    const randomDelay = Math.floor(Math.random() * 1000) + 500; // 500-1500ms delay
    const shouldFail = Math.random() < 0.1; // 10% chance of failure

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Network Error'));
        } else {
          resolve();
        }
      }, randomDelay);
    });
  }

  async fetchEmployees(): Promise<ApiResponse<RawEmployee[]>> {
    try {
      await this.simulateNetworkConditions();
      return this.createResponse(mockEmployees);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Failed to fetch employees: ${errorMessage}`);
    }
  }

  async fetchPerformance(): Promise<ApiResponse<PerformanceData[]>> {
    try {
      await this.simulateNetworkConditions();
      return this.createResponse(mockPerformance);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Failed to fetch performance data: ${errorMessage}`);
    }
  }

  async fetchTeams(): Promise<ApiResponse<TeamData[]>> {
    try {
      await this.simulateNetworkConditions();
      return this.createResponse(mockTeams);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Failed to fetch teams: ${errorMessage}`);
    }
  }
}

export const mockApi = new MockApi();
