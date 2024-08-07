// 😎 Arrays:
const array = [1, 9, 8, 4, 5, 10, 5, 8]
const array2 = [4, 5, 6, 7, 8];
// 1. Reverse an array.
// 2. Find the maximum number in an array.
// 3. Calculate the sum of all numbers in an array.
// 4. Remove duplicates from an array.
// 5. Implement a custom sorting algorithm for an array.
// 6. Find the intersection of two arrays.
// 7. Rotate an array to the right by a specific number of positions.
// 8. Find the largest contiguous subarray sum.
// 9. Check if an array is a palindrome.
// 10. Implement a function to shuffle an array.

// 😎 Objects:
const A = {
    name: 'pd',
    add: 'Kolkata'
}
const B = {
    name: 'Das',
    add: 'Haldia'
}


// 11. Merge two objects into one.
// 12. Deeply clone an object.
// 13. Serialize and deserialize JSON objects.
// 14. Check if two objects are equal (deep comparison).
// 15. Transform an array of objects into an object with key-value pairs.
// 16. Create a class and demonstrate inheritance.
// 17. Iterate over the properties of an object.
// 18. Filter an object to include specific key-value pairs based on a condition.
// 19. Sort an array of objects based on a specific property.
// 20. Simulate private members in JavaScript objects.

// 😎 Strings:

// 21. Reverse a string.
// 22. Check if a string is a palindrome.
// 23. Check if two strings are anagrams of each other.
// 24. Compress a string by counting consecutive characters.
// 25. Capitalize the first letter of each word in a sentence.
// 26. Determine if one string is a rotation of another.
// 27. Generate all permutations of a string.
// 28. Truncate a string to a specified length and add ellipsis if necessary.
// 29. Validate if a string contains only valid characters (e.g., alphanumeric).
// 30. Count the number of occurrences of a substring in a larger string.


// #Day1: Reverse an Array:
// There are multiple approaches to reverse an array in JavaScript
// Approach 1: Using the reverse() method
// Approach 2: Using the spread operator
// Approach 3: Using the map() method
// Approach 4: Using a for...of loop
// Approach 5: Using a while loop
// Approach 6: Using the reduce() method
// Approach 7: Using a for loop
// Approach 8: Using recursion

// #Day2 #30daysofcode
// 😆 Find the maximum number in an array.
// There are multiple approaches in JavaScript
// Approach 1: Using the Math.max() function and the spread operator
// Approach 2: Using the reduce() method
// Approach 3: Using the sort() method
// Approach 4: Using the Math.max() function with apply()
// Approach 5: Using the forEach() method
// Approach 6: Using a for loop

// #Day3 #30daysofcode
// 😆 Calculate the sum of all numbers in an array.
// There are multiple approaches in JavaScript:
// Approach 1: Using a for loop
// Approach 2: Using the reduce() method
// Approach 3: Using a forEach() loop
// Approach 4: Using a for...of loop
// Approach 5: Using the for...in loop
// Approach 6: Using the while loop

// #Day4 #30daysofcode
// 😆 Remove duplicates from an array.
// There are multiple approaches in JavaScript:
// Approach 1: Using sets
// Approach 2: Using filter
// Approach 3: Using reduce:
// Approach 4: Using for-of loop
// Approach 5: Using forEach
// Approach 6: Using indexof
// Approach 7: Using map

// Approach 1
// const orginal = [1,2,3,4,5]
// orginal.reverse()
// console.log(orginal)

// Approach 2
// const sp = [...orginal].reverse()
// console.log(sp)

// Approach 3
// const reversed = orginal.map((val, index, arr)=>val).reverse()
// console.log(reversed)

// Approach 4
// let data = []
// for (const iterator of orginal) {
    //     data.unshift(iterator)
    // }
    // console.log(data)
    
    
// Approach 5
// let start = 0
// let store =[]
// while (start < orginal.length) {
//     store.unshift(orginal[start])
//     start++
// }
// console.log(store)

// Approach 6
// const store = []
// let n= orginal.length
// for(let i in orginal){
// store.push(orginal[n-i-1])
// }
// console.log(store)

// Reverse an array.
const arr = [1, 9, 8, 4, 5, 10, 5, 8]

