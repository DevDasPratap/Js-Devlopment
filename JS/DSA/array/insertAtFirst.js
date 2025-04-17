function insertAtFirst(array, element) {
    for(let i = array.length; i> 0; i--){

        // array[i+1] = array[i] // shifts the current element to the right by one position.
        // or
        array[i] = array[i-1] // shifts the element from the left to the current position.
    }
    array[0] = element
    return array
}

console.log(insertAtFirst([8,9,10,10.5], 7))