function factorialOfNumber(n) {
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorialOfNumber(0));
console.log(factorialOfNumber(1));
console.log(factorialOfNumber(3));
console.log(factorialOfNumber(5));
console.log(factorialOfNumber(8));

// Big-O = O(n);