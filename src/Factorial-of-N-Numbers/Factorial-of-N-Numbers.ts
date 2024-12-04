//function
function factorial(n: number): number {
  //base case
  if (n == 0) return 1;

  return n * factorial(n - 1);
}

console.log('Functional:', factorial(5));

//parametized
function factorialP(n: number, sum: number): number {
  //base case
  if (n < 1) return sum;

  return factorialP(n - 1, sum * n);
}

console.log('Parametized:', factorialP(5, 1));
