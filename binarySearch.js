function binarySearch(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === array[midIndex]) {
            return midIndex;
        }
        if (target < array[midIndex]) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }
    return -1;
}

// Big-O = O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
