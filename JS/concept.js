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
    throw new RangeError('Number should be geter then 0')
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
      if (stack.pop() !== pairs[char]) {
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
  return Math.floor(Math.random() * 6) + 1
}
function rollMultipleDice(numberOfDise, sideInDise) {
  let counter = 0
}

// console.log(rollDice())
// console.log(rollMultipleDice(1,6))


/**
 * Input: 'aaabbc'
 * Output: 'a3b2c1'
 */
function compressString(string) {
  const map = {}
  for (let i = 0; i < string.length; i++) {
    map[string[i]] = (map[string[i]] || 0) + 1
  }
  let str = ''
  for (const [key, value] of Object.entries(map)) {
    str += key + value
  }
  return str
}
// console.log(compressString('aaabbc'))



// Async vs Web Workers Explained: Why Async Still Freezes
// heavy work (block main threads) - without worker it will freeze
async function heavyTask() {
  let x = 0
  for (let i = 0; i < 10000000000; i++) {
    x += i
  }
  return x
}

// console.log("Start");

// heavyTask().then(res => console.log("Result:", res));

// console.log("End");

// with worker it will not freeze main threads
// import worker thread tools
const { Worker, isMainThread, parentPort } = require('worker_threads');

function runWorker(params) {
  // If this is main file execution
  if (isMainThread) {

    console.log("Main thread running");

    // start worker using SAME file
    // __filename = current file path
    const worker = new Worker(__filename);

    // receive result from worker
    worker.on('message', (data) => {
      console.log("Result from worker:", data);
    });

  } else {

    // this part runs inside worker thread
    console.log("Worker thread running");

    // heavy CPU task
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
      sum += i;
    }

    // send result back to main thread
    // parentPort = communication channel to main thread
    parentPort.postMessage(sum);
  }
}

// runWorker()




// How JavaScript Event Loop Works

function execution() {
  const fs = require('fs');

  console.log("Start");

  // CPU work (runs immediately, blocks event loop)
  for (let i = 0; i < 1e6; i++) { } // math calculation

  // process.nextTick → highest priority
  process.nextTick(() => {
    console.log("process.nextTick");
  });

  // Promise → microtask
  Promise.resolve().then(() => {
    console.log("Promise.then");
  });

  // setTimeout → macrotask (timer phase)
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  // setInterval → macrotask repeated
  setInterval(() => {
    console.log("setInterval");
    process.exit(); // stop loop after first run
  }, 0);

  // setImmediate → check phase
  setImmediate(() => {
    console.log("setImmediate");
  });

  // File read → I/O phase
  fs.readFile(__filename, () => {
    console.log("File read (I/O)");

    setImmediate(() => console.log("setImmediate inside I/O"));
  });

  // API/DB call simulation → I/O
  setTimeout(() => {
    console.log("DB/API call finished");
  }, 10);

  // webhook simulation → async external trigger
  setTimeout(() => {
    console.log("Webhook received");
  }, 5);

  console.log("End");
}

// execution()

/**
 * Flow
 * 1️⃣ Call Stack (Synchronous code runs here)

        ↓ (if async function found)

2️⃣ Web APIs / libuv (Node background thread handles timers, I/O)

        ↓ (when done)

3️⃣ Queues (Callbacks wait here)

        ↓

4️⃣ Event Loop decides what to move back to Call Stack






Full Flow Diagram
                ┌─────────────────┐
                │   Call Stack    │
                │ (sync code)     │
                └────────┬────────┘
                         │
                         ▼
            If async → goes to Web APIs / libuv
                         │
                         ▼
                ┌─────────────────┐
                │  Web APIs /     │
                │  libuv thread   │
                └────────┬────────┘
                         │
                         ▼
                 When ready → goes to

        ┌──────────────────────────────────┐
        │              QUEUES              │
        └──────────────────────────────────┘

   🔴 process.nextTick Queue      (highest priority)
   🟡 Microtask Queue             (Promise.then)
   🔵 Timers Queue                (setTimeout/setInterval)
   🟢 Poll Queue                  (DB, API, file read, webhook)
   🟣 Check Queue                 (setImmediate)

                         │
                         ▼
                ┌─────────────────┐
                │   Event Loop    │
                └─────────────────┘
                         │
                         ▼
            Moves highest priority callback
                 back to Call Stack


  Sync → nextTick → Promise → Timers → I/O → setImmediate
 */


