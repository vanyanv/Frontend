export default function insertionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[0] < arr[1]) {
      const { a, b } = swapElements(arr[0], arr[1]);
      arr[0] = a;
      arr[1] = b;
    }
    for (let j = i; j < arr.length; j++) {}
  }
  return arr;
}

function swapElements(ele1: number, ele2: number) {
  let a = ele1;
  let b = ele2;
  const temp = a;
  a = b;
  b = temp;

  return { a, b };
}
