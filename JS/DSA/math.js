// Count digits in a number
// Output:5
const N = 12345
function countDigit(input) {
    let count = 0;
    while (input > 0) {
        input = Math.floor(input / 10)
        count++
    }
    return count
}
const resCountDigit = countDigit(N)
// console.log(resCountDigit)

// Reverse Digits of A Number
// Input:N = 12345
// Output:54321

function reverseNumber(input) {
    // input = String(input)
    // return Number(input.split('').reverse().join(''))

    // or
    let reverse = 0
    while (input !== 0) {
        let remainder = input % 10
        reverse = reverse * 10 + remainder
        input = Math.floor(input / 10)
    }
    return reverse
}
const resReverseNumber = reverseNumber(N)
// console.log(resReverseNumber)

// Check if a number is Palindrome or Not
// Input:N = 4554
// Output:Palindrome Number
// Input:N = 7789
// Output: Not Palindrome

function palindromeNumber(input) {
    // const revNumber = String(input).split('').reverse().join('')
    // return input === Number(revNumber)

    // or
    // let reverse = 0
    // let num = input
    // while (input !== 0) {
    //     let remainder = Math.floor(input%10)
    //     reverse = reverse * 10 + remainder
    //     input = Math.floor(input/10)
    // }

    // return num === reverse

    // or
    let temp = input
    let rev = 0
    while (temp !== 0) {
        let n = temp % 10
        temp = parseInt(temp / 10)
        rev = rev * 10 + n
    }
    return input === rev
}

const resPalindromeNumber = palindromeNumber(N)
// console.log(resPalindromeNumber)

// Find GCD of two numbers
// Input:N1 = 9, N2 = 12     
// Output:3
const N1 = 9, N2 = 27
function GCD(N1, N2) {
    let gcd = 0
    for (let i = 1; i < Math.min(N1, N2); i++) {
        if (N1 % i === 0 && N2 % i === 0) {
            gcd = i
        }
    }
    return gcd
}

const resGCD = GCD(N1, N2)
// console.log(resGCD)

// Check if a number is Armstrong Number or not
// Input:N = 153
// Output:True
// Explanation: 13+53+33 = 1 + 125 + 27 = 153

function isArmstrongNumber(N) {
    const digits = N.toString().split('');
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);
    return sum === N;
}

const resArmstrong = isArmstrongNumber(N)
// console.log(resArmstrong)

// Print all Divisors of a given Number
// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]

function isDivisors(input) {
    if (input <= 0) {
        return false
    }
    const allDivisors = []
    for (let i = 0; i < input; i++) {
        if (input % i === 0) {
            allDivisors.push(i)
        }
    }
    return allDivisors
}

const resDivisors = isDivisors(10)
// console.log(resDivisors)

// Check if a number is prime or not
// Example 1:
// Input:N = 2
// Output:True
// Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).
// Example 2:
// Input:N =10
// Output: False
// Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.

function primeNumber(input) {
    if (input <= 1) {
        return false;
    }
    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            return false
        }
    }
    return true
}

const resPrimeNumber = primeNumber(10)
// console.log(resPrimeNumber)

function factorial(num) {
    if (num < 0) {
        return -1
    } else if (num === 0 || num === 1) {
        return 1
    } else {
        let res = 1
        for (let i = 2; i <= num; i++) {
            res *= i
        }
        return res
    }

}
// console.log(factorial(4))

function checkArmstrongNumber(n){
    let armstrong = 0
    let temp = n
    while (temp > 0) {
        // get last one digit
        let remainder = temp%10
        armstrong += remainder * remainder * remainder
        temp = Math.floor(temp / 10)
    }
    return armstrong === n ? 'Amtrong' : 'Not amstrong'
}
const resultArmstrong = checkArmstrongNumber(153)
console.log(resultArmstrong)

const a=0, z=153
// Find Armstrong numbers between a and z
for (let i = a; i <= z; i++) {
    if (checkArmstrongNumber(i) === 'Amtrong') {
        console.log(i)
    }
}
