/**
 * Recurssion: Divide and concure, trees, graph, dp
 * Base condition / termination condition
 */


// Head recurssion
function printHead(arr, startIndex) {
    // Base condition / termination condition
    if (startIndex >= arr.length) {
        return
    }
    // Logic
    console.log('arr[startIndex]', arr[startIndex])
    // Recursive call
    printHead(arr, startIndex+1)
}

// printHead([1,2,3,4], 1)


// Tail recurssion
function printTail(arr, startIndex) {
    // Base condition / termination condition
    if (startIndex >= arr.length) {
        return
    }
    console.log('call')
    // Recursive call
    printTail(arr, startIndex+1)
    console.log('call end')

    // Logic
    console.log('arr[startIndex]', arr[startIndex])
}

// printTail([1,2,3,4], 1)


function factorial(num) {
    // Base condition
    if (num === 0 || num === 1) {
        return 1
    }
    return num * factorial(num-1)
}

const res = factorial(4)
console.log(res)

// Sum of array element
function sumOfArray(array, startIndex) {
    // Base condition
    if (startIndex >= array.length) {
        return 0
    }
    return array[startIndex] + sumOfArray(array, startIndex+1)
}

const sum = sumOfArray([1,2,3,4], 0)
console.log(sum)