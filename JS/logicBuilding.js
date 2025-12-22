// Phase 1 – Conditional Thinking (If–Else, Boolean Logic) 
// Level 1: Simple Conditions (Getting started)
// 1. Positive, negative, or zero
function checkNumber(num) {
    if (num > 0) console.log("Positive");
    else if (num < 0) console.log("Negative");
    else console.log("Zero");
}

// 2. Even or odd
function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}

// 3. Divisible by 5
function checkDivisibleBy5(num) {
    console.log(num % 5 === 0 ? "Divisible by 5" : "Not divisible by 5");
}

// 4. Divisible by both 3 and 5
function checkDivisibleBy3And5(num) {
    console.log(num % 3 === 0 && num % 5 === 0 ? "Divisible by both" : "Not divisible by both");
}

// 5. Leap year
function isLeapYear(year) {
    console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap year" : "Not a leap year");
}

// 6. Larger of two numbers
function findLarger(a, b) {
    console.log(a > b ? a : b);
}

// 7. Largest of three numbers
function findLargest(a, b, c) {
    console.log(Math.max(a, b, c));
}

// 8. Temperature range
function checkTemperature(temp) {
    if (temp < 15) console.log("Cold");
    else if (temp <= 25) console.log("Warm");
    else console.log("Hot");
}

// 9. Vowel or consonant
function checkVowelConsonant(char) {
    const vowels = "aeiouAEIOU";
    console.log(vowels.includes(char) ? "Vowel" : "Consonant");
}
// 10. Check character type
function checkCharacterType(char) {
    if (/[A-Z]/.test(char)) console.log("Uppercase");
    else if (/[a-z]/.test(char)) console.log("Lowercase");
    else if (/[0-9]/.test(char)) console.log("Digit");
    else console.log("Special character");
}

//Level 2: Nested If & Multiple Conditions 
// 1. Check if three sides form a valid triangle
function checkTriangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        if (a === b && b === c) console.log("Equilateral");
        else if (a === b || b === c || a === c) console.log("Isosceles");
        else console.log("Scalene");
    } else {
        console.log("Not a valid triangle");
    }
}

// 2. (Covered above)

// 3. Marks to grade
function getGrade(marks) {
    if (marks >= 90) console.log("A");
    else if (marks >= 80) console.log("B");
    else if (marks >= 70) console.log("C");
    else if (marks >= 60) console.log("D");
    else console.log("F");
}

// 4. Check if one number is multiple of another
function checkMultiple(a, b) {
    if (a % b === 0 || b % a === 0) console.log("Yes");
    else console.log("No");
}

// 5. Greeting by hour
function getGreeting(hour) {
    if (hour >= 5 && hour < 12) console.log("Good Morning");
    else if (hour >= 12 && hour < 17) console.log("Good Afternoon");
    else if (hour >= 17 && hour < 21) console.log("Good Evening");
    else console.log("Good Night");
}

// 6. Check voting eligibility
function checkVotingEligibility(age) {
    console.log(age >= 18 ? "Eligible" : "Not eligible");
}

// 7. Check if numbers are even/odd
function checkEvenOdd(a, b) {
    if (a % 2 === 0 && b % 2 === 0) console.log("Both even");
    else if (a % 2 !== 0 && b % 2 !== 0) console.log("Both odd");
    else console.log("One even, one odd");
}

// 8. Check alphabet range
function checkAlphabetRange(char) {
    if (char >= 'a' && char <= 'm') console.log("a-m");
    else if (char >= 'n' && char <= 'z') console.log("n-z");
    else console.log("Invalid");
}

// 9. Day number to day name
function getDayName(day) {
    const days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    console.log(days[day] || "Invalid");
}

// 10. Month to days
function getDaysInMonth(month) {
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    console.log(days[month] || "Invalid");
}

//Level 3: Math and Number Logic 
// 1. Check if all digits are distinct in a 3-digit number
function checkDistinctDigits(num) {
    const digits = String(num).split('');
    console.log(digits[0] !== digits[1] && digits[1] !== digits[2] && digits[0] !== digits[2] ? "Distinct" : "Not distinct");
}

// 2. Check if middle digit is largest, smallest, or neither
function checkMiddleDigit(num) {
    const digits = String(num).split('').map(Number);
    if (digits[1] > digits[0] && digits[1] > digits[2]) console.log("Largest");
    else if (digits[1] < digits[0] && digits[1] < digits[2]) console.log("Smallest");
    else console.log("Neither");
}

// 3. Check if first and last digits are equal in 4-digit number
function checkFirstLastDigits(num) {
    const str = String(num);
    console.log(str[0] === str[3] ? "Equal" : "Not equal");
}

// 4. Check if single-digit, double-digit, or multi-digit
function checkDigitCount(num) {
    num = Math.abs(num);
    if (num < 10) console.log("Single-digit");
    else if (num < 100) console.log("Double-digit");
    else console.log("Multi-digit");
}

// 5. Check if multiple of 7 or ends with 7
function checkMultipleOrEndsWithSeven(num) {
    console.log(num % 7 === 0 || num % 10 === 7 ? "Yes" : "No");
}

// 6. Determine quadrant for coordinates (x, y)
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) console.log("Quadrant I");
    else if (x < 0 && y > 0) console.log("Quadrant II");
    else if (x < 0 && y < 0) console.log("Quadrant III");
    else if (x > 0 && y < 0) console.log("Quadrant IV");
    else console.log("On axis");
}

// 7. Check if amount can be evenly divided into 2000, 500, 100 notes
function checkCurrencyDivision(amount) {
    console.log(amount % 2000 === 0 || amount % 500 === 0 || amount % 100 === 0 ? "Yes" : "No");
}

// 8. Check if number is in range [100, 999]
function checkRange(num) {
    console.log(num >= 100 && num <= 999 ? "In range" : "Out of range");
}

// 9. Compute third angle of triangle
function getThirdAngle(angle1, angle2) {
    const angle3 = 180 - angle1 - angle2;
    console.log(angle3 > 0 ? angle3 : "Invalid triangle");
}

// 10. Check if number is a perfect square
function isPerfectSquare(num) {
    const sqrt = Math.floor(Math.sqrt(num));
    console.log(sqrt * sqrt === num ? "Perfect square" : "Not a perfect square");
}

// Level 4: Logical Operators & Compound Statements 
// 1. Check if character is letter, digit, or neither
function checkCharacterType(char) {
    if (/[a-zA-Z]/.test(char)) console.log("Letter");
    else if (/[0-9]/.test(char)) console.log("Digit");
    else console.log("Neither");
}

