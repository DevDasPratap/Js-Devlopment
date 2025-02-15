// =====================================================
// ARRAY
// =====================================================

// Find Majority Element
function findN(arr) {
  let newObj = {};

  // arr.forEach((element) => {
  //   if (newObj[element] === undefined) {
  //     newObj[element] = 1;
  //   } else {
  //     newObj[element] = newObj[element] + 1;
  //   }
  // });
  for (let i = 0; i < arr.length; i++) {
    newObj[arr[i]] = (newObj[arr[i]] || 0)+1
  }
  let newarrdup = [];
  for (let key in newObj) {
    // console.log(key);
    let n = arr.length / 2;
    if (newObj[key] > Math.floor(n)) {
      newarrdup.push(key);
    }
  }

  console.log(newarrdup)
}

// findN([3,3,4,2,3,3,3,1]);




// Find the most frequent word in a sentence
const s = "apple orange apple mango apple mango grape apple";

const words = s.split(" ");
const wordCount = {};

// Count occurrences of each word
words.forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});

// Find the maximum frequency
const maxCount = Math.max(...Object.values(wordCount));

// Find the most frequent word(s)
const mostFrequentWords = Object.keys(wordCount).filter(word => wordCount[word] === maxCount);

// console.log(mostFrequentWords); // ['apple']





// const employees = [
//     { id: 1, name: "Mahesh", dept: "HR" },
//     { id: 2, name: "Radha Krishna", dept: "IT" },
//     { id: 3, name: "Maruthi", dept: "Sales" }
// ];

// let longestNameEmployee = {};
// let longestName = "";

// employees.forEach(emp => {
//     if (emp.name.length > longestName.length) {
//         longestName = emp.name;
//         longestNameEmployee = emp;
//     }
// });

// console.log(longestNameEmployee);






// Find The Total Amount Spent By Each Customer Who Has A Completed Order

// const orders = [
//     {
//         orderId: 1,
//         customerName: "Alice",
//         items: [
//             { name: "Laptop", price: 1000 },
//             { name: "Mouse", price: 50 },
//         ],
//         status: "Completed",
//     },
//     {
//         orderId: 2,
//         customerName: "Bob",
//         items: [{ name: "Phone", price: 500 }],
//         status: "Pending",
//     },
//     {
//         orderId: 3,
//         customerName: "Alice",
//         items: [{ name: "Keyboard", price: 100 }],
//         status: "Completed",
//     },
//     {
//         orderId: 4,
//         customerName: "Charlie",
//         items: [{ name: "Monitor", price: 300 }],
//         status: "Completed",
//     }
// ];

// const totalAmountSpent = orders
//     .filter(order => order.status === "Completed")  // Filter only completed orders
//     .reduce((acc, order) => {
//         const total = order.items.reduce((sum, item) => sum + item.price, 0); // Calculate order total
//         acc[order.customerName] = (acc[order.customerName] || 0) + total; // Add to customer's total
//         return acc;
//     }, {});

// console.log(totalAmountSpent);





// Group The Orders Based On Their Status
const orders = [
  { id: 101, customer: "Alice", total: 250, status: "completed" },
  { id: 102, customer: "Bob", total: 150, status: "pending" },
  { id: 103, customer: "Charlie", total: 200, status: "completed" },
  { id: 104, customer: "David", total: 180, status: "pending" },
  { id: 105, customer: "Eve", total: 300, status: "cancelled" }
];

const groupedOrders = orders.reduce((acc, order) => {
  acc[order.status] = acc[order.status] || [];
  acc[order.status].push(order);
  return acc;
}, {});

// console.log(groupedOrders);


// Find The Student With The Highest Average Score
let students = [
  { name: "Ram", scores: [85, 90, 92], age: 20 },
  { name: "Suresh", scores: [78, 88, 91], age: 22 },
  { name: "Mahesh", scores: [90, 95, 98], age: 21 },
  { name: "Raj", scores: [70, 75, 80], age: 23 }
];

