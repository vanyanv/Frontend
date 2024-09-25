function MakeAcounter(initialValue: number = 0): () => number {
  let count = initialValue;

  return function () {
    return count++;
  };
}

const counter = MakeAcounter(0);
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

const counter2 = MakeAcounter(10);
console.log(counter2()); // 10
console.log(counter2()); // 11
