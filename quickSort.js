function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    console.log([...quickSort(left), pivot, quickSort(right)]);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Big-O
// worst case - O(n^2);
// average case - O(nlogn);

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]
