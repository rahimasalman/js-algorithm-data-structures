function recursiveFibonacciSequence(n) {
    if(n < 2) {
        return n;
    }
    return recursiveFibonacciSequence(n-2) + recursiveFibonacciSequence(n-1)
}

console.log(recursiveFibonacciSequence(1));
console.log(recursiveFibonacciSequence(2));
console.log(recursiveFibonacciSequence(3));
console.log(recursiveFibonacciSequence(6));

// Big-O = O(2^n) - recursive (iterative solution is better (comparing time complexity))