const highestScoringStudent = students.reduce((topStudent, student) => {
  let avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  let topAvg = topStudent.scores.reduce((sum, score) => sum + score, 0) / topStudent.scores.length;
  return avgScore > topAvg ? student : topStudent;
}, students[0]);

// console.log(highestScoringStudent);




// Find The Highest-paid Employee
const employees = [
  { name: "Alice", department: "IT", salary: 70000 },
  { name: "Bob", department: "HR", salary: 50000 },
  { name: "Charlie", department: "IT", salary: 80000 },
  { name: "David", department: "Finance", salary: 60000 },
  { name: "Eve", department: "HR", salary: 55000 },
  { name: "Frank", department: "Finance", salary: 75000 }
];

const highestPaidEmployees = Object.values(employees.reduce((acc, emp) => {
  if (!acc[emp.department] || emp.salary > acc[emp.department].salary) {
    acc[emp.department] = emp;
  }
  return acc;
}, {}));

// console.log(highestPaidEmployees);




// Unique Element That Appears Only Once
function findUnique(arr) {
  let frequencyMap = {};

  // Step 1: Count occurrences
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (frequencyMap[num] === undefined) {
      frequencyMap[num] = 1;
    } else {
      frequencyMap[num]++;
    }
  }

  // Step 2: Find the unique element
  for (let key in frequencyMap) {
    if (frequencyMap[key] === 1) {
      return Number(key); // Convert key back to number
    }
  }

  return null; // If no unique element found
}

const nums = [4, 3, 2, 4, 1, 3, 2];
// console.log(findUnique(nums)); // Output: 1


// Highest Odd Number
function highestOddNumber(num) {
  let result = "";

  for (let i = 0; i < num.length; i++) {
    if (parseInt(num[i]) % 2 !== 0) { // Check if digit is odd
      result = num.slice(0, i + 1); // Extract substring up to current index
    }
  }

  return result || "-1"; // Return result or -1 if no odd number is found
}

// Test cases
// console.log(highestOddNumber("5688248")); // Output: "5"
// console.log(highestOddNumber("61632826")); // Output: "6163"
// console.log(highestOddNumber("616338261")); // Output: "616338261"


// Find Common Elements Between Two Arrays
let arr1 = [2, 1, 4, 6, 3];
let arr2 = [1, 7, 8, 3, 2];
let commonElements = arr1.filter(element => arr2.includes(element));
// console.log(commonElements); // Output: [2, 1, 3]

// Find Common Elements Without Duplicates
let arr3 = [2, 1, 4, 6, 3, 2];
let arr4 = [1, 7, 8, 3, 2, 2];
let commonElements1 = [...new Set(arr3.filter(element => arr4.includes(element)))];
// console.log(commonElements); // Output: [2, 1, 3]


// Find elements that are unique to each array (not common).
let arr5 = [2, 1, 4, 6, 3];
let arr6 = [1, 7, 8, 3, 2];
let uniqueToArr1 = arr5.filter(element => !arr6.includes(element));
let uniqueToArr2 = arr6.filter(element => !arr5.includes(element));
let uniqueElements = [...uniqueToArr1, ...uniqueToArr2];
// console.log(uniqueElements); // Output: [4, 6, 7, 8]


// Combine two arrays and remove duplicates.
let arr7 = [2, 1, 4, 6, 3];
let arr8 = [1, 7, 8, 3, 2];
let union = [...new Set([...arr7, ...arr8])];
// console.log(union); // Output: [2, 1, 4, 6, 3, 7, 8]


// Find common elements using Set for better performance.
let arr9 = [2, 1, 4, 6, 3];
let arr10 = [1, 7, 8, 3, 2];
let set1 = new Set(arr9);
let intersection = arr10.filter(element => set1.has(element));
// console.log(intersection); // Output: [1, 3, 2]


// Find elements in arr1 that are not in arr2.
let arr11 = [2, 1, 4, 6, 3];
let arr12 = [1, 7, 8, 3, 2];
let difference = arr11.filter(element => !arr12.includes(element));
// console.log(difference); // Output: [4, 6]

