const array = [4, 10, 5, 9, 7, 8];
console.log("Array", array);

function sorting(array) {
    for (let i = 1; i < array.length; i++) { // Start from index 1
        let j = i;
        while (j > 0 && array[j - 1] > array[j]) {
            // Correct swap logic
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            j--;
        }
    }
    return array;
}

console.log("Sorted Array:", sorting([...array])); // Use spread to avoid modifying the original array


console.log("Original Array:", array);

function sortingDescending(array) {
    for (let i = 1; i < array.length; i++) { 
        let j = i;
        while (j > 0 && array[j - 1] < array[j]) { // Swap if the previous element is smaller
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            j--;
        }
    }
    return array;
}

console.log("Sorted in Descending Order:", sortingDescending([...array]));
