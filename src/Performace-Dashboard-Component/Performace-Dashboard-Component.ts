
type Employee = {
  employeeId: number;
  employeeName: string;
  role?: string;
  team: string;
  department: string;
};

type Department = {
  id: number;
  name: string;
  teams: Team[];
};

type Team = {
  id: string;
  name: string;
  members: Member[];
};

type Member = {
  id: string;
  name: string;
  role: string;
};

const getDepartments = async (): Promise<Employee[]> => {
  try {
    const data = await fetch(
      'https://run.mocky.io/v3/8e5c2cf8-2a64-4577-991b-10c9173cef85'
    );
    const departments = await data.json();

    //transformdata
    const transformedDepartments = departments?.departments?.map(
      (department: Department) => {
        return department.teams?.flatMap((team: Team) => {
          return team.members?.flatMap((member: Member) => {
            const transformedMember = {
              employeeId: member.id,
              employeeName: member.name,
              role: member.role,
              team: team.name,
              department: department.name,
            };

            return transformedMember;
          });
        });
      }
    );

    console.log(transformedDepartments);
    return transformedDepartments;
  } catch (error) {
    console.error('Error fetching Department:', error);
    throw error;
  }
};

getDepartments();
