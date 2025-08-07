/**
 * Recurssion: Divide and concure, trees, graph, dp
 * Base condition / termination condition
 * Tail  recursion: better space optimization compared to head recursion, because it doesn't require additional memory to store the call stack.
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

// printHead([1,2,3,4], 0)


// Tail recurssion
// Tail recursion is a form of recursion where the recursive call is the last operation in the function.
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

// printTail([1,2,3,4], 0)


function factorial(num) {
    // Base condition
    if (num === 0 || num === 1) {
        return 1
    }
    return num * factorial(num-1)
}

const res = factorial(4)
// console.log(res)

// Sum of array element
function sumOfArray(array, startIndex) {
    // Base condition
    if (startIndex >= array.length) {
        return 0
    }
    return array[startIndex] + sumOfArray(array, startIndex+1)
}

const sum = sumOfArray([1,2,3,4], 0)
// console.log(sum)

function sumOfDigits(n) {
        // code here
        let sum = 0
        
        while(n>0){
            let last = n % 10  // getting last digit from the number
            n = Math.floor(n / 10)  // removing last digit from the number
            sum += last
        }
        
        return sum
    }

console.log(sumOfDigits(99999))

