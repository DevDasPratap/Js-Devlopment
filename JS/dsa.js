// DataType => Premitive(Store only single value), Non premitive(Store multiple values)
// Premitive => Number, String, Boolean, null, undefine, BigInt, Symbol
// Non Premitive => Object, Array

// Non premitive (Lists data type)=> Linear, non linear
// Linear => opration only work start and end postion (Stack, Queue)
// Non linear => opration can do anywhere (Graphs, Tree)

// Operation => Traverse, Insert, Delete, Search, Sort, Merge
// Array, Stack, Queue, Tree, Graph, Recursion, Search, Sort, Merge, Map, Set

//  --------  Array  ---------
const arr = [10, 7, 8, 9, 90, 91, 16, 22];

// Traverse
for (let i = 0; i < arr.length; i++) {
  // console.log(`Array of ${arr[i]} index ${i}`)
}

// search
// const getValue = 90;
// let found = false
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === getValue) {
//         console.log(`Get array of ${arr[i]} index ${i}`)
//         found = true
//         break
//     }
// }
// if(!found){
//     console.log(`Search data not found`)
// }

// or other way search - Linear search
// function linearSearch(find) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==find) {
//             console.log(`${arr[i]} value find index ${i}`)
//         }
//     }
// }
// linearSearch(90)

// or other way search - Binary search
// function binarySearch(find) {
//     arr.sort((a,b)=>{
//         return a-b
//     })
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === find) {
//             console.log(`${arr[i]} value find index ${i}`)
//         }
//     }
// }
// binarySearch(90)

// Insert
// console.log(arr)
// // arr.splice(4, 0, 111)
// // or
// function insert(postion, value) {
//     for (let i = arr.length-1; i>=0; i--) {
//         if (i >= postion) {
//             arr[i+1] = arr[i]
//             if (i== postion) {
//                 arr[i] = value
//             }
//         }
//     }
// }
// insert(1, 90000)
// console.log(arr)

// delete
// console.log(arr)
// // arr.splice(3, 2)
// function del(postion, value) {
//     for (let i = 0; i < arr.length-1; i++) {
//         arr[i] = arr[i+1]
//     }
//     arr.length=arr.length-1
// }
// del(0)
// console.log(arr)

// Merge two array

const arr1 = [10, 3, 5, 4, 9];
const arr2 = [7, 8, 90, 16, 91];
arr1.push(...arr2);
// const arr3 = arr1.concat(arr2)
// const arr3 = [...arr1, ...arr2]

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// Sort
// const sortArr = [10, 7, 8, 9, 90, 91, 16, 22, 90];
// for (let i = 0; i < sortArr.length; i++) {
// //   console.log(sortArr);
//   for (let j = 0; j < sortArr.length; j++) {
//     if (sortArr[j] > sortArr[j + 1]) {
//       let temp = sortArr[j];
//       sortArr[j] = sortArr[j + 1];
//       sortArr[j + 1] = temp;
//     }
//   }
// }
// console.log('Sorted: ', sortArr);


// Recursion - call itself
// function recursion(a) {
//     console.log('inside recursion', a)
//     if (a<10) {
//         recursion(a+1)
//     }
// }
// let data = 1
// recursion(data)

// Topics: Basic Programming (Mathematical Computations)
// Determining Even/Odd Numbers
function addEven(number) {
  if (number % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}
// console.log(addEven(10))

const number = 0
// console.log(number % 2 == 0 ? 'Even' : 'Odd')

// Checking for Prime Numbers
function primeNumber(number) {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}
// console.log(primeNumber(4))

// Validating Leap Years
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 'Leap year'
  } else {
    return 'Not a leap year'
  }
}
// console.log(checkLeapYear(2022))

// Calculating Armstrong Numbers
function isArmstrongNumber(number) {
  let temp = number;
  let digitsCount = 0;

  // Count the number of digits
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    digitsCount++;
  }

  let sum = 0;
  temp = number;

  // Calculate the sum of the digits raised to the power of digitsCount
  while (temp > 0) {
    const digit = temp % 10; // Get the last digit
    sum += Math.pow(digit, digitsCount); // Raise it to the power of digitsCount and add to sum
    temp = Math.floor(temp / 10); // Remove the last digit
  }

  return sum === number ? "Armstrong Number" : "Not an Armstrong Number";
}

