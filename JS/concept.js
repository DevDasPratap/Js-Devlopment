/**
 * This js concept build your problem solving approch
 */

function calculateArea(length, width) {
  if (length >= 0 || width >= 0) {
    throw new RangeError("Length should be positive number");

  }
  const area = length * width
  console.log('Area', area)
  return area
}

try {
  // calculateArea(4, 9)
  // calculateArea(-4, 8) // minus not allow because real life not happen
  // calculateArea(0, -0)
  // calculateArea(0, 0)
  // calculateArea(4, 0)
} catch (error) {
  console.log(error.name, error.message)
}


function checkIfOddOrEven(number) {
  const remainder = number % 2
  if (remainder === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

try {
  // console.log(checkIfOddOrEven(9))
  // console.log(checkIfOddOrEven(-9))
  // console.log(checkIfOddOrEven(0))
  // console.log(checkIfOddOrEven(num))
} catch (error) {
  console.log(error.name, error.message)
}


function smallestNumFind(a, b, c) {
  // Check if all inputs are valid numbers (manually checking instead of using isNaN)
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new TypeError('Enter valid numbers');
  }
  // if (a < b && a < c) {
  //     return a
  // }else if(b < a && b < c){
  //     return b
  // }else{
  //     return c
  // }

  let smallestNumber = a
  if (b < smallestNumber) {
    smallestNumber = b
  }
  if (c < smallestNumber) {
    smallestNumber = c
  }
  return smallestNumber
}

try {
  // console.log(smallestNumFind(9,1,5))
  // console.log(smallestNumFind('9',1,5))
  // console.log(smallestNumFind(9,100,5))
  // console.log(smallestNumFind(5,5,5))
  // console.log(smallestNumFind(5,-5,5))
  // console.log(smallestNumFind(5,50,5))
} catch (error) {
  console.log(error.name, error.message)
}


function reverseString(str) {
  if (typeof str !== 'string') {
    // return str
    throw new TypeError('Only string are allowed')
  }
  let reverse = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse
}

//   console.log(reverseString('Software Developer'))
//   console.log(reverseString('Pratap Das'))

//   try {
//     reverseString(999900000)
//   } catch (error) {
//     console.log(error.message)
//   }




function factorialNumber(number) {
  // if (!isNaN(number)) {
  //   throw new TypeError('Only number are allowed')
  // }
  if (typeof number !== 'number') {
    throw new TypeError('Only number are allowed')
  }
  if (number <= 0) {
    throw new TypeError('Number should be geter then 0')
  }
  // if (number === 1) {
  //   return number
  // }
  let result = 1
  for (let i = 1; i <= number; i++) {
    result *= i
  }
  return result
}

try {
  // const result = factorialNumber(0)
  // const result = factorialNumber(4)
  // const result = factorialNumber(-1)
  // const result = factorialNumber('-0')
  // const result = factorialNumber(-0)
  // const result = factorialNumber('num')
  // const result = factorialNumber(100)
  // console.log(result)
} catch (error) {
  console.log(error.message)
}


function isLeapYear(year) {
  if (year % 4 === 0) {
    return true
  } else {
    return false
  }
}

try {
  // const result = isLeapYear(0)
  // const result = isLeapYear(4)
  // const result = isLeapYear(-1)
  // const result = isLeapYear('-0')
  // const result = isLeapYear(-0)
  // const result = isLeapYear('num')
  // const result = isLeapYear(100)
  // const result = isLeapYear(2022)
  // console.log(result)
} catch (error) {
  console.log(error.message)
}


// function isPalindrome(input) {
//   for (let i = 0; i < input.length; i++) {
//     console.log(`First : ${input[i]} last: ${input[input.length-1-i]}`)
//     if(input[i] !== input[input.length-1-i]){ // first and last index check
//       return false
//     }
//   }
//   return true
// }

// optimize
// function isPalindrome(input) {
//   for (let i = 0; i < input.length/2; i++) {
//     console.log(`First : ${input[i]} last: ${input[input.length-1-i]}`)
//     if(input[i] !== input[input.length-1-i]){
//       return false
//     }
//   }
//   return true
// }

function isPalindrome(input) {
  let start = 0
  let end = input.length - 1
  for (start, end; start < end; start++, end--) {
    // console.log(`Start : ${start} end: ${end}`)
    if (input[start] !== input[end]) {
      return false
    }
  }
  return true
}

try {
  // const result = isPalindrome('manam')
  // const result = isPalindrome('level')
  // const result = isPalindrome('abba')
  // const result = isPalindrome('pratap')
  // console.log(result)
} catch (error) {
  console.log(error.name, error.message)
}


function calculatePower(base, exponenet) {
  let result = 1
  for (let i = 1; i <= exponenet; i++) {
    result = result * base
    // console.log(result)
  }
  return result
}

try {
  // const result = calculatePower(4,5)
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}


function countVowelAndConsonent(string) {
  string = string.toLowerCase()
  const vowels = 'aeiou'
  let vowel = 0, consonent = 0
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (char >= 'a' && char <= 'z') {
      if (vowels.includes(char)) {
        vowel++
      } else {
        consonent++
      }
    }
  }
  return { vowel, consonent }
}

