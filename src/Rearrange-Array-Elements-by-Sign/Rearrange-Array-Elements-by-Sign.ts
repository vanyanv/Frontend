export function rearrange(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //when the place is even we know it needs to be positive
      if (i % 2 === 0 && array[i] < 0 && array[j] > 0) {
        [array[i], array[j]] = [array[j], array[i]];
      }
      //the i is odd then we know we need to place a negative
      if (i % 2 !== 0 && array[i] > 0 && array[j] < 0) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

console.log(rearrange([1, 2, -4, -5]));
console.log(rearrange([1, 2, -3, -1, -2, 3]));

//Time Complexity => O(N) * O(N)
//Space COmplexity => O(1)

export function rearrangeDiff(array: number[]): number[] {
  const postives = [];
  const negatives = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      postives.push(array[i]);
    } else {
      negatives.push(array[i]);
    }
  }

  for (let i = 0; i < array.length / 2; i++) {
    array[2 * i] = postives[i];
    array[2 * i + 1] = negatives[i];
  }

  return array;
}

console.log(rearrangeDiff([1, 2, -4, -5]));
console.log(rearrangeDiff([1, 2, -3, -1, -2, 3]));

//Time Complexity -> O(N) + O(N/2) ->
//Space Complexity -> O(N) + O(N) -> O(N)

export function rearrangeDiffOptimal(array: number[]): number[] {
  const answer: number[] = [];

  let postive = 0;
  let negative = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      answer[negative] = array[i];
      negative += 2;
    } else {
      answer[postive] = array[i];
      postive += 2;
    }
  }

  return answer;
}

console.log('OPTIMAL');
console.log(rearrangeDiffOptimal([1, 2, -4, -5]));
console.log(rearrangeDiffOptimal([1, 2, -3, -1, -2, 3]));

//Time Complexity O(N) -> one lopps itterating thru the entire array;
//Space Complexity O(N) -> we need somewhere to store out answer array