// Example usage:
// console.log(isArmstrongNumber(153)); // Output: Armstrong Number
// console.log(isArmstrongNumber(9474)); // Output: Armstrong Number
// console.log(isArmstrongNumber(123)); // Output: Not an Armstrong Number
// console.log(isArmstrongNumber(9475)); // Output: Not an Armstrong Number

// Generating the Fibonacci Series
function generateFibonacciSeries(number) {
  if (number < 0) {
    return []
  }
  const series = []
  let a = 0, b = 1
  while (a <= number) {
    series.push(a)
    let next = a + b
    a = b
    b = next
  }
  return series
}

// console.log(generateFibonacciSeries(10))

// Identifying Palindromes
function isPalindromeNumber(number) {
  if (number < 0) {
    return "Not a Palindrome"
  }

  let reverse = 0
  while (number > 0) {
    let digit = reverse % 10
    reverse = reverse * 10 + digit
    number = Math.floor(number / 10)
  }
  return number === reverse ? "Palindrome" : "Not a Palindrome"
}

// Example usage:
// console.log(isPalindromeNumber(121)); // Output: Palindrome
// console.log(isPalindromeNumber(-121)); // Output: Not a Palindrome
// console.log(isPalindromeNumber(123)); // Output: Not a Palindrome

// Summing Digits of a Number
function sumDigitNumber(number) {
  let sum = 0;

  while (number > 0) {
    const digit = number % 10; // Extract the last digit
    sum += digit; // Add it to the sum
    number = Math.floor(number / 10); // Remove the last digit
  }

  return sum;
}
// Example usage:
// console.log(sumDigitNumber(1234)); // Output: 10
// console.log(sumDigitNumber(9876)); // Output: 30
// console.log(sumDigitNumber(5));    // Output: 5

// Finding the Greatest Common Divisor (GCD)
function gcd(numA, numB) {
  let commonDivisor = 1; // Start with the smallest possible divisor
  for (let i = 1; i <= Math.min(numA, numB); i++) {
    if (numA % i === 0 && numB % i === 0) {
      commonDivisor = i; // Update with the current common divisor
    }
  }
  return commonDivisor;
}

// console.log(gcd(4, 5)); // Output: 1
// console.log(gcd(10, 18)); // Output: 6
// console.log(gcd(1000, 80)); // Output: 20

// Optimized Recursive Approach:
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// Example usage:
// console.log(gcd(48, 18)); // Output: 6
// console.log(gcd(56, 98)); // Output: 14
// console.log(gcd(101, 103)); // Output: 1

// Finding the Least Common Multiple (LCM)
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return (Math.abs(a * b)) / gcd(a, b);
}
// Example usage:
// console.log(lcm(12, 15)); // Output: 60
// console.log(lcm(7, 5));   // Output: 35
// console.log(lcm(21, 6));  // Output: 42

// Optimized Combined Version
function gcdAndLcm(a, b) {
  let gcd = (x, y) => {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  };

  const gcdValue = gcd(a, b);
  const lcmValue = (Math.abs(a * b)) / gcdValue;
  return { gcd: gcdValue, lcm: lcmValue };
}

// Example usage:
// const result = gcdAndLcm(10, 80);
// console.log(`GCD: ${result.gcd}, LCM: ${result.lcm}`); // Output: GCD: 10, LCM: 80

// Counting Vowels and Consonants in a String
function countVowelsAndConsonants(str) {
  let vowelsCount = 0, consonantsCount = 0;

  // Loop through each character of the string
  for (let char of str) {
    const lowerChar = char.toLowerCase(); // Normalize case
    if ("aeiou".includes(lowerChar)) {
      vowelsCount++; // Count vowels
    } else if (lowerChar >= 'a' && lowerChar <= 'z') {
      consonantsCount++; // Count consonants
    }
  }

  return { vowels: vowelsCount, consonants: consonantsCount };
}

// Example Usage:
const result = countVowelsAndConsonants("Hello JS!");
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);
// Output: Vowels: 3, Consonants: 5