try {
  // const result = countVowelAndConsonent('Pratap das')
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}

function calculateFactors(number) {
  if (number < 1) {
    throw new RangeError("Number shoulb be gener then zero");
  }
  const result = []
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      result.push(i)
    }
  }
  return result
}

try {
  // const result = calculateFactors(10)
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}


function calculateAverage(array) {
  let sumOfElement = 0
  for (let i = 0; i < array.length; i++) {
    sumOfElement += array[i]
  }
  return sumOfElement / array.length
}

try {
  // const result = calculateAverage([7,8,9,10])
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}



function calculateSimpleInterest(principalAmount, interesRate, durationAmount) {
  const multiplication = principalAmount * interesRate * durationAmount
  const simpleInterest = multiplication / 100
  return simpleInterest
}

try {
  // const result = calculateSimpleInterest(1000, 5,1)
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}

function countWords(sentence) {
  // let count = 0;
  // let isWord = false;

  // for (let i = 0; i < sentence.length; i++) {
  //   if (sentence[i] !== ' ') {
  //     if (!isWord) {
  //       count++;
  //       isWord = true;
  //     }
  //   } else {
  //     isWord = false;
  //   }
  // }
  // return count;

  const words = sentence.split(' ').filter(word => word.length > 0)
  return words.length
}

try {
  // const result = countWords('       What is     the day     today   ')
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}


function swapValue(a, b) {
  [a, b] = [b, a]
  return { a, b }

  // a=a+b
  // b=a-b
  // a=a-b
  // return {a, b}
}

try {
  // const result = swapValue(4, 5)
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}


function isArmstrong(number) {
  if (number < 0) {
    return false; // Negative numbers cannot be Armstrong numbers
  }

  let originalNumber = number; // Store the original number
  const digits = [];

  while (number > 0) {
    let lastDigit = number % 10; // Get the last digit
    number = Math.floor(number / 10); // Remove last digit
    digits.push(lastDigit);
  }

  let armstrongSum = 0;
  let numDigits = digits.length; // Number of digits in the number

  for (let i = 0; i < digits.length; i++) {
    armstrongSum += Math.pow(digits[i], numDigits); // Raise to the power of number of digits
  }

  return originalNumber === armstrongSum;
}

try {
  // const result = isArmstrong(153);
  // const result = isArmstrong(370);
  // const result = isArmstrong(789);
  // console.log('result:', result);
} catch (error) {
  console.log(error.name, error.message);
}


function fizzFuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      return 'Fizz Fuzz'
    } else if (i % 3 === 0) {
      return 'Fizz'
    } else if (i % 5 == 0) {
      return 'Fuzz'
    }
  }
}

try {
  // const result = fizzFuzz(3)
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}



function countChar(string) {
  const count = {}
  for (let i = 0; i < string.length; i++) {
    // if (!count[string[i]]) {
    //   count[string[i]] = 0
    // }
    // count[string[i]] += 1

    // if (count[string[i]] === undefined) {
    //   count[string[i]] = 0
    // }
    // count[string[i]] += 1

    count[string[i]] = (count[string[i]] || 0) + 1
  }
  return count
}

try {
  const result = countChar('hi how are you')
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}



function alphabeticOrder(string) {
  let isAlphabetic = true
  for (let i = 0; i < string.length; i++) {
    if (string[i] > string[i + 1]) {
      isAlphabetic = false
    }
  }
  return isAlphabetic
}

try {
  const result = alphabeticOrder('abcdefgh')
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}



function checkAnagram(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false
  }
  const stringCharA = {}
  for (const element of stringA) {
    stringCharA[element] = (stringCharA[element] || 0) + 1
  }

  const stringCharB = {}
  for (const element of stringB) {
    stringCharB[element] = (stringCharB[element] || 0) + 1
  }

  for (const key in stringCharA) {
    if (stringCharA[key] !== stringCharB[key]) {
      return false
    }
  }
  return true
}

try {
  const result = checkAnagram('abcd', 'abcd')
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}


function transpose(array) {
  const rows = array.length
  const cols = array[0].length
  const result = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!result[j]) {
        result[j] = []
      }
      result[j][i] = array[i][j]
    }
  }

  return result
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
try {
  // const result = transpose(array)
  // console.log('result', result)
} catch (error) {
  console.log(error.name, error.message)
}



