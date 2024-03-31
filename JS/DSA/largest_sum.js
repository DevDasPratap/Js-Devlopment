const array = [1, 2, 3, 4, 3, 5, 6, 7, 8]
const numberOfDigit = 4

const findLargest = function (array, numberOfDigit) {
    if (numberOfDigit > array.length) {
        console.log(`Number should not be getter array length`)
        return false
    }
    let max = 0
    for (let i = 0; i < array.length - numberOfDigit + 1; i++) {
        let temp = 0
        for (let j = 0; j < numberOfDigit; j++) {
            temp += array[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}

const res = findLargest(array, numberOfDigit)
console.log(res)