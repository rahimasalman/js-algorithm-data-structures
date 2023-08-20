// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }

// console.log(isPowerOfTwo(0)); // false
// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(4)); // true
// console.log(isPowerOfTwo(6)); // false
// console.log(isPowerOfTwo(17)); // false

// Big-O = O(log(n));

function isPowerOfTwoBitWise(n) {
    if(n < 1) {
        return false;
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitWise(0)); // false
console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(4)); // true
console.log(isPowerOfTwoBitWise(6)); // false
console.log(isPowerOfTwoBitWise(17)); // false

// Big-O = O(1);