function isStrongPassword(password) {
  password = password.trim(); // Remove leading/trailing spaces

  if (password.length < 8) {
    return false;
  }

  const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialChar = '~!@#$%^&*()_+{}[]';
  const number = '1234567890';

  let haveLowerCase = false;
  let haveUpperCase = false;
  let haveSpecialChar = false;
  let haveNumber = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (lowerChar.includes(char)) {
      haveLowerCase = true;
    } else if (upperChar.includes(char)) {
      haveUpperCase = true;
    } else if (specialChar.includes(char)) {
      haveSpecialChar = true;
    } else if (number.includes(char)) {
      haveNumber = true;
    }

    // If all conditions are met, we can stop early
    if (haveLowerCase && haveUpperCase && haveSpecialChar && haveNumber) {
      return true;
    }
  }

  return haveLowerCase && haveUpperCase && haveSpecialChar && haveNumber;
}

try {
  // console.log(isStrongPassword('Prat@pD91')); // true
  // console.log(isStrongPassword('weakpass')); // false
  // console.log(isStrongPassword('StrongPass1')); // false (no special char)
  // console.log(isStrongPassword('!Weak1')); // false (less than 8 chars)
} catch (error) {
  console.log(error.name, error.message);
}


function matrixMultiplication(array1, array2) {

  // Add validation to check if input are arrays
  const rowsInResult = array1.length;
  const columnsInResult = array2[0].length;

  const rownInSecondArray = array2.length;
  const result = [];

  for (let i = 0; i < rowsInResult; i++) {
    for (let j = 0; j < columnsInResult; j++) {
      let cellValue = 0;
      for (let n = 0; n < rownInSecondArray; n++) {
        cellValue += array1[i][n] * array2[n][j];
      }

      if (!result[i]) {
        result[i] = [];
      }
      result[i][j] = cellValue;

    }
  }
  return result;
}

const firstArray = [
  [1, 2],
  [3, 4]
];
const secondArray = [
  [5, 6],
  [7, 8]
];

// const firstArray = [ [1,2,3], [3,4,8]];
// const secondArray = [ [5,6], [7,8], [7,9]]

// console.log(matrixMultiplication(firstArray, secondArray));


function tipCalculator(amount, tip) {
  if (typeof amount !== 'number' || !Array.isArray(tip)) {
    throw new Error('Invalid input: amount must be a number and tip must be an array');
  }

  const result = [];
  for (let i = 0; i < tip.length; i++) {
    if (typeof tip[i] !== 'number') {
      throw new Error('Invalid tip percentage: all elements in tip array must be numbers');
    }
    const tipAmount = amount * (tip[i] / 100);
    result.push(tipAmount);
  }
  return result;
}

try {
  // const result = tipCalculator(100, [5, 10, 15]);
  // console.log('Tip:', result);
} catch (error) {
  console.log(error.name, error.message);
}


function checkIsPalindrome(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[input.length - 1 - i]) { // first and last index check
      return false
    }
  }
  return true
}


function findPalindromSubString(string) {
  const result = []
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      const substring = string.slice(i, j)
      if (checkIsPalindrome(substring) && substring.length > 1) {
        result.push(substring)
      }
    }
  }
  return result
}

// console.log(findPalindromSubString('radarmadam'))

function checkValidParentheses(s) {
  const stack = []
  const pairs = { ')': '(', '}': '{', ']': '[' }

  for (let char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]){
        return false
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}

// Test cases
// console.log(checkValidParentheses("(){}[]")); // true
// console.log(checkValidParentheses("(}}}"));   // false
// console.log(checkValidParentheses("{[()]}")); // true
// console.log(checkValidParentheses("({[)]}")); // false



function findAllOccurrence(string, findWord) {
  const result = [];
  let index = string.indexOf(findWord);

  while (index !== -1) {
    result.push(index);
    index = string.indexOf(findWord, index + 1); // Move forward to find next occurrence
  }
  
  return result;
}

const bigString = 'This is a big string with the word big repetition';
const wordFind = 'big';

// console.log(findAllOccurrence(bigString, wordFind)); // Output: [10, 35]



function generateRandomNumber(minNumber, maxNumber) {
  // return Math.floor(Math.random()*maxNumber+1)
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
const minNumber = 5
const maxNumber = 10
// console.log(generateRandomNumber(minNumber, maxNumber))


// get user data in js using prompt-synce
// const prompt = require('prompt-sync')()
// const userInput = prompt('Please enter here: ')
// console.log('User input: ', userInput)



function rollDice() {
  return Math.floor(Math.random()*6)+1
}
function rollMultipleDice(numberOfDise, sideInDise) {
  let counter = 0
}

// console.log(rollDice())
console.log(rollMultipleDice(1,6))