// 2. FizzBuzz
function fizzBuzz(num) {
    if (num % 15 === 0) console.log("FizzBuzz");
    else if (num % 3 === 0) console.log("Fizz");
    else if (num % 5 === 0) console.log("Buzz");
    else console.log(num);
}

// 3. Find median of three numbers
function findMedian(a, b, c) {
    const sorted = [a, b, c].sort((x, y) => x - y);
    console.log(sorted[1]);
}

// 4. Check AM or PM
function checkAmPm(hours, minutes) {
    console.log(hours < 12 ? "AM" : "PM");
}

// 5. Check tax eligibility
function checkTaxEligibility(income, age) {
    console.log(age > 18 && income > 500000 ? "Eligible" : "Not eligible");
}

// 6. Check if both positive and sum < 100
function checkPositiveSum(num1, num2) {
    console.log(num1 > 0 && num2 > 0 && num1 + num2 < 100 ? "Yes" : "No");
}

// 7. Convert digit to word
function digitToWord(digit) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    console.log(words[digit] || "Invalid");
}

// 8. Check weekday or weekend
function checkDay(dayNum) {
    console.log(dayNum >= 1 && dayNum <= 5 ? "Weekday" : dayNum >= 6 && dayNum <= 7 ? "Weekend" : "Invalid");
}

// 9. Calculate electricity bill
function calculateBill(units) {
    let bill = 0;
    if (units <= 100) bill = units * 5;
    else if (units <= 200) bill = 100 * 5 + (units - 100) * 8;
    else bill = 100 * 5 + 100 * 8 + (units - 200) * 10;
    console.log(bill);
}

// 10. Validate password
function validatePassword(password) {
    console.log(password.length >= 8 && /[0-9]/.test(password) ? "Valid" : "Invalid");
}

//Level 5: Creative / Tricky Logical Scenarios 
// 1. Check if point lies on X-axis, Y-axis, or origin
function checkAxis(x, y) {
    if (x === 0 && y === 0) return "Origin";
    if (x === 0) return "Y-axis";
    if (y === 0) return "X-axis";
    return "Neither";
}

// 2. Check if three numbers form a Pythagorean triplet
function isPythagoreanTriplet(a, b, c) {
    const sorted = [a, b, c].sort((x, y) => x - y);
    return sorted[0]**2 + sorted[1]**2 === sorted[2]**2;
}

// 3. Check if day and month form a valid calendar date
function isValidDate(day, month) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1];
}

// 4. Find smaller angle between hour and minute hands
function clockAngle(hours, minutes) {
    const minAngle = minutes * 6;
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    let angle = Math.abs(hourAngle - minAngle);
    return Math.min(angle, 360 - angle);
}

// 5. Check if three numbers are in arithmetic progression
function isAP(a, b, c) {
    return b - a === c - b;
}

// 6. Check if three numbers are in geometric progression
function isGP(a, b, c) {
    return b * b === a * c;
}

// 7. Check if sum of first and last digit equals middle digit
function checkDigits(num) {
    const str = String(num).padStart(3, '0');
    return parseInt(str[0]) + parseInt(str[2]) === parseInt(str[1]);
}

// 8. Check if sum of digits > product of digits
function sumGreaterThanProduct(num) {
    const digits = String(num).split('').map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    const product = digits.reduce((a, b) => a * b, 1);
    return sum > product;
}

// 9. Determine which date comes first in calendar
function whichDateFirst(day1, month1, day2, month2) {
    if (month1 !== month2) return month1 < month2 ? "Date 1" : "Date 2";
    return day1 < day2 ? "Date 1" : "Date 2";
}

// 10. Print corresponding century for a year
function getCentury(year) {
    const century = Math.ceil(year / 100);
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const suffix = (century % 100 > 20) ? suffixes[century % 10] : suffixes[0];
    return `${century}${suffix} century`;
}

// PHASE 2 — LOOPING & PATTERNS (ITERATION & FLOW) 
// Level 1: Basic Looping (Introductory) 


// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print all even numbers between 1 and 100
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// 3. Print all odd numbers between 1 and 100
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// 4. Print numbers from 10 down to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 5. Print the table of a given number (n × 1 to n × 10)
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} × ${i} = ${n * i}`);
    }
}

// 6. Print the sum of first n natural numbers
function sumNatural(n) {
    return (n * (n + 1)) / 2;
}

// 7. Print the sum of all even numbers up to n
function sumEven(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

// 8. Print the sum of all odd numbers up to n
function sumOdd(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

// 9. Print the factorial of a given number
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

// 10. Print the product of digits of a given number
function productOfDigits(n) {
    return String(n)
        .split('')
        .reduce((acc, digit) => acc * digit, 1);
}

// Level 2: Number-based Looping Logic 
// 1. Count the number of digits
function countDigits(num) {
    return Math.abs(num).toString().length;
}

// 2. Print the reverse of a number
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// 3. Check if a number is a palindrome
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

// 4. Find the sum of digits
function sumOfDigits(num) {
    return Math.abs(num).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// 5. Check if a number is an Armstrong number
function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

// 6. Check if a number is a perfect number
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

// 7. Print all prime numbers between 1 and 100
function primesUpTo100() {
    const primes = [];
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

// 8. Check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 9. Print Fibonacci series up to n terms
function fibonacciSeries(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

// 10. Print sum of first n terms of Fibonacci series
function fibonacciSum(n) {
    return fibonacciSeries(n).reduce((sum, num) => sum + num, 0);
}

//Level 3: Mathematical & Logical Patterns 

// 1. Print squares of numbers from 1 to n
function printSquares(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i * i);
    }
}

// 2. Print cubes of numbers from 1 to n
function printCubes(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i * i * i);
    }
}

// 3. Print numbers between a and b divisible by 7
function printDivisibleBy7(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 7 === 0) console.log(i);
    }
}

// 4. Find HCF (GCD) of two numbers
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 5. Find LCM of two numbers
function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}

// 6. Print all factors of a number
function printFactors(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) console.log(i);
    }
}

// 7. Sum of all factors
function sumOfFactors(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum;
}

// 8. Check if strong number
function isStrongNumber(n) {
    const factorial = (x) => x <= 1 ? 1 : x * factorial(x - 1);
    let sum = 0;
    for (let digit of String(n)) {
        sum += factorial(Number(digit));
    }
    return sum === n;
}

// 9. Print arithmetic progression
function printAP(a, d, n) {
    for (let i = 0; i < n; i++) {
        console.log(a + i * d);
    }
}

// 10. Print geometric progression
function printGP(a, r, n) {
    for (let i = 0; i < n; i++) {
        console.log(a * Math.pow(r, i));
    }
}

// Level 4: Pattern Printing (Stars & Numbers)


//Level 5: Logical Loop Combinations 

// 1. Print all numbers whose sum of digits is even (1–100)
function sumOfDigitsEven() {
    for (let i = 1; i <= 100; i++) {
        let sum = String(i).split('').reduce((a, b) => a + Number(b), 0);
        if (sum % 2 === 0) console.log(i);
    }
}

// 2. Count numbers between 1–500 divisible by 7 but not by 5
function divisibleBy7Not5() {
    let count = 0;
    for (let i = 1; i <= 500; i++) {
        if (i % 7 === 0 && i % 5 !== 0) count++;
    }
    console.log(count);
}

// 3. Print all palindromes between 1–500
function palindromes() {
    for (let i = 1; i <= 500; i++) {
        let str = String(i);
        if (str === str.split('').reverse().join('')) console.log(i);
    }
}

// 4. Print numbers (1–100) whose digits sum to multiple of 3
function sumMultipleOf3() {
    for (let i = 1; i <= 100; i++) {
        let sum = String(i).split('').reduce((a, b) => a + Number(b), 0);
        if (sum % 3 === 0) console.log(i);
    }
}

// 5. Find smallest and largest digit in a number
function smallestLargestDigit(num) {
    let digits = String(num).split('').map(Number);
    console.log('Smallest:', Math.min(...digits), 'Largest:', Math.max(...digits));
}

// 6. Print numbers (1–n) with even number of 1s in binary
function evenOnesInBinary(n) {
    for (let i = 1; i <= n; i++) {
        let ones = i.toString(2).split('1').length - 1;
        if (ones % 2 === 0) console.log(i);
    }
}

// 7. Print pattern where row i prints i*i
function patternISquared(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i * i);
    }
}

// 8. Print factorial of each number from 1 to n
function factorials(n) {
    for (let i = 1; i <= n; i++) {
        let fact = 1;
        for (let j = 2; j <= i; j++) fact *= j;
        console.log(`${i}! = ${fact}`);
    }
}

// 9. Sum of odd and even digits separately
function sumOddEvenDigits(num) {
    let oddSum = 0, evenSum = 0;
    String(num).split('').forEach(digit => {
        digit % 2 === 0 ? evenSum += Number(digit) : oddSum += Number(digit);
    });
    console.log('Odd sum:', oddSum, 'Even sum:', evenSum);
}

// 10. Take 5 numbers, skip 0, print sum of non-zero
function sumNonZero() {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        let num = Number(prompt('Enter a number:'));
        if (num === 0) continue;
        sum += num;
    }
    console.log('Sum:', sum);
}


//Level 1: Foundation of Recursion (Base + Recursive Case) 
// 1. Print numbers from 1 to n using recursion
function print1ToN(n) {
    if (n === 0) return;
    print1ToN(n - 1);
    console.log(n);
}

// 2. Print numbers from n down to 1 using recursion
function printNTo1(n) {
    if (n === 0) return;
    console.log(n);
    printNTo1(n - 1);
}

// 3. Print only even numbers from 1 to n recursively
function printEven(n) {
    if (n === 0) return;
    printEven(n - 1);
    if (n % 2 === 0) console.log(n);
}

// 4. Print only odd numbers from 1 to n recursively
function printOdd(n) {
    if (n === 0) return;
    printOdd(n - 1);
    if (n % 2 !== 0) console.log(n);
}

// 5. Print sum of first n natural numbers recursively
function sumNaturalNumbers(n) {
    if (n === 0) return 0;
    return n + sumNaturalNumbers(n - 1);
}

// 6. Print factorial of a number recursively
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 7. Calculate power of a number (x^n) using recursion
function power(x, n) {
    if (n === 0) return 1;
    return x * power(x, n - 1);
}

// 8. Find nth Fibonacci number recursively
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 9. Print Fibonacci series up to n terms recursively
function fibonacciSeries(n, a = 0, b = 1) {
    if (n === 0) return;
    console.log(a);
    fibonacciSeries(n - 1, b, a + b);
}

// 10. Find sum of digits of a number recursively
function sumOfDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}


//Level 2: Number-based Recursive Thinking 
// 1. Count the number of digits in a number recursively
function countDigits(num) {
    if (num === 0) return 0;
    return 1 + countDigits(Math.floor(num / 10));
}

// 2. Reverse a number recursively
function reverseNumber(num) {
    function helper(num, rev = 0) {
        if (num === 0) return rev;
        return helper(Math.floor(num / 10), rev * 10 + num % 10);
    }
    return helper(num);
}

// 3. Check if a number is a palindrome using recursion
function isPalindrome(num) {
    const str = num.toString();
    function checkPalindrome(s, start, end) {
        if (start >= end) return true;
        return (s[start] === s[end]) && checkPalindrome(s, start + 1, end - 1);
    }
    return checkPalindrome(str, 0, str.length - 1);
}

// 4. Find product of digits of a number recursively
function productOfDigits(num) {
    if (num === 0) return 1;
    return (num % 10) * productOfDigits(Math.floor(num / 10));
}

// 5. Find GCD (HCF) of two numbers using Euclid’s algorithm recursively
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// 6. Convert a number to binary recursively
function toBinary(num) {
    if (num === 0) return '';
    return toBinary(Math.floor(num / 2)) + (num % 2);
}

// 7. Print digits of a number in words recursively
function digitsInWords(num) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    function helper(n) {
        if (n === 0) return '';
        return helper(Math.floor(n / 10)) + (n === 0 ? '' : ' ' + words[n % 10]);
    }
    return helper(num).trim();
}

// 8. Calculate the sum of first n even numbers recursively
function sumEven(n) {
    if (n === 0) return 0;
    return 2 * n + sumEven(n - 1);
}

// 9. Calculate the sum of first n odd numbers recursively
function sumOdd(n) {
    if (n === 0) return 0;
    return 2 * n - 1 + sumOdd(n - 1);
}

// 10. Find nCr (Combination formula) recursively using Pascal’s relation
function nCr(n, r) {
    if (r === 0 || r === n) return 1;
    return nCr(n - 1, r - 1) + nCr(n - 1, r);
}


//Level 3: Pattern & Printing Problems 
// 1. Print a line of n stars recursively
function printStars(n) {
    if (n > 0) {
        process.stdout.write('*');
        printStars(n - 1);
    } else {
        console.log();
    }
}

// 2. Print a square of stars recursively (n×n)
function printSquare(n, row = 0) {
    if (row < n) {
        printStars(n);
        printSquare(n, row + 1);
    }
}

// 3. Print a triangle of stars recursively (top-down)
function printTriangleTopDown(n, row = 1) {
    if (row <= n) {
        printStars(row);
        printTriangleTopDown(n, row + 1);
    }
}

// 4. Print a triangle of stars recursively (bottom-up)
function printTriangleBottomUp(n, row = n) {
    if (row > 0) {
        printStars(row);
        printTriangleBottomUp(n, row - 1);
    }
}

// 5. Print pattern of numbers recursively (1 to n each row)
function printNumbers(n, current = 1) {
    if (current <= n) {
        process.stdout.write(current + ' ');
        printNumbers(n, current + 1);
    } else {
        console.log();
    }
}

// 6. Print reverse triangle pattern recursively
function printReverseTriangle(n, row = n) {
    if (row > 0) {
        printStars(row);
        printReverseTriangle(n, row - 1);
    }
}

// 7. Print multiplication table of n recursively
function printMultiplicationTable(n, i = 1) {
    if (i <= 10) {
        console.log(`${n} x ${i} = ${n * i}`);
        printMultiplicationTable(n, i + 1);
    }
}

// 8. Print numbers in increasing and decreasing order in the same function
function printIncreasingDecreasing(n, current = 1) {
    if (current <= n) {
        console.log(current);
        printIncreasingDecreasing(n, current + 1);
        console.log(current);
    }
}

// 9. Print sum of series 1 + 2 + 3 + ... + n recursively and display each step
function sumSeries(n, current = 1) {
    if (current <= n) {
        console.log(current);
        return current + sumSeries(n, current + 1);
    }
    return 0;
}

// 10. Print pattern of characters (A, AB, ABC, ...) recursively
function printCharacterPattern(n, current = '') {
    if (current.length < n) {
        current += String.fromCharCode(65 + current.length);
        console.log(current);
        printCharacterPattern(n, current);
    }
}


//Level 4: String-based Recursion 
// 1. Reverse a string using recursion
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}

// 2. Check if a string is palindrome using recursion
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, ""); // Normalize the string
    if (str.length <= 1) return true;
    return str.charAt(0) === str.charAt(str.length - 1) && isPalindrome(str.substr(1, str.length - 2));
}

// 3. Count vowels in a string recursively
function countVowels(str) {
    if (str.length === 0) return 0;
    const vowels = "aeiouAEIOU";
    return (vowels.includes(str.charAt(0)) ? 1 : 0) + countVowels(str.substr(1));
}

// 4. Remove all spaces from a string recursively
function removeSpaces(str) {
    if (str.length === 0) return "";
    return (str.charAt(0) === " " ? "" : str.charAt(0)) + removeSpaces(str.substr(1));
}

// 5. Replace all occurrences of a character (say ‘a’ → ‘x’) recursively
function replaceCharacter(str, oldChar, newChar) {
    if (str.length === 0) return "";
    return (str.charAt(0) === oldChar ? newChar : str.charAt(0)) + replaceCharacter(str.substr(1), oldChar, newChar);
}

// 6. Remove all occurrences of a character from a string recursively
function removeCharacter(str, charToRemove) {
    if (str.length === 0) return "";
    return (str.charAt(0) === charToRemove ? "" : str.charAt(0)) + removeCharacter(str.substr(1), charToRemove);
}

// 7. Print all characters of a string one by one recursively
function printCharacters(str) {
    if (str.length === 0) return;
    console.log(str.charAt(0));
    printCharacters(str.substr(1));
}

// 8. Print the string in reverse order recursively (without using loops)
function printReverse(str) {
    if (str.length === 0) return;
    console.log(str.charAt(str.length - 1));
    printReverse(str.substr(0, str.length - 1));
}

// 9. Convert a string to uppercase recursively
function toUpperCase(str) {
    if (str.length === 0) return "";
    return str.charAt(0).toUpperCase() + toUpperCase(str.substr(1));
}

// 10. Count consonants and vowels separately using recursion
function countVowelsAndConsonants(str) {
    const vowels = "aeiouAEIOU";
    if (str.length === 0) return { vowels: 0, consonants: 0 };
    const char = str.charAt(0);
    const isVowel = vowels.includes(char);
    const result = countVowelsAndConsonants(str.substr(1));
    return {
        vowels: result.vowels + (isVowel ? 1 : 0),
        consonants: result.consonants + (!isVowel && /[a-zA-Z]/.test(char) ? 1 : 0)
    };
}


//Level 1: Fundamentals of Arrays 
// Function to perform the required operations
// 1. Input n and take n integers into an array; print them. 
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 2. Find the sum of all elements in an array. 
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 3. Find the average of array elements. 
function maxElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// 4. Find the maximum element in an array. 
function minElement(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// 5. Find the minimum element in an array. 
function minElement(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// 6. Count how many elements are positive, negative, or zero. 
function countPosNegZero(arr) {
  let positive = 0, negative = 0, zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zero++;
  }

  return { positive, negative, zero };
}

// 7. Count how many elements are even and odd. 
function countEvenOdd(arr) {
  let even = 0, odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even++;
    else odd++;
  }

  return { even, odd };
}

// 8. Find the index of the maximum element. 
function indexOfMax(arr) {
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

// 9. Find the index of the minimum element. 
function indexOfMin(arr) {
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

// 10. Take n elements and print only those greater than a given value k.
function elementsGreaterThanK(arr, k) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Level 2: Searching & Counting Logic 
// 1. Input an element x — check if it exists in the array. 
function exists(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return true;
  }
  return false;
}

// 2. Count how many times a given element appears. 
function countOccurrences(arr, x) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) count++;
  }
  return count;
}

// 3. Find the first occurrence of a given number. 
function firstOccurrence(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

// 4. Find the last occurrence of a given number. 
function lastOccurrence(arr, x) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) index = i;
  }
  return index;
}

// 5. Check if all elements in an array are unique. 
function allUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return false;
    }
  }
  return true;
}

// 6. Find the sum of even elements only. 
function sumEvenElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) sum += arr[i];
  }
  return sum;
}

// 7. Find the sum of odd elements only. 
function sumOddElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) sum += arr[i];
  }
  return sum;
}

// 8. Find the count of prime numbers in the array. 
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function countPrimes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) count++;
  }
  return count;
}

// 9. Count how many numbers are divisible by 3 and 5 both. 
function countDivBy3And5(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      count++;
    }
  }
  return count;
}

// 10. Count how many elements are perfect squares. 
function countPerfectSquares(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      let root = Math.floor(Math.sqrt(arr[i]));
      if (root * root === arr[i]) count++;
    }
  }

  return count;
}


// Level 3: Transformation & Manipulation 
// 1. Create a new array containing squares of all numbers. 
function squareArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}

// 2. Create a new array containing only even elements. 
function evenElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 3. Replace every negative number with 0. 
function replaceNegativeWithZero(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] < 0 ? 0 : arr[i]);
  }
  return result;
}

// 4. Replace all even numbers with 1 and all odd with 0. 
function evenOddBinary(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] % 2 === 0 ? 1 : 0);
  }
  return result;
}

// 5. Swap the first and last elements of the array. 
function swapFirstLast(arr) {
  if (arr.length <= 1) return arr;

  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  return arr;
}

// 6. Reverse an array (without using built-in reverse). 
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

// 7. Rotate an array by one position to the left. 
function rotateLeft(arr) {
  if (arr.length === 0) return arr;

  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;

  return arr;
}

// 8. Rotate an array by one position to the right. 
function rotateRight(arr) {
  if (arr.length === 0) return arr;

  let last = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;

  return arr;
}

// 9. Swap alternate elements (1st ↔ 2nd, 3rd ↔ 4th, etc.). 
function swapAlternate(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

// 10. Copy one array to another manually. 
function copyArray(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[i];
  }
  return copy;
}


// Level 4: Aggregate & Comparative Thinking 
// 1. Compare two arrays — check if they are equal (same elements & order).
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// 2. Compare two arrays — check if they contain the same elements (ignore order).
function arraysSameElements(a, b) {
  if (a.length !== b.length) return false;

  let used = new Array(b.length).fill(false);

  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (!used[j] && a[i] === b[j]) {
        used[j] = true;
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

// 3. Merge two arrays into a third array. 
function mergeArrays(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) result.push(a[i]);
  for (let i = 0; i < b.length; i++) result.push(b[i]);

  return result;
}

// 4. Find the common elements between two arrays. 
function commonElements(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        result.push(a[i]);
        break;
      }
    }
  }
  return result;
}

// 5. Find elements that are in one array but not in the other. 
function difference(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        found = true;
        break;
      }
    }
    if (!found) result.push(a[i]);
  }
  return result;
}

// 6. Count how many elements are common between two arrays. 
function countCommon(a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}

// 7. Find element-wise sum of two arrays (A[i] + B[i]). 
function elementWiseSum(a, b) {
  let len = Math.min(a.length, b.length);
  let result = [];

  for (let i = 0; i < len; i++) {
    result.push(a[i] + b[i]);
  }
  return result;
}

// 8. Find element-wise product of two arrays. 
function elementWiseProduct(a, b) {
  let len = Math.min(a.length, b.length);
  let result = [];

  for (let i = 0; i < len; i++) {
    result.push(a[i] * b[i]);
  }
  return result;
}

// 9. Create a frequency array of numbers (count occurrence of each number).
function frequencyArray(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === undefined) {
      freq[arr[i]] = 1;
    } else {
      freq[arr[i]]++;
    }
  }
  return freq;
}

// 10. Print all elements that appear more than once.
function duplicates(arr) {
  let freq = frequencyArray(arr);
  let result = [];

  for (let key in freq) {
    if (freq[key] > 1) {
      result.push(Number(key));
    }
  }
  return result;
}


// Level 5: Logical & Applied Array Problems 
// 1. Check if the array is sorted in ascending order. 
function isAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// 2. Check if the array is sorted in descending order. 
function isDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) return false;
  }
  return true;
}

// 3. Find the second largest element in an array. 
function secondLargest(arr) {
  let largest = -Infinity, second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }
  return second;
}

// 4. Find the second smallest element in an array. 
function secondSmallest(arr) {
  let smallest = Infinity, second = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      second = smallest;
      smallest = arr[i];
    } else if (arr[i] < second && arr[i] !== smallest) {
      second = arr[i];
    }
  }
  return second;
}

// 5. Find the difference between the largest and smallest element. 
function diffMaxMin(arr) {
  let max = arr[0], min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return max - min;
}

// 6. Find the sum of all elements except the largest and smallest. 
function sumExceptMinMax(arr) {
  let max = arr[0], min = arr[0], sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return sum - max - min;
}

// 7. Count how many pairs of elements have a sum equal to a given number k. 
function countPairsWithSum(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) count++;
    }
  }
  return count;
}

// 8. Count how many elements are greater than the average of the array. 
function countGreaterThanAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  let avg = sum / arr.length;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) count++;
  }
  return count;
}

// 9. Print the frequency of each distinct element. 
function frequency(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === undefined) freq[arr[i]] = 1;
    else freq[arr[i]]++;
  }
  return freq;
}

// 10. Print all unique elements (those that occur exactly once). 
function uniqueElements(arr) {
  let freq = frequency(arr);
  let result = [];

  for (let key in freq) {
    if (freq[key] === 1) result.push(Number(key));
  }
  return result;
}


// Phase 5 – Strings (Basic Logic Building Questions)
// Category 1: Basic String Handling 
// 1. Take a string input and print its length. 
function stringLength(str) {
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

// 2. Print the first and last character of a string. 
function firstAndLastChar(str) {
  if (str.length === 0) return null;
  return {
    first: str[0],
    last: str[str.length - 1]
  };
}

// 3. Convert all characters of a string to uppercase. 
function toUpperCaseManual(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

// 4. Convert all characters of a string to lowercase. 
function toLowerCaseManual(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

// 5. Count how many characters (excluding spaces) are in the string. 
function countCharsNoSpaces(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') count++;
  }
  return count;
}

// 6. Count how many words are in a sentence. 
function countWords(str) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && !inWord) {
      count++;
      inWord = true;
    } else if (str[i] === ' ') {
      inWord = false;
    }
  }
  return count;
}

// 7. Take two strings and print them concatenated. 
function concatenateStrings(a, b) {
  return a + b;
}

// 8. Compare two strings lexicographically (like dictionary order). 
function compareStrings(a, b) {
  let len = Math.min(a.length, b.length);

  for (let i = 0; i < len; i++) {
    if (a[i] < b[i]) return -1;
    if (a[i] > b[i]) return 1;
  }
  return a.length === b.length ? 0 : (a.length < b.length ? -1 : 1);
}

// 9. Print the ASCII value of each character in a string. 
function asciiValues(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.push({
      char: str[i],
      ascii: str.charCodeAt(i)
    });
  }
  return result;
}

// 10. Check whether the string is empty or not. 
function isEmptyString(str) {
  return str.length === 0;
}


// Category 2: Counting & Character Analysis (10 Qs) 
// 1. Count how many vowels and consonants are in a string. 
function countVowelsConsonants(str) {
  let vowels = 0, consonants = 0;
  let v = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
      if (v.includes(ch)) vowels++;
      else consonants++;
    }
  }
  return { vowels, consonants };
}

// 2. Count the number of digits, letters, and special characters in a string. 
function countTypes(str) {
  let digits = 0, letters = 0, special = 0;

  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);

    if (c >= 48 && c <= 57) digits++;
    else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) letters++;
    else special++;
  }
  return { digits, letters, special };
}

// 3. Count how many uppercase and lowercase letters a string has. 
function countUpperLower(str) {
  let upper = 0, lower = 0;

  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) upper++;
    else if (c >= 97 && c <= 122) lower++;
  }
  return { upper, lower };
}

// 4. Find the frequency of each character in a string (without using a map). 
function charFrequency(str) {
  let freq = [];

  for (let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = 0; j < freq.length; j++) {
      if (freq[j].char === str[i]) {
        freq[j].count++;
        found = true;
        break;
      }
    }
    if (!found) freq.push({ char: str[i], count: 1 });
  }
  return freq;
}

// 5. Count how many spaces are there in a sentence. 
function countSpaces(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') count++;
  }
  return count;
}

// 6. Count how many times a given character appears in a string. 
function countChar(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) count++;
  }
  return count;
}

// 7. Count how many alphabets are before ‘m’ and after ‘m’ in a given string. 
function countBeforeAfterM(str) {
  let before = 0, after = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (ch >= 'a' && ch <= 'z') {
      if (ch < 'm') before++;
      else if (ch > 'm') after++;
    }
  }
  return { before, after };
}

// 8. Count how many substrings start and end with the same character (simple logic). 
function countSubstringsSameEnds(str) {
  let freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let count = 0;
  for (let ch in freq) {
    let n = freq[ch];
    count += (n * (n + 1)) / 2;
  }
  return count;
}

// 9. Print how many words start with a vowel in a sentence. 
function wordsStartWithVowel(str) {
  let words = str.split(' ');
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let w of words) {
    if (w.length > 0 && vowels.includes(w[0])) count++;
  }
  return count;
}

// 10. Count how many words end with ‘s’.
function wordsEndWithS(str) {
  let words = str.split(' ');
  let count = 0;

  for (let w of words) {
    if (w.length > 0 && w[w.length - 1].toLowerCase() === 's') count++;
  }
  return count;
}


// Category 3: Reversing & Palindromic Thinking (10 Qs) 
// 1. Reverse a string without using built-in reverse. 
function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

// 2. Reverse each word in a sentence. 
function reverseEachWord(sentence) {
  let words = sentence.split(' ');
  let result = [];

  for (let w of words) {
    let rev = "";
    for (let i = w.length - 1; i >= 0; i--) {
      rev += w[i];
    }
    result.push(rev);
  }
  return result.join(' ');
}

// 3. Reverse the order of words in a sentence. 
function reverseWordOrder(sentence) {
  let words = sentence.split(' ');
  let result = "";

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) result += ' ';
  }
  return result;
}

// 4. Check whether a string is a palindrome. 
function isPalindromeString(str) {
  let left = 0, right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

// 5. Check if two strings are the reverse of each other. 
function areReverse(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[b.length - 1 - i]) return false;
  }
  return true;
}

// 6. Print the middle character(s) of a string. 
function middleChars(str) {
  let n = str.length;
  if (n === 0) return "";

  if (n % 2 === 0) {
    return str[n / 2 - 1] + str[n / 2];
  } else {
    return str[Math.floor(n / 2)];
  }
}

// 7. Print the second half of the string in reverse. 
function reverseSecondHalf(str) {
  let mid = Math.floor(str.length / 2);
  let first = str.slice(0, mid);
  let second = "";

  for (let i = str.length - 1; i >= mid; i--) {
    second += str[i];
  }
  return first + second;
}

// 8. Remove the first and last character and print the remaining string. 
function removeFirstLast(str) {
  if (str.length <= 2) return "";
  let res = "";
  for (let i = 1; i < str.length - 1; i++) {
    res += str[i];
  }
  return res;
}

// 9. Reverse only characters, keeping digits in place. 
function reverseCharsKeepDigits(str) {
  let arr = str.split('');
  let left = 0, right = arr.length - 1;

  while (left < right) {
    if (arr[left] >= '0' && arr[left] <= '9') left++;
    else if (arr[right] >= '0' && arr[right] <= '9') right--;
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++; right--;
    }
  }
  return arr.join('');
}

// 10. Reverse string but skip spaces. 
function reverseSkipSpaces(str) {
  let arr = str.split('');
  let left = 0, right = arr.length - 1;

  while (left < right) {
    if (arr[left] === ' ') left++;
    else if (arr[right] === ' ') right--;
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++; right--;
    }
  }
  return arr.join('');
}


// Category 4: Character & Word Manipulation (10 Qs) 
// 1. Remove all vowels from a string. 
function removeVowels(str) {
  let res = "";
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) res += str[i];
  }
  return res;
}

// 2. Remove all spaces from a string. 
function removeSpaces(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') res += str[i];
  }
  return res;
}

// 3. Replace all vowels with ‘*’. 
function replaceVowels(str) {
  let res = "";
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    res += vowels.includes(str[i]) ? '*' : str[i];
  }
  return res;
}

// 4. Replace all spaces with ‘_’. 
function replaceSpaces(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i] === ' ' ? '_' : str[i];
  }
  return res;
}

// 5. Print the string after removing all digits. 
function removeDigits(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= '0' && str[i] <= '9')) res += str[i];
  }
  return res;
}

// 6. Remove duplicate characters from a string. 
function removeDuplicates(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = 0; j < res.length; j++) {
      if (str[i] === res[j]) {
        found = true;
        break;
      }
    }
    if (!found) res += str[i];
  }
  return res;
}

// 7. Keep only the first occurrence of each character. 
function firstOccurrenceOnly(str) {
  return removeDuplicates(str);
}

// 8. Remove consecutive duplicate characters (e.g., “aaabb” → “ab”). 
function removeConsecutiveDuplicates(str) {
  if (str.length === 0) return "";

  let res = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) res += str[i];
  }
  return res;
}

// 9. Swap case: uppercase → lowercase and lowercase → uppercase.
function swapCase(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) res += String.fromCharCode(c + 32);
    else if (c >= 97 && c <= 122) res += String.fromCharCode(c - 32);
    else res += str[i];
  }
  return res;
}

// 10. Shift each character by 1 (e.g., “abc” → “bcd”). 
function shiftCharacters(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);

    if (c >= 97 && c <= 122) { // lowercase
      res += c === 122 ? 'a' : String.fromCharCode(c + 1);
    } else if (c >= 65 && c <= 90) { // uppercase
      res += c === 90 ? 'A' : String.fromCharCode(c + 1);
    } else {
      res += str[i];
    }
  }
  return res;
}

// Category 5: Word-level Thinking (10 Qs) 
// 1. Print each word of a sentence on a new line. 
function printWords(sentence) {
  let word = "";

  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      if (word.length > 0) console.log(word);
      word = "";
    } else {
      word += sentence[i];
    }
  }
}

// 2. Count how many words have even length. 
function countEvenLengthWords(sentence) {
  let words = sentence.split(" ");
  let count = 0;

  for (let w of words) {
    if (w.length > 0 && w.length % 2 === 0) count++;
  }
  return count;
}

// 3. Find the longest word in a sentence. 
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let w of words) {
    if (w.length > longest.length) longest = w;
  }
  return longest;
}

// 4. Find the shortest word in a sentence. 
function shortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = null;

  for (let w of words) {
    if (w.length === 0) continue;
    if (shortest === null || w.length < shortest.length) {
      shortest = w;
    }
  }
  return shortest;
}

// 5. Swap first and last words in a sentence. 
function swapFirstLastWords(sentence) {
  let words = sentence.split(" ");
  let n = words.length;

  if (n < 2) return sentence;

  let temp = words[0];
  words[0] = words[n - 1];
  words[n - 1] = temp;

  return words.join(" ");
}

// 6. Print all words that start and end with the same letter. 
function wordsSameStartEnd(sentence) {
  let words = sentence.split(" ");
  let result = [];

  for (let w of words) {
    if (
      w.length > 1 &&
      w[0].toLowerCase() === w[w.length - 1].toLowerCase()
    ) {
      result.push(w);
    }
  }
  return result;
}

// 7. Count how many words contain the letter ‘a’. 
function countWordsWithA(sentence) {
  let words = sentence.split(" ");
  let count = 0;

  for (let w of words) {
    for (let ch of w) {
      if (ch.toLowerCase() === "a") {
        count++;
        break;
      }
    }
  }
  return count;
}

// 8. Capitalize the first letter of each word. 
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let result = [];

  for (let w of words) {
    if (w.length > 0) {
      result.push(w[0].toUpperCase() + w.slice(1));
    }
  }
  return result.join(" ");
}

// 9. Print the sentence in title case (first letter capital, rest lowercase).
function titleCase(sentence) {
  let words = sentence.toLowerCase().split(" ");
  let result = [];

  for (let w of words) {
    if (w.length > 0) {
      result.push(w[0].toUpperCase() + w.slice(1));
    }
  }
  return result.join(" ");
}

// 10. Remove extra spaces between words (normalize spacing).
function normalizeSpaces(sentence) {
  let res = "";
  let space = false;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      if (!space) {
        res += " ";
        space = true;
      }
    } else {
      res += sentence[i];
      space = false;
    }
  }
  return res.trim();
}


// Phase 6 – Mixed Logical Challenges
// Category 1: Number-Based Logical Combinations (10 Qs) 
// 1. Print all numbers between 1 and N that are divisible by both 3 and 5. 
function divisibleBy3And5(N) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push(i);
    }
  }
  return result;
}

// 2. Find the sum of digits of a number (use loop). 
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// 3. Check if a number is an Armstrong number. 
function isArmstrong(num) {
  let temp = num;
  let digits = 0;

  while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
  }

  temp = num;
  let sum = 0;

  while (temp > 0) {
    let d = temp % 10;
    sum += d ** digits;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

// 4. Print all Armstrong numbers between 1 and 1000. 
function armstrong1to1000() {
  let result = [];
  for (let i = 1; i <= 1000; i++) {
    if (isArmstrong(i)) result.push(i);
  }
  return result;
}

// 5. Find the factorial of a number using recursion. 
function factorialRec(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRec(n - 1);
}

// 6. Count how many even digits a number contains. 
function countEvenDigits(num) {
  let count = 0;
  while (num > 0) {
    let d = num % 10;
    if (d % 2 === 0) count++;
    num = Math.floor(num / 10);
  }
  return count;
}

// 7. Print all prime numbers between 1 and N. 
function primesUpToN(N) {
  let result = [];

  for (let i = 2; i <= N; i++) {
    let prime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) result.push(i);
  }
  return result;
}

// 8. Print the reverse of a number (123 → 321). 
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}

// 9. Check if a number is palindrome (121 → true). 
function isPalindromeNumber(num) {
  return num === reverseNumber(num);
}

// 10. Check if a number is perfect (sum of factors equals number). 
function isPerfect(num) {
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

// Category 2: String + Logic Mix (10 Qs) 
// 1. Check if two strings are anagrams (without using collections). 
function areAnagrams(a, b) {
  if (a.length !== b.length) return false;

  let used = new Array(b.length).fill(false);

  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (!used[j] && a[i] === b[j]) {
        used[j] = true;
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

// 2. Count vowels in each word of a sentence. 
function vowelsPerWord(sentence) {
  let words = sentence.split(' ');
  let vowels = "aeiouAEIOU";
  let result = [];

  for (let w of words) {
    let count = 0;
    for (let c of w) {
      if (vowels.includes(c)) count++;
    }
    result.push({ word: w, vowels: count });
  }
  return result;
}

// 3. Reverse words in a string if their length is even. 
function reverseEvenLengthWords(sentence) {
  let words = sentence.split(' ');
  let res = [];

  for (let w of words) {
    if (w.length % 2 === 0) {
      let r = "";
      for (let i = w.length - 1; i >= 0; i--) r += w[i];
      res.push(r);
    } else {
      res.push(w);
    }
  }
  return res.join(' ');
}

// 4. Replace every vowel in a string with its position (a=1, e=2...). 
function reverseEvenLengthWords(sentence) {
  let words = sentence.split(' ');
  let res = [];

  for (let w of words) {
    if (w.length % 2 === 0) {
      let r = "";
      for (let i = w.length - 1; i >= 0; i--) r += w[i];
      res.push(r);
    } else {
      res.push(w);
    }
  }
  return res.join(' ');
}

// 5. Print characters that appear more than once (without map). 
function duplicateChars(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    if (count > 1 && !result.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

// 6. Count words that start and end with the same letter. 
function countSameStartEnd(sentence) {
  let words = sentence.split(' ');
  let count = 0;

  for (let w of words) {
    if (w.length > 1 && w[0].toLowerCase() === w[w.length - 1].toLowerCase()) {
      count++;
    }
  }
  return count;
}

// 7. Toggle case for every alternate word in a sentence. 
function toggleAlternateWords(sentence) {
  let words = sentence.split(' ');
  let res = [];

  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 1) {
      let t = "";
      for (let c of words[i]) {
        t += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
      }
      res.push(t);
    } else {
      res.push(words[i]);
    }
  }
  return res.join(' ');
}

// 8. Check if two strings are rotations of each other. 
function areRotations(a, b) {
  if (a.length !== b.length) return false;

  let temp = a + a;
  return temp.includes(b);
}

// 9. Find the word with maximum vowels in a sentence. 
function wordWithMaxVowels(sentence) {
  let words = sentence.split(' ');
  let vowels = "aeiouAEIOU";
  let maxWord = "";
  let maxCount = 0;

  for (let w of words) {
    let count = 0;
    for (let c of w) if (vowels.includes(c)) count++;
    if (count > maxCount) {
      maxCount = count;
      maxWord = w;
    }
  }
  return maxWord;
}

// 10. Remove duplicate words from a sentence. 
function removeDuplicateWords(sentence) {
  let words = sentence.split(' ');
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (words[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) result.push(words[i]);
  }
  return result.join(' ');
}


// Category 3: Array + Looping Logic (10 Qs) 
// 1. Find the maximum and minimum element in an array. 
function maxMin(arr) {
  let max = arr[0], min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return { max, min };
}

// 2. Count how many positive, negative, and zero elements are in an array.
function countPosNegZero(arr) {
  let positive = 0, negative = 0, zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zero++;
  }
  return { positive, negative, zero };
}

// 3. Print all unique elements from an array. 
function uniqueElements(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count === 1) result.push(arr[i]);
  }
  return result;
}

// 4. Reverse an array in-place. 
function reverseInPlace(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++; right--;
  }
  return arr;
}

// 5. Shift all zeros to the end of the array. 
function shiftZeros(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index++] = arr[i];
    }
  }
  while (index < arr.length) {
    arr[index++] = 0;
  }
  return arr;
}

// 6. Count how many elements are even at an even index.
function countEvenAtEvenIndex(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 === 0) count++;
  }
  return count;
}

// 7. Merge two arrays into one. 
function mergeArrays(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) result.push(a[i]);
  for (let i = 0; i < b.length; i++) result.push(b[i]);

  return result;
}

// 8. Find the second largest element in an array. 
function secondLargest(arr) {
  let largest = -Infinity, second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }
  return second;
}

// 9. Rotate an array by one position to the right. 
function rotateRight(arr) {
  if (arr.length === 0) return arr;

  let last = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;

  return arr;
}

// 10. Find the sum of all elements at odd indices.
function sumOddIndices(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}

// Category 4: Nested Logic & Pattern Flow (10 Qs) 
// 1. Print a multiplication table in a formatted grid (10x10). 
function multiplicationTable10x10() {
  for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
      row += (i * j).toString().padStart(4, ' ');
    }
    console.log(row);
  }
}

// 2. Print all pairs in an array whose sum equals a given number. 
function pairsWithSum(arr, k) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

// 3. Print all subarrays of a given array. 
function printSubarrays(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let sub = [];
    for (let j = i; j < arr.length; j++) {
      sub.push(arr[j]);
      result.push([...sub]);
    }
  }
  return result;
}

// 4. Check if an array is sorted (ascending or descending). 
function isSorted(arr) {
  let asc = true, desc = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) asc = false;
    if (arr[i] < arr[i + 1]) desc = false;
  }

  if (asc) return "Ascending";
  if (desc) return "Descending";
  return "Not Sorted";
}

// 5. Count how many times a number appears consecutively in an array. 
function countConsecutive(arr, x) {
  let maxCount = 0, current = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      current++;
      maxCount = Math.max(maxCount, current);
    } else {
      current = 0;
    }
  }
  return maxCount;
}

// 6. Find all pairs of characters in a string that are the same (nested loop). 
function sameCharPairs(str) {
  let pairs = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        pairs.push([str[i], i, j]);
      }
    }
  }
  return pairs;
}

// 7. Print pattern of increasing characters (A, AB, ABC...). 
function charPattern(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(65 + j);
    }
    res += line + "\n";
  }
  return res;
}

// 8. Print Pascal’s triangle up to N rows. 
function pascalTriangle(n) {
  let triangle = [];

  for (let i = 0; i < n; i++) {
    triangle[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) triangle[i][j] = 1;
      else triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  return triangle;
}

// 9. Generate Fibonacci series up to N using recursion. 
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function fibonacciSeries(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(fib(i));
  }
  return res;
}

// 10. Print numbers in a spiral-like pattern (conceptual dry run). 
function spiralPrint(matrix) {
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  let result = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;

    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
  }
  return result;
}


// Category 5: Applied Reasoning & Real-Life Logic (10 Qs) 
// 1. Given marks of students, find how many passed (>= 40). 
function countPassed(marks) {
  let passed = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) passed++;
  }
  return passed;
}

// 2. Take age inputs and count how many are adults, minors, seniors. 
function countAgeGroups(ages) {
  let minors = 0, adults = 0, seniors = 0;

  for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) minors++;
    else if (ages[i] < 60) adults++;
    else seniors++;
  }
  return { minors, adults, seniors };
}

// 3. Validate a password (at least one uppercase, lowercase, digit, special char). 
function isValidPassword(pwd) {
  let upper = false, lower = false, digit = false, special = false;

  for (let i = 0; i < pwd.length; i++) {
    let c = pwd.charCodeAt(i);
    if (c >= 65 && c <= 90) upper = true;
    else if (c >= 97 && c <= 122) lower = true;
    else if (c >= 48 && c <= 57) digit = true;
    else special = true;
  }
  return upper && lower && digit && special;
}

// 4. Simulate a simple calculator using switch-case. 
function calculator(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Divide by zero";
    default: return "Invalid operator";
  }
}

// 5. Count how many times a coin lands on heads/tails (use random). 
function coinToss(times) {
  let heads = 0, tails = 0;

  for (let i = 0; i < times; i++) {
    if (Math.random() < 0.5) heads++;
    else tails++;
  }
  return { heads, tails };
}

// 6. Print frequency of each digit in a number. 
function digitFrequency(num) {
  let freq = new Array(10).fill(0);

  while (num > 0) {
    freq[num % 10]++;
    num = Math.floor(num / 10);
  }
  return freq;
}

// 7. Find common elements between two arrays. 
function commonElements(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        result.push(a[i]);
        break;
      }
    }
  }
  return result;
}

// 8. Print characters that are common in two strings. 
function commonChars(s1, s2) {
  let result = "";

  for (let i = 0; i < s1.length; i++) {
    let found = false;
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        found = true;
        break;
      }
    }
    if (found && !result.includes(s1[i])) result += s1[i];
  }
  return result;
}

// 9. Count how many prime numbers are there in an array. 
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function countPrimes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) count++;
  }
  return count;
}

// 10. Print all palindromic words from a sentence.
function palindromicWords(sentence) {
  let words = sentence.split(' ');
  let result = [];

  for (let w of words) {
    let left = 0, right = w.length - 1;
    let isPal = true;

    while (left < right) {
      if (w[left] !== w[right]) {
        isPal = false;
        break;
      }
      left++; right--;
    }
    if (isPal && w.length > 0) result.push(w);
  }
  return result;
}