// Find elements that are in either array but not in both.
let arr13 = [2, 1, 4, 6, 3];
let arr14 = [1, 7, 8, 3, 2];
let diff1 = arr1.filter(element => !arr14.includes(element));
let diff2 = arr2.filter(element => !arr13.includes(element));
let symmetricDifference = [...diff1, ...diff2];
// console.log(symmetricDifference); // Output: [4, 6, 7, 8]

// Find common elements in three arrays.
let arr15 = [2, 1, 4, 6, 3];
let arr16 = [1, 7, 8, 3, 2];
let arr17 = [3, 2, 9, 1];
let commonElements3 = arr15.filter(element => arr16.includes(element) &&
  arr17.includes(element));
// console.log(commonElements3); // Output: [1, 3, 2]


// Check if two arrays have no common elements.

let arr18 = [2, 4, 6];
let arr19 = [1, 7, 8];
let isDisjoint = arr18.every(element => !arr19.includes(element));
// console.log(isDisjoint); // Output: true

// Count the number of common elements between two arrays.
let arr20 = [2, 1, 4, 6, 3];
let arr21 = [1, 7, 8, 3, 2];
let commonCount = arr20.filter(element => arr21.includes(element)).length;
// console.log(commonCount); // Output: 3



// =====================================================
// STRING
// =====================================================


// Find the Largest Odd Number from a Numeric String
// Question: Given a numeric string, return the smallest odd number that can be formed
// by using all or part of the digits
function largestOddNumber(num) {
  // Convert the string to an array of characters
  let numArray = num.split("");
  // Find the index of the last odd number
  let lastOddIndex = numArray.reverse().findIndex(digit => parseInt(digit) % 2 !== 0);
  // If no odd number is found, return an empty string
  if (lastOddIndex === -1) return "";
  // Reverse the index back to the original order
  lastOddIndex = num.length - lastOddIndex - 1;
  // Slice the string from the start to the last odd number
  return num.slice(0, lastOddIndex + 1);
}
// Test Cases
// console.log(largestOddNumber("5688248")); // Output: "5"
// console.log(largestOddNumber("61632826")); // Output: "6163"
// console.log(largestOddNumber("616338261")); // Output: "616338261"



// Find the Smallest Odd Number from a Numeric String
// Question: Given a numeric string, return the smallest odd number that can be formed
// by using all or part of the digits.
function smallestOddNumber(num) {
  // Convert the string into an array of digits
  let numArray = num.split("").map(Number);
  // Filter only the odd digits and sort them
  let oddDigits = numArray.filter(digit => digit % 2 !== 0).sort((a, b) => a - b);
  // If no odd digits are found, return an empty string
  return oddDigits.length > 0 ? String(oddDigits[0]) : "";
}
// Test Cases
// console.log(smallestOddNumber("5688248")); // Output: "5"
// console.log(smallestOddNumber("61632826")); // Output: "3"
// console.log(smallestOddNumber("246802")); // Output: "" (no odd digits)



// Largest Even Number from Left to Right
// Question: Given a numeric string, find the largest even number that can be formed by
// using digits sequentially from left to right.
function largestEvenNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 0) {
      return num.slice(0, i + 1);
    }
  }
  return ""; // No even number found
}
// Test Cases
// console.log(largestEvenNumber("5688248")); // Output: "5688248"
// console.log(largestEvenNumber("61632826")); // Output: "61632826"
// console.log(largestEvenNumber("13579")); // Output: "" (no even digits)



// Count the Number of Odd Digits
// Question: Count how many odd digits are present in a numeric string.
function countOddDigits(num) {
  // Convert the string to an array and filter odd digits
  return num.split("").filter(digit => parseInt(digit) % 2 !== 0).length;
}
// Test Cases
// console.log(countOddDigits("5688248")); // Output: 2 (5 and 3 are odd)
// console.log(countOddDigits("61632826")); // Output: 2 (3 and 1 are odd)
// console.log(countOddDigits("246802")); // Output: 0 (no odd digits)


