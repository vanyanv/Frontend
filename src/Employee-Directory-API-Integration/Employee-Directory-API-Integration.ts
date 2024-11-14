interface Employee {
  id: string;
  name: string;
  department: string;
  rating?: number;
  lastReview?: Date;
  team?: string;
}
// Types
interface RawEmployee {
  id: string;
  name: string;
  department: string;
}

interface PerformanceData {
  employeeId: string;
  rating: number;
  lastReview: string;
}

async function getEmployeeDirectory(): Promise<Employee[]> {
  try {
    // TODO: Implement API calls and data combination
    // Hint: Use Promise.all for concurrent requests

    const [employeesRes, performanceRes] = await Promise.all([
      fetch('https://6735506c5995834c8a926ae7.mockapi.io/Employee'),
      fetch('https://6735506c5995834c8a926ae7.mockapi.io/performance'),
    ]);

    if (!employeesRes.ok || !performanceRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const employeesData: RawEmployee[] = await employeesRes.json();
    const performanceData = await performanceRes.json();
    //create employee directory

    const directory = employeesData.map((employee) => {
      const employeePerformance = performanceData.find(
        (p: PerformanceData) => p.employeeId === employee.id
      );

      return {
        ...employee,
        rating: employeePerformance?.rating,
        lastReview: new Date(employeePerformance?.lastReview),
      };
    });

    const sortedByDirectory = directory.sort((a, b) =>
      a.department.localeCompare(b.department)
    );
    sortedByDirectory.sort((a, b) => a.name.localeCompare(b.name));
    console.log('directory', sortedByDirectory);
    return directory;

    return [];
  } catch (error) {
    console.error('Error fetching employee directory:', error);
    throw error;
  }
}

getEmployeeDirectory();
