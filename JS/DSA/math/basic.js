// Sum of Digits of a Number
function sumOfDigit(digits) {
    let sum = 0
    while (digits) {
        const lastDigit = Math.floor(digits % 10)
        sum += lastDigit
        digits = Math.floor(digits / 10)
    }
    return sum
}
// console.log(sumOfDigit(687))

function reverse(digits) {
    let rev = 0
    while (digits) {
        const remainder = Math.floor(digits % 10)
        rev = rev * 10 + remainder
        console.log('rev', rev)
        digits = Math.floor(digits / 10)
    }
    return rev
}

// console.log(reverse(789))

function primeTest(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if(num%i===0){
            return false
        }
    }
    return true
}

// console.log(primeTest(15))