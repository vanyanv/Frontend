function sum(n: number): number {
  //base case
  if (n == 0) return 0;
  return n + sum(n - 1);
}

console.log(sum(6));

//parameterized recursion ->
function sum2(n: number, sum: number): number {
  if (n < 1) return sum;
  sum += n;
  return sum2(n - 1, sum);
}

console.log(sum2(6, 0));
