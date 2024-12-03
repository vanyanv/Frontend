function print1toN(i: number, n: number): void {
    
    //base case
    if(i > n) return;
    console.log(i);
    return print1toN(i+=1, n);
}


print1toN(1, 6)