function cartesianProduct(firstArr, secArr) {
    const result = [];
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secArr.length; j++) {
            result.push([firstArr[i], secArr[j]]);
        }
    }
    return result;
}

// Big-O = O(mn);

const firstArr = [1, 2];
const secArr = [3, 4];
console.log(cartesianProduct(firstArr, secArr)); // [[1, 3], [2, 3], [2, 3], [2 ,4]]);
