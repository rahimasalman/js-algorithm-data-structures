function recursiveFactorialOfInteger(n) {
    if(n < 2) {
        return 1;
    }
    return n * recursiveFactorialOfInteger(n-1)
}

console.log(recursiveFactorialOfInteger(0)); // 1
console.log(recursiveFactorialOfInteger(1)); // 1
console.log(recursiveFactorialOfInteger(5)); // 120
console.log(recursiveFactorialOfInteger(9)); // 362880
console.log(recursiveFactorialOfInteger(12)); // 6.689503e+198

// Big(O) = O(n)