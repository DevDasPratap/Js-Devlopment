const array = [10,22,30,4, 7]
function print(array, startIndex) {
    // Base condition
    if (startIndex >= array.length) {
        return 
    }

    // Logic
    console.log(array[startIndex])

    // Recursive call
    print(array, startIndex+1)
}

// print(array, 0)

function revPrint(array, startIndex) {
    // Base condition
    if (startIndex >= array.length) {
        return 
    }

    // Recursive call
    revPrint(array, startIndex+1)

    // Logic
    console.log(array[startIndex])
}


// revPrint(array, 0)

function factorial(num) {
    // base case
    if (num === 0 || num === 1) {
        return 1
    }
    // console.log('num', num)
    return num*factorial(num-1)
}

// console.log(factorial(4))

function sumArrayElement(array, startIndex) {
    // base case
    if (startIndex >= array.length) {
        return 0
    }
    return array[startIndex]+sumArrayElement(array, startIndex+1)
}
console.log(sumArrayElement(array, 0))