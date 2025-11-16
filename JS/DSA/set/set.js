/**
 * Problem Statement:
 * -----------------
 * - YouTube: Avoid multiple likes on the same video (e.g., liking a video today and again after 5 days)
 * - Amazon: Avoid duplicate items in a customer's wishlist
 * - Instagram: Avoid duplicate hashtags
 * 
 * Data structure that stores a collection of unique elements:
 * - A Set does not allow duplicate values
 * - JavaScript provides a built-in Set data structure
 * - The concept of Set comes from Mathematics
 * 
 * Characteristics of a Set:
 * - Automatically eliminates duplicate values
 * - Provides fast lookups
 * - Elements in a Set are not stored in any specific order
 */


const mySet = new Set()
console.log(mySet)
mySet.add(4)
mySet.add(5)
mySet.add(5)
mySet.add(8)
console.log(mySet)
console.log(mySet.has(5))
console.log(mySet.has(50))
mySet.delete(8)
console.log(mySet)

// mySet.forEach((value=>console.log(value)))

console.log(typeof mySet)
for (const element of mySet) {
    console.log('element: ', element)
}

/**
 * Use case:
 * remove duplicate from array
 */

const arr = [1,2,3,4,4,5]
const un = [...new Set(arr)]
console.log(typeof un, Array.isArray(un), un)

/**
 * Use case:
 * joining two sets (union), inset set(find common)
 */

const setA = new Set([1,2,3,3])
const setB = new Set([1,2,3,4,4,5])
const setC = [...new Set([...setA, ...setB])]
console.log(setA)
console.log(setB)
console.log(setC)

const interSection = [...setA].filter((x)=>setB.has(x))
console.log(interSection)

const interSectionSet = new Set(interSection)

const diffrentArr = [...setB].filter((x)=> !setA.has(x))
console.log(diffrentArr)