function findLongString(str) {
  let longStr = ''
  let len = longStr.length
  for (let index = 0; index < str.length; index++) {
    const length = str[index].length
    if (len < length) {
      len = length
      longStr = str[index]
    }
  }
  return longStr
}
const str = ['js', 'angular', 'react', 'node.js', 'javascript']
// console.log(findLongString(str))

function firstPeak(array) {
  for (let index = 1; index <= array.length; index++) {
    if (array[index] > array[index - 1] && array[index] > array[index + 1]) {
      return array[index]
    }
  }
  return -1
}
// console.log(firstPeak([1,5,2,4,1]))

function objToArr(obj) {
  const arr = []
  for (let [key, value] of Object.entries(obj)) {
    arr.push([key, value])
  }
  return arr
}
// console.log(objToArr({a:1, b:2, d:4, e:5}))


function reverseWord(words) {
  const reverse = words.split(' ')
  let reverseStr = ''
  for (let index = reverse.length - 1; index >= 0; index--) {
    if (reverseStr.length > 0) {
      reverseStr += ` ${reverse[index]}`
    } else {
      reverseStr += `${reverse[index]}`
    }
  }
  return reverseStr
}

// console.log(reverseWord('Hi hello world js'))

function capitalizeFirstletter(str) {
  let strCapital = ''
  for (let index = 0; index < str.length; index++) {
    if (index === 0 || str[index - 1] === ' ') {
      strCapital += str[index].toUpperCase()
    } else {
      strCapital += str[index]
    }
  }
  return strCapital
}

// console.log(capitalizeFirstletter('Hi hello world js'))

function arrayIsSorted(array) {
  if (array.length < 0) {
    return 0
  }
  for (let index = 1; index < array.length; index++) {
    if (array[index] < array[index - 1]) {
      return false
    }
  }
  return true
}
// console.log(arrayIsSorted([7,8,9,10]))


function findMissingNumber(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index + 1] - array[index] > 1) {
      return array[index] + 1
    }
  }
  return 0
}
// console.log(findMissingNumber([90,91,92,94]))

function findMissingNumbers(arr) {
  let set = new Set(arr)
  let result = []

  let min = Math.min(...arr)
  let max = Math.max(...arr)

  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      result.push(i)
    }
  }

  return result
}

// console.log(findMissingNumbers([90, 91, 92, 94]))


function firstNonRepeatingChar(string) {
  for (let index = 0; index < string.length; index++) {
    if (string.indexOf(string[index]) === string.lastIndexOf(string[index])) {
      return string[index]
    }
  }
  return -1
}

// console.log(firstNonRepeatingChar('aabbcddffe'))
// console.log('aabbcddffe'.lastIndexOf('b'))


const user = {
  name: 'Pratap Das',
  gender: 'M',
  city: 'Haldia',
  pin: 560068
}
// console.log(JSON.stringify(user))
// console.log(JSON.parse('{"name":"Pratap Das","city":"Haldia","pin":560068}'))

// const a = {}
// const b = { key: 'b' }
// const c = { key: 'c' }

// a[b] = 987 // here i insert b obj as key so we got error [object Object]':
// a[c] = 123
// console.log(a[b])
// console.log(a[c])
// console.log(a) // { '[object Object]': 123 }
// console.log({}.toString())

// let x = '2'
// let y = '1'
// let z = '3'
// console.log(x + y )
// console.log('21' - z)
// console.log(x + y - z)


// console.log(false == []) // false = 0, [] = "" = 0 so 0 == 0 => true
// console.log(false == ![]) // type coeriesion


const number = {
  x: 1,
  y: 2,
  sum() {
    return this.x + this.y
  }
}
// const result = number.sum
// console.log(result())

const crazy = ++[[]][+[]] + [+[]]
// console.log(crazy)




// const arr = [1,4]
// [arr[0], arr[1]] = [arr[1], arr[0]]
// console.log(arr)

