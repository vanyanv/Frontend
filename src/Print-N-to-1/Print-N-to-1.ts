function printNto1(i: number, n: number): void {
  //base case
  if (i < 1) return;
  console.log(i);
  printNto1(i - 1, n);
}

// printNto1(6, 6);


function printNto1B(i: number, n: number): void {
    //base case
    if (i > n) return;
    
    printNto1B(i + 1, n);
    console.log(i);
  }

  printNto1B(1,6)