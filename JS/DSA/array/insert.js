const arr = [4, 3, 1, 10, 5, 10, 9, 16, 8];
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

// const result = insertElement(arr, value, index);
// console.log(result);


function insertAtEnd(array, value) {
    array[array.length] = value
    return array
    // for(let i=0; i<=array.length; i++){
    //     if (array[i+1] === undefined) {
    //         array[i+1] = value
    //         break
    //     }
    // }
    // return array
}

// console.log(insertAtEnd(arr, value))

function insertAtFirst(array, value) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1]; // Shift elements to the right
    }
    array[0] = value; // Insert the value at the first position
    return array;
}

// console.log(insertAtFirst(arr, value))


function insertAtPosition(array, position, element) {
    const len = array.length
    if (len < position || position < 0) {
        console.log('Out of bound')
        return
    }
    for(let i=position; i<=len; i++){
        // let temp = array[i]
        // array[i] = element
        // element = temp

        // or
        [array[i], element] = [element, array[i]]
    }
    return array
}

console.log(insertAtPosition([7,8,9,10], 1, 7.5))