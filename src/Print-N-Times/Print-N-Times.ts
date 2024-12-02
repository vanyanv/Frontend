// recursion

const printNTimes = (i: number | undefined = 0, n: number, name: string) => {
  if (i >= n) return;
  console.log(name);
  printNTimes(i + 1, n, name);
};

printNTimes(0, 5, 'Vardan');
