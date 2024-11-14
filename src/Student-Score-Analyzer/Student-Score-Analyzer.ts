interface Student {
  name: string;
  score: number;
}

type studentAnalyzer = {
  getHigestScore: (array: Student[]) => Student;
  getStudentScores: (scoreThreshhold: number, array: Student[]) => Student[];
};

const students: Student[] = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'David', score: 95 },
];

// Create functions to:
// - Find student with highest score
// - Get all students scoring above 80
const studentAnalyzer = {
  getHigestScore: (array: Student[]) => {
    return;
  },
  getStudentScores: (scoreThreshhold: number = 80, array: Student[]) => {},
};

export default studentAnalyzer;