// const arr = [1,4]
// myname = 'Mohit'
// [arr[0], arr[1]] = [arr[1], arr[0]]
// console.log(arr)

// const arr = [1,4]
// myname = 'Mohit'
// console.log(arr)
// [arr[0], arr[1]] = [arr[1], arr[0]]
// console.log(arr)

// const arr = [1,4]
// myname = 'Mohit'
// console.log(arr)
// ;[arr[0], arr[1]] = [arr[1], arr[0]]
// console.log(arr)


var abc = 'abc'
function xyz() {
  abc = 'xyz'
  return;
  function abc() { }
}
// console.log(abc)

// console.log()
// if (true) console.log("true is truthy");
// if (1) console.log("1 is truthy");
// if (-1) console.log("-1 is truthy");
// if ('hello') console.log("non-empty string is truthy");
// if ([]) console.log("empty array is truthy");
// if ({}) console.log("empty object is truthy");




// sap

// console.log("A");
// setTimeout(()=>console.log("B"),0);
// Promise.resolve().then(()=>console.log("C"));
// process.nextTick(()=>console.log("D"));
// console.log("E");

async function run(tasks, limit) {
  let i = 0;
  while (i < tasks.length) {
    const batch = tasks.slice(i, i + limit);
    await Promise.all(batch);
  }
}

function flatten(arr) {
  let res = [];
  for (let i in arr) {
    if (typeof arr[i] === "array") {
      res.concat(flatten(arr[i]));
    } else {
      res.push(i);
    }
  }
  return res;
}

[1, 2, [3, 4, [5, 6]]]

function counter() {
  let count = 0;
  return {
    inc() { count++; },
    value: count
  };
}
const c = counter();
c.inc();
// console.log(c.value);


/**
 * what class vs function base javascript with usecase
 * design pattern
 * clouser
 * why javascript why not java or go
 * create a type function only accept number other wise return type error typescript
 */


// Pure vs Impure Function

// this function not depens on outer any property (its paditable)
function pureFn(x, y) {
  return (x * y)
}
// console.log(pureFn(9,10))


// this function depens on outer any property here like n  (its not paditable)
let n = 10
function impureFn(x) {
  return (x * n)
}
// console.log(impureFn(7))



const arrA = [1, 2, 3]
const arrB = [1, 2, 3]

function checkTwoArray(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false
    }
  }
  return true
}

// console.log(checkTwoArray(arrA, arrB))

function longestSameFirstPrefix(str) {
  if (str.length <= 0) {
    return 0
  }
  let char = str[0]
  let count = 0
  for (let index = 0; index < str.length; index++) {
    if (str[index] === char) {
      count++
    } else {
      break
    }
  }
  return count
}
// console.log(longestSameFirstPrefix('aaaabbccccccdddddddd'))
function longestSamePrefix(str) {
  if (str.length <= 0) {
    return 0
  }
  let max = 1
  let count = 1
  for (let index = 0; index < str.length; index++) {
    if (str[index] === str[index - 1]) {
      count++
      max = Math.max(count, max)
    } else {
      count = 1
    }
  }
  return count
}
// console.log(longestSamePrefix('aaaabbccccccdddddddd'))


// Object spread with null
let o = { ...null }
// console.log(o)
// {} 
// Object spread ignores null and undefined.
// It does NOT throw an error.
// They are treated as empty sources.

// Spreading undefined into object
o = { ...o, ...undefined }
// console.log(o)
// {}
// Again, undefined is ignored in object spread.
// No error is thrown.

// Array spread with null
// let op = [...null]
// ❌ TypeError: null is not iterable
// Array spread works only with iterable values
// (like arrays, strings, sets, maps).
// null and undefined are NOT iterable,
// so this throws an error.




/**
 * for (var i = 0; i < 3; i++) {

  setTimeout(() => {

    console.log(i);

  }, 100);

}
 
Problem:

Find the second largest number in an array.
Input
[10, 5, 8, 20]
Output
10
 
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 
Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */


