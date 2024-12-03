function printNto1(i: number, n: number): void {
  //base case
  if (i < 1) return;
  console.log(i);
  printNto1(i - 1, n);
}

printNto1(6, 6);
