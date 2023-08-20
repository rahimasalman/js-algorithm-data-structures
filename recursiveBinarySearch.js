function recursiveBinarySearch(array, target) {
    return search(array, target, 0, array.length - 1)
    function search(array, target, leftIndex, rightIndex) {
        if(leftIndex > rightIndex) {
            return -1;
        }
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === array[midIndex]) {
            return midIndex;
        }
        if(target <  array[midIndex]) {
            return search(array, target, leftIndex, midIndex - 1)
        } else {
            return search(array, target, midIndex + 1, rightIndex)
        }
    }
}

// Big-O = O(logn)

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1