// Sum of All Odd Digits
// Question: Find the sum of all odd digits in a numeric string.
function sumOfOddDigits(num) {
  // Convert the string to an array, filter odd digits, and sum them
  return num.split("")
    .map(Number)
    .filter(digit => digit % 2 !== 0)
    .reduce((sum, digit) => sum + digit, 0);
}
// Test Cases
// console.log(sumOfOddDigits("5688248")); // Output: 8 (5 + 3)
// console.log(sumOfOddDigits("61632826")); // Output: 4 (3 + 1)
// console.log(sumOfOddDigits("246802")); // Output: 0 (no odd digits)





// Convert Roman Numerals to Integer
// Question: Write a program to convert a Roman numeral string into its corresponding
// integer value. The program should follow the rules of Roman numeral representation
// and handle cases where subtraction is required (e.g., IV = 4, IX = 9).

function romanToInt(s) {
  // Roman numeral to integer mapping
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  // Convert the string into an array and map values
  const values = s.split("").map(char => romanMap[char]);
  // Reduce the array into a single integer
  return values.reduce((sum, currentValue, index) => {
    // If the current value is less than the next value, subtract it
    if (index < values.length - 1 && currentValue < values[index + 1]) {
      return sum - currentValue;
    }
    // Otherwise, add it
    return sum + currentValue;
  }, 0);
}
// Test Cases
// console.log(romanToInt("LVIII")); // Output: 58
// console.log(romanToInt("IX")); // Output: 9
// console.log(romanToInt("MCMXCIV")); // Output: 1994




// Integer to Roman
// Question: Convert an integer to its Roman numeral representation.
function intToRoman(num) {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];
  let result = "";
  for (const { value, symbol } of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}
// Test Cases
// console.log(intToRoman(58)); // Output: "LVIII"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"



// Valid Parentheses
// Question: Determine if a string containing (), {}, and [] is valid.


function isValidParentheses(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
// Test Cases
// console.log(isValidParentheses("()")); // Output: true
// console.log(isValidParentheses("()[]{}")); // Output: true
// console.log(isValidParentheses("(]")); // Output: false




// Longest Substring Without Repeating Characters
// Question: Find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0, maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
// Test Cases
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")



// String Compression
// Question: Compress an array of characters in place by replacing consecutive duplicates
// with the character and count.
function compress(chars) {
  let write = 0, read = 0;
  while (read < chars.length) {
    const char = chars[read];
    let count = 0;
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }
    chars[write++] = char;
    if (count > 1) {
      for (const digit of String(count)) {
        chars[write++] = digit;
      }
    }
  }
  return write;
}
// Test Cases
const chars1 = ["a", "a", "b", "b", "c", "c", "c"];
// console.log(compress(chars1)); // Output: 6
// console.log(chars1.slice(0, 6)); // ["a", "2", "b", "2", "c", "3"]




// =====================================================
// OBJECT
// =====================================================

// What will be the output of the following question?

let a = {
  name: "I love js",
  pin: 70000
};

function changeObject(v = { ...a }) {
  console.log(v);
}

// Uncomment one line at a time to test
// changeObject(null);
// changeObject(undefined);



// What will be the output of the following question?

function changeProperty(person) {
  person.age = 25;  // Modifies the original object

  person = { 
    name: "John", 
    age: 50 
  }; // Reassigning person to a new object (doesn't affect original reference)

  return person;
}

const personObj1 = { name: "Alex", age: 30 };

const personObj2 = changeProperty(personObj1);

// console.log(personObj1); // Output?
// console.log(personObj2); // Output?


// JSON.parse() and JSON.stringify()

const myObject = {
  name: "John Doe",
  age: 30,
  isActive: true,
  address: {
    street: "123 Main St",
    city: "Anytown"
  },
  hobbies: ["reading", "hiking"],
  birthdate: new Date('2000-01-01')
};

// console.log(myObject)
// const jsonString = JSON.stringify(myObject, null, 2); // The '2' argument adds indentation for readability
// console.log(jsonString);




// Shallow Copy

