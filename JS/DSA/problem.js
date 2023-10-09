// sum of all n natuaral number => 5= 1+2+3+4+5
function sumOfNatural(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNatural(5))

// sum of digit => 1234=10
function sumOfDigit(num) {
    let sum = 0
    while (num>0) {
        sum += num%10
        num = Math.floor(num/10)
    }
    return sum
}
console.log(sumOfDigit(1234))

// count the number of digit 34252 => 5
function countOfDigit(num) {
    num = Math.abs(num)
    let count = 0
    do {
        count++
        num = Math.floor(num/10)
    } while (num>0);
    return count
}

console.log(countOfDigit(7890))

// palindrome number => 121
// const isPalindrome = function (num) {
    
// }

// console.log(isPalindrome(121))

// Fibonacci number
const fibonacci = function(num){
    if (num < 2) {
        return num
    }
    let prev = 0, curr = 1, next
    for (let i = 2; i <= num; i++) {
        next = prev + curr
        prev = curr
        curr = next
    }
    return next
}

console.log(fibonacci(10))

// missing number in array
let nums = [1,2,3,5]
const missingNum = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return nums.length*(nums.length+1)/2 - sum
}
console.log(missingNum(nums))

// Count Odd Numbers in an Interval Range
// Fizz Buzz
// Power of Two
// Find Square root of a Number

// sum of array
let arr = [1,2,3,4]
function sumOfArray(nums) {
    let sum = 0
    for (let i = 0; i <= nums.length; i++) {
        sum += i 
    }
    return sum
}

console.log(sumOfArray(arr))

// sum of matrix
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
function sumOfMatrix(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            sum += nums[i][j]
        }
    }
    return sum
}
console.log(sumOfMatrix(matrix))