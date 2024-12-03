function print1toN(i: number, n: number): void {
  //base case
  if (i > n) return;
  console.log(i);
  print1toN((i += 1), n);
}

function print1toNBackwards(i: number, n: number): void {
  //base case
  if (i < 1) return;
  print1toNBackwards(i - 1, n);
  console.log(i);
}

print1toNBackwards(6, 6);
