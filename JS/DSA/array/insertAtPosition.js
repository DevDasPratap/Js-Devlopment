function insertAtPosition(array, position, element) {
    const len = array.length
    if (len < position || position < 0) {
        console.log('Out of bound')
        return
    }
    for(let i=position; i<=len; i++){
        [array[i], element] = [element, array[i]]
    }
    return array
}

console.log(insertAtPosition([7,8,9,10], 1, 7.5))