const reverseArr = function(arr) {
    // return arr.reverse()

    // const rev = []
    // for (let i = 0; i < arr.length; i++) {
    //     rev.unshift(arr[i])
    // }
    return rev
}

// const res = reverseArr(arr)
// console.log(res)

// Find the maximum number in an array.

const findLarge = function (arr) {
    const large = arr.sort((a,b)=>a-b)
    return large[large.length-1]
}

// const res = findLarge(arr)
// console.log(res)

// const array = [1, 9, 8, 4, 5, 10, 5, 8]
// const maxNumberArray = (array)=>{
//     let maxnum = 0
//     for(let i = 0; i < array.length; i++){
//         if (array[i] > maxnum) {
//             maxnum = array[i]
//         }
//     }
//     return maxnum
// }
// const result = maxNumberArray(array)
// console.log(result) 


// const maxNumberArray = (array)=>{
//     return Math.max(...array)
// }
// const result = maxNumberArray(array)
// console.log(result) 


// const array = [1, 9, 8, 4, 5, 10, 5, 8]
// const maxNumberArray = (array)=>{
//     const num = array.reduce((prev, curr)=>{
//         return curr > prev ? curr : prev
//     })
//     return num
// }
// const result = maxNumberArray(array)
// console.log(result) 


// Calculate the sum of all numbers in an array.

const sum = function (arr) {
    let all = 0
    for (let i = 0; i < arr.length; i++) {
        all += arr[i]
    }
    return all
}
// const res = sum(arr)
// console.log(res)

// Remove duplicates from an array.

const dup = function (arr) {
    const unique = []
    for (let i = 0; i < arr.length; i++) {
        if (unique[i] !== arr[i+1]) {
            unique.push(arr[i])
        }
    }
    return unique
}

const res = dup(arr)
// console.log(res)

// const uniqueArray = (array)=>{
//     return [...new Set(array)]
// }
// const result = uniqueArray(array)
// console.log(result) 


// const sortArray = (array)=>{
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j] > array[j+1]) {
//                 const temp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = temp
//             }
//         }
//     }
//     return array
// }
// const result = sortArray(array)
// console.log(result) 


// const sortArray = (array)=>{
//     return array.sort((a,b)=> a - b)
// }
// const result = sortArray(array)
// console.log(result) 

// const insertsecArray = (array, array2)=>{
//     const intersection = []
//     const uniqueArray2 = new Set(array2)
//     for (let i = 0; i < array.length; i++) {
//         if (uniqueArray2.has(array[i])) {
//             intersection.push(array[i]);
//         }
//     }
//     return intersection
// }
// const result = insertsecArray(array, array2)
// console.log(result) 


// const rotateArray = (array, position)=>{
//     const arrayPartB = []
//     const arrayPartA = []
//     for(let i = 0; i<array.length; i++){
//         if (i <= position) {
//             arrayPartA.push(array[i])
//         }else{
//             arrayPartB.push(array[i])
//         }
//     }
//     return [...arrayPartB, ...arrayPartA]
// }
// const result = rotateArray(array, 2)
// console.log(result) 

// const isPalindrome = (array)=>{
//     const revArr = [...array].reverse()
//     console.log(JSON.stringify(revArr))
//     console.log(JSON.stringify(array))
//     return JSON.stringify(revArr) === JSON.stringify(array)
// }
// const result = isPalindrome(array)
// console.log(result)


// const obj = {...A, ...B}
// console.log(obj)

// const obj = Object.assign({}, A, B)
// console.log(obj)


// const obj = A
// obj['pin'] = '70000'
// console.log(obj)
// console.log(A)


// const serialize = JSON.stringify(A)
// console.log(serialize)
// const deserialize = JSON.parse(serialize)
// console.log(deserialize)



// const deepEqual = (A, B)=>{
//     if(A === B) return true
//     if (typeof A !== 'object' || A === null || typeof B !== 'object' || B === null) return false
//     const keyA = Object.keys(A)
//     const keyB = Object.keys(B)
//     if (keyA.length !== keyB.length) return false
//     for (const key of keyA) {
//         if (!keyB.includes(key)) return false
//     }
//     return true
// }
// const result = deepEqual(A, B)
// console.log(result)