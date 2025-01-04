const arr = [2, 3, 1, 10, 5, 10, 9, 16, 8];
const value = 100;
const index = 5;

function insertElement(array, value, index) {
    // Check if the index is within valid bounds
    if (index > array.length || index < 0) {
        console.log(`Index is out of bounds`);
        return -1;
    }

    // Shift elements to the right from the specified index
    for (let i = array.length; i > index; i--) {
        array[i] = array[i - 1];
    }

    // Insert the value at the specified index
    array[index] = value;

    return array;
}

const result = insertElement(arr, value, index);
console.log(result);
