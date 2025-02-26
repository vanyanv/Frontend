export function maxProfits(array: number[]): number {
  let maxProfit = 0;

  for (let i = 0; i < array.length; i++) {
    const buy = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const sell = array[j];
      const currentProfit = sell - buy;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }

  return maxProfit;
}

console.log(maxProfits([7, 1, 5, 3, 6, 4]));
console.log(maxProfits([7, 6, 4, 3, 1]));

//Time Complexity O(n) * O(n) -> O(n^2)
//Space Complexity O(1)

export function maxProfitOptimal(array: number[]): number {
  let maxProfit = 0;

  let min = array[0];
  let i = 0;
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }

    maxProfit = Math.max(maxProfit, array[i] - min);
    i++;
  }

  return maxProfit;
}

console.log('max profit Optimally');
console.log(maxProfitOptimal([7, 1, 5, 3, 6, 4]));
console.log(maxProfitOptimal([7, 6, 4, 3, 1]));

//Time Complexity O(n) using two pointer method
//Space Complexity O(1) using no extra space
