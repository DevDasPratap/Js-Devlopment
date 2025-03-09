const arr = [1, 0, 0, 1, 1, 1, 0, 0, 0, 1]
function leftZero(array) {
    let i = 0
    let j = 0
    while (j < array.length) {
        if (array[j] === 0) {
            [array[i], array[j]] = [array[j], array[i]]
            // const temp = array[i]
            // array[i] = array[j]
            // array[j] =temp
            i++
        }
        j++
    }
    return array
}

const result = leftZero(arr)
// console.log(result)


const positiveAndNegative = [-1, 0, -10, 10, -9, -4, 5, -5, -22]

function positiveAndNegativeSwap(array) {
    let left=0, right=0
    while (right < array.length) {
        if (array[right] < 0) {
            [array[right], array[left]] = [array[left], array[right]]
            left++
        }
        right++
    }
    return array
}

const res = positiveAndNegativeSwap(positiveAndNegative)
// console.log(res)