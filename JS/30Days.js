// 😎 Arrays:

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
console.log(res)