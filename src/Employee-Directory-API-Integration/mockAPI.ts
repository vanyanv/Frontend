// Approach 1: Using Mock Data with Promise Resolution
// Create this in a file called 'mockApi.ts'

// Mock Data
const mockEmployees = [
  { id: 1, name: 'John Doe', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', department: 'Design' },
  { id: 3, name: 'Bob Wilson', department: 'Engineering' },
  { id: 4, name: 'Alice Brown', department: 'Product' },
  { id: 5, name: 'Charlie Davis', department: 'Design' },
];

const mockPerformance = [
  { employeeId: 1, rating: 4.5, lastReview: '2024-01-15' },
  { employeeId: 2, rating: 4.8, lastReview: '2024-02-01' },
  { employeeId: 3, rating: 4.2, lastReview: '2024-01-20' },
  { employeeId: 5, rating: 4.6, lastReview: '2024-02-10' },
];

const mockTeams = [
  { id: 1, teamName: 'Frontend', members: [1, 3] },
  { id: 2, teamName: 'UI/UX', members: [2, 5] },
  { id: 3, teamName: 'Product Strategy', members: [4] },
];

// Mock API class
class MockAPI {
  // Simulate network delay
  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Randomly decide if request should fail (for testing error handling)
  private shouldFail() {
    return Math.random() < 0.1; // 10% chance of failure
  }

  // Mock GET requests
  async get(endpoint: string) {
    await this.delay(Math.random() * 500 + 500); // Random delay between 500-1000ms

    if (this.shouldFail()) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    switch (endpoint) {
      case '/api/employees':
        return [...mockEmployees];
      case '/api/performance':
        return [...mockPerformance];
      case '/api/teams':
        return [...mockTeams];
      default:
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
  }
}

// Export instance
export const mockApi = new MockAPI();
