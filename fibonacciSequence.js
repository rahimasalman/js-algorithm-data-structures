function fibonacciSequence(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

console.log(fibonacciSequence(1));
console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));
console.log(fibonacciSequence(4));

// Big-O = O(n);
