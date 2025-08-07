/**
 * How to approch recurssion
 * 1. Base case
 * 2. Recursive case
 */

// Convert normal function to recursive function

function factorial(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

// console.log(factorial(4))

function factorialRecurssion(num) {
    if (num == 1) {
        return 1
    }
    return num * factorialRecurssion(num - 1)
}

// console.log(factorialRecurssion(4))


// sum of digits
function sumOfDigit(num) {
    let sum = 0
    if (num <= 0) {
        return 0
    }
    while (num > 0) {
        let last = Math.floor(num % 10)
        sum += last
        num = Math.floor(num / 10)
    }

    return sum
}

console.log(sumOfDigit(789))

function sumOfDigitRecurssion(num) {
    if (num === 0) {
        return 0;
    }
    return (num % 10) + sumOfDigitRecurssion(Math.floor(num / 10));
}

console.log(sumOfDigitRecurssion(789));




function fn(n) {
    if (n===0) {
        return
    }
    console.log('N:', n)
    fn(n-1)
    console.log('N:', n)
}

fn(4)


function fn(n) {
    if (n===0) {
        return
    }
    fn(n-1)
    console.log('N:', n)
    fn(n-1)
}

fn(4)

function fun(n) {
    if (n === 0) {
        return 0
    }
    return 1+fun(Math.floor(n/2))
}

console.log(fun(16))

function fun(n) {
    if (n === 0) {
        return 0
    }
    fun(Math.floor(n/2))
    console.log(n%2)
}

console.log(fun(16))

function tail(n) {
if (n===0) {
    return
}    
console.log('N', n)
tail(n-1)
}

tail(4)

function nonTail() {
    if (n===0) {
    return
}    
tail(n-1)
console.log('N', n)
}

nonTail(4)

// how to make above function tail recursive

function print(n,r) {
if (n<r) {
    return
}
console.log(r)
print(n, r+1)
}

// Writing base case in recurssion