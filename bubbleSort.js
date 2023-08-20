function bubbleSort(arr) {
    let isSwapped;
    do {
        isSwapped = false;
        for(let i=0; i< arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                isSwapped = true;
            }
        }
    } while(isSwapped);
}

const arr = [0, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); // [-6, -2, 0, 4, 20]