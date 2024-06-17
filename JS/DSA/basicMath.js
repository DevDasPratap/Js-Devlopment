// Count digits in a number
// Input:N = 12345
// Output:5

const N = 12345
const countDigit = (N)=>{
    // let count = 0
    // while (N > 0) {
    //     N = Math.floor(N/10)
    //     count++
    // }
    // return count

    // other way
    // return Math.floor(Math.log10(N)+1)

    // another way

    return str = String(N).length
}
// const res = countDigit(N)
// console.log(res)

// Reverse Digits of A Number
// Input:N = 12345
// Output:54321

// const number = 12345
const revNum = (number)=>{
    const str = String(number)
    let rev = ''
    for(let i = str.length-1; i >= 0; i--){
        rev += str[i]
    }
    return Number(rev)
}
// const res = revNum(number)
// console.log(res)

// Check if a number is Palindrome or Not
const number = 4554
const checkPalindrome = (number) =>{
    const str = String(number).split('').reverse().join('')
    if (String(number) === str) {
        return true
    }
    return false
}
// const res = checkPalindrome(number)
// console.log(res)


// Find GCD of two numbers
function gcdRecursive(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcdRecursive(b, a % b);
    }
}

// console.log(gcdRecursive(60, 15)); // Output: 15
// console.log(gcdRecursive(90, 36)); // Output: 18

// Check if a number is Armstrong Number or not
// Input:N = 153
// Output:True

const isArmstrongNumber = (number)=> {
    const numberString = number.toString();
    const numberOfDigits = numberString.length;
  
    let sum = 0;
    for (let i = 0; i < numberOfDigits; i++) {
      const digit = numberString[i];
      sum += Math.pow(digit, numberOfDigits);
    }
  
    return sum === number;
  }
  
//   console.log(isArmstrongNumber(153)); // true
//   console.log(isArmstrongNumber(123)); // false

//   Print all Divisors of a given Number

// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]

const input = 22

function findDivisors(input) {
    let divisors = [];
    for (let i = 1; i <= input; i++) {
        if (input % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

// console.log(findDivisors(input)); 

// Check if a number is prime or not
// Input:N =10
// Output: False

const prime = 9
const isPrime = (number)=> {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  const res = isPrime(prime)
  console.log(res)