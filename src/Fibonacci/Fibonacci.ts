export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
    sum += current;
  }

  return sum;
}

export function fibonacciRecursive(n: number): number {
  //base cases
  if (n <= 0) return 0;

  if (n === 1) return 1;

  return 1 + fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacciRecursive(6));
