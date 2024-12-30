export function findLeaders(array: number[]): void {
  for (let i = 0; i < array.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] <= array[j]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      console.log(array[i]);
    }
  }
}
console.log('Print');
console.log(findLeaders([4, 7, 1, 0]));
console.log(findLeaders([10, 22, 12, 3, 0, 6]));

//TimeComplexity -> O(n^2)
//Space Complexity -> O(1)
export function findLeadersArray(array: number[]): number[] {
  const leaderArray = [];
  for (let i = 0; i < array.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] <= array[j]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      leaderArray.push(array[i]);
    }
  }

  return leaderArray;
}
console.log('Array');
console.log(findLeadersArray([4, 7, 1, 0]));
console.log(findLeadersArray([10, 22, 12, 3, 0, 6]));

//TimeComplexity -> O(n^2)
//Space Complexity -> O(N)

function findLeadersArrayOptimal(array: number[]): number[] {
  const leadersArray = [];

  let leader = -Infinity;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > leader) {
      leadersArray.push(array[i]);
      leader = array[i];
    }
  }

  return leadersArray;
}

console.log('Array Optimal');
console.log(findLeadersArrayOptimal([4, 7, 1, 0]));
console.log(findLeadersArrayOptimal([10, 22, 12, 3, 0, 6]));
