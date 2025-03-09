const arr = [1, 0, 0, 1, 1, 1, 0, 0, 0, 1]
function leftZero(array) {
    let i = 0
    let j = 0
    while (i !== array.length) {
        if (array[i] === 0) {
            let temp = array[i]
            array[j] = array[i]
            array[j] = temp
            j++
        }
        i++
    }
    return array
}

const result = leftZero(arr)
console.log(result)