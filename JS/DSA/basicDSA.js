// Determining Even/Odd Numbers
let num = 10
function evenOdd(num) {
    if (num%2===0) {
        return true
    }
    return false
}

// console.log(evenOdd(num))

// Checking for Prime Numbers

function primeNum(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num%i === 0) {
            return false
        }
    }
    return true
}
// console.log(primeNum(num))

// Validating Leap Years
num = 2000
function leapYr(num) {
    if(num % 4 === 0){
        if (num%100 === 0) {
            if(num%400 === 0){
                return true
            }else{
                return false
            }
        }else{
            return true
        }
    }else{
        return false
    }
}
// console.log(leapYr(num))

// Calculating Armstrong Numbers
num = 153
function armstrongNum(num) {
    let originalNum = num;
    let ams = 0;
    const digits = num.toString().length;

    while (num > 0) {
        let remider = num % 10;
        ams += Math.pow(remider, digits);
        num = Math.floor(num / 10);
    }

    return ams === originalNum;
}
console.log(armstrongNum(num))