export function palindromeR(string: string, i: number): boolean {
  if (string.length === 0) return false;
  //base case
  if (i >= Math.floor(string.length / 2)) return true;
  if (string[i] !== string[string.length - 1 - i]) return false;
  return palindromeR(string, i + 1);
}

export function palindrome(string: string): boolean {
  if (string.length === 0) return false;
  if (string.length < 2) return true;

  //go thru the string and compare
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}


console.log(palindrome("radar"))