function isPrime(n) {
    if(n < 2) {
        return false;
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0){
            return false;
        }
    }
    return true;

    // if(n < 2) {
    //   return false;
    // }
    // for(let i = 2; i <= Math.sqrt(n); i++) {
    //    if(n % i === 0){
    //      return false;
    //    }
    // }
    //     return true;  // This is more optimal
};

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(17));

// Big-O = O(n);
// Big-O = O(sqrt(n)); if Math.sqrt() func exists!