/**
 * 🔥 𝗠𝗶𝗰𝗿𝗼𝘁𝗮𝘀𝗸 𝘃𝘀 𝗠𝗮𝗰𝗿𝗼𝘁𝗮𝘀𝗸 — The Real Event Loop Explained

If you understand this, you understand JavaScript execution order.

🧠 𝗧𝗵𝗲 𝗕𝗶𝗴 𝗣𝗶𝗰𝘁𝘂𝗿𝗲

𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗵𝗮𝘀:
1️⃣ Call Stack
2️⃣ Web APIs
3️⃣ Task Queues
4️⃣ Event Loop

𝗧𝗵𝗲𝗿𝗲 𝗮𝗿𝗲 𝘁𝘄𝗼 𝗺𝗮𝗶𝗻 𝗾𝘂𝗲𝘂𝗲𝘀:
🟡 Macrotask Queue
🔵 Microtask Queue

🟡 𝗠𝗮𝗰𝗿𝗼𝘁𝗮𝘀𝗸𝘀 (𝗧𝗮𝘀𝗸 𝗤𝘂𝗲𝘂𝗲)
Examples:
 • setTimeout
 • setInterval
 • setImmediate (Node)
 • DOM events
 • I/O

setTimeout(() => console.log("Macrotask"), 0);

Even with 0, it goes to macrotask queue.

🔵 𝗠𝗶𝗰𝗿𝗼𝘁𝗮𝘀𝗸𝘀 (𝗛𝗶𝗴𝗵𝗲𝗿 𝗣𝗿𝗶𝗼𝗿𝗶𝘁𝘆)

Examples:
 • Promise.then
 • Promise.catch
 • Promise.finally
 • queueMicrotask
 • MutationObserver

Promise.resolve().then(() => console.log("Microtask"));

𝗠𝗶𝗰𝗿𝗼𝘁𝗮𝘀𝗸𝘀 𝗿𝘂𝗻 𝗯𝗲𝗳𝗼𝗿𝗲 𝗺𝗮𝗰𝗿𝗼𝘁𝗮𝘀𝗸𝘀.

⚡ Execution Order Rule (CRITICAL)

After each macrotask:
👉 Run ALL microtasks
👉 Then take next macrotask

𝗠𝗶𝗰𝗿𝗼𝘁𝗮𝘀𝗸𝘀 𝗮𝗹𝘄𝗮𝘆𝘀 𝗱𝗿𝗮𝗶𝗻 𝗳𝘂𝗹𝗹𝘆.

🔥 Example (Classic Interview Question)

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

Output:
Start
End
Promise
Timeout

𝗪𝗵𝘆?
 • Synchronous runs first
 • Microtasks run next
 • Then macrotasks

💣 𝚃̲𝚛̲𝚒̲𝚌̲𝚔̲ ̲𝚀̲𝚞̲𝚎̲𝚜̲𝚝̲𝚒̲𝚘̲𝚗̲

setTimeout(() => console.log("1"), 0);
Promise.resolve().then(() => {
 console.log("2");
 Promise.resolve().then(() => console.log("3"));
});
console.log("4");

Output:
4
2
3
1

Because:
All microtasks must finish before next macrotask Even newly added microtasks

🧠 𝗩𝗶𝘀𝘂𝗮𝗹 𝗙𝗹𝗼𝘄
Call Stack
 ↓
Macrotask executes
 ↓
Run ALL Microtasks
 ↓
Next Macrotask


🚨 𝗜𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗧𝗿𝗮𝗽𝘀

❌ “setTimeout(0) runs immediately”
✔ It waits for current stack + microtasks

❌ “Promises run in parallel”
✔ They resolve asynchronously via microtask queue

❌ “Only one microtask runs per loop”
✔ ALL microtasks drain before next macrotask

💡 𝗦𝗲𝗻𝗶𝗼𝗿-𝗟𝗲𝘃𝗲𝗹 𝗜𝗻𝘀𝗶𝗴𝗵𝘁
𝗧𝗼𝗼 𝗺𝗮𝗻𝘆 𝗺𝗶𝗰𝗿𝗼𝘁𝗮𝘀𝗸𝘀 𝗰𝗮𝗻:
 • Block rendering
 • Cause UI jank
 • Delay macrotasks

𝗧𝗵𝗶𝘀 𝗺𝗮𝘁𝘁𝗲𝗿𝘀 𝗶𝗻:
 • React batching
 • Large Promise chains
 • Async-heavy apps

🎯 I𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗢𝗻𝗲-𝗟𝗶𝗻𝗲𝗿

Microtasks (Promises) have higher priority than macrotasks (setTimeout). After each macrotask, the event loop drains all microtasks before moving on.
 */



