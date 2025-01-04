export function pascalsTirangle(row: number, column: number) {
  return factorial(column) / (factorial(row) * factorial(column - row));
}

function factorial(num: number): number {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(pascalsTirangle(5, 3));
