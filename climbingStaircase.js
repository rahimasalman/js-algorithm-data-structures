function climbingStaircase(n) {
    const noOfWays = [1, 2];
    for(let i = 2; i <=n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }
    return noOfWays[n-1];
}
// Big-O = O(n)
// climbingStaircase(5);
console.log(climbingStaircase(5)); // 8
console.log(climbingStaircase(7)); // 21

// 1 - 1
// 2 - 2
// 3 - 3
// 4 - 5
// 5 - 8
// 6 - 13
// 7 - 21