// let a = //??
let a = {
  value: 1,
  valueOf() {
    console.log('Called')
    return this.value++
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('Yes')
}




let aa = Number()
let b = Number(undefined)

// console.log({aa, b})




var test = 1
function test() {
  console.log('test run')
}
// var test = 1
// test() // test is not a function


let aaa = 'this is key'
const obj = {
  ['aaa']: 'this is value',
  [aaa]: 'this is also value'
}

// console.log(obj.aaa)
// console.log(obj['this is key'])



// function testing(a,b,c,d) {}
// console.log(testing.length)

function testing(a, b, c, d, ...rest) { }

console.log(testing.length)

// function testing(a,b,c=5,d, ...rest) {}
// console.log(testing.length)



const object = {
  name: 'Pratap',
  pin: 560068,
  isSecured: false
}

const proxy = new Proxy(object, {
  get(target, prop) {
    if (target.isSecured && prop !== 'isSecured') {
      throw new Error(`Access denied for property "${prop}"`)
    }

    console.log('GET:', prop)
    return target[prop]   // ✅ fix: return actual value
  },

  set(target, prop, value) {
    if (target.isSecured) {
      // Only allow updating pin
      if (prop !== 'pin') {
        throw new Error(`Cannot modify "${prop}" when secured`)
      }

      // Validate pin range
      if (value < 0 || value > 999999) {
        throw new Error('PIN must be between 0 and 999999')
      }
    }

    console.log('SET:', prop, value)
    target[prop] = value
    return true   // ✅ must return boolean
  }
})


// ✅ Normal access
// console.log(proxy.name)   // works

// Enable security
// proxy.isSecured = true

// ❌ Try reading
// console.log(proxy.name) → Error

// ❌ Try updating name
// proxy.name = 'New' → Error

// ❌ Invalid pin
// proxy.pin = -10 → Error

// ❌ Invalid pin
// proxy.pin = 1000000 → Error

// ✅ Valid pin update
// proxy.pin = 123456

// console.log(object)





const arr = [1, 2, 3, 3, 4, 3, 3, 1, 1, 2]
// sort in assending order of fequency, output: [4,2,1,3]

function assendingFreq(arr) {
  const map = {}
  for (let index = 0; index < arr.length; index++) {
    map[arr[index]] = (map[arr[index]] || 0) + 1
  }
  const entries = Object.entries(map)
  const sorted = entries.sort((a, b) => { a[1] - b[1] })
  const result = sorted.map((ele) => {
    return ele[1]
  })
  return result
}
// console.log(assendingFreq(arr))



// Detect the bug in this code?

function sum(n) {
  if (n <= 0) {
    return 0
  }
  return n + sum(n--)
}

// console.log(sum(10))

// What’s going wrong?
// n-- is post-decrement
// It returns the current value of n, then decreases it after
// So sum(n--) keeps receiving the same value repeatedly
// This leads to infinite recursion → stack overflow



// swap value
let xx = 4
let yy = 5
console.log(`xx: ${xx}, yy: ${yy}`)
xx = (xx+yy) - (yy=xx)
console.log(`xx: ${xx}, yy: ${yy}`)

/**
 * How execution take place in (async vs defer)
 * 
 */

/**
 * when any code run that code goto on ram and have limit size like 4gb and that code/program in running state called process
 * ram will allocate some space to excute this program
 * in this store means we can store variable value, like 
 * 
 * how can we store values inside a program?
 * to store we can use variable
 * when your program is running state system assigened some memory from ram exaple 400mb
 * this 400md storage create a bucket, bucket have name, and we store values
 * 
 * one line js code means one instrruction, like: let a = 10
 */