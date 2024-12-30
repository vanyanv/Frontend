export function findNext(array: number[]): number[] {
  let index = -1;
  //find the index where index i is less than i+1
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] < array[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return array.reverse();
  }

  //swap the next greatest with out index
  for (let i = array.length - 1; i > index; i--) {
    if (array[i] > array[index]) {
      [array[index], array[i]] = [array[i], array[index]];
      break;
    }
  }

  //reverse the rest of the array
  reverseFromIndex(array, index + 1);

  return array;
}

console.log(findNext([1, 3, 2]));
console.log(findNext([3, 2, 1]));

//Time Complexity -> O(N) + O(N) + O(N)
//Space Complexity -> O(1)

function reverseFromIndex(arr: number[], startIndex: number) {
  let left = startIndex;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
