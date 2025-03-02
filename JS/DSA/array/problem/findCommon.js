// Find Intersection Using Sets
// Question: Find common elements using Set for better performance.

let arr1 = [2, 1, 4, 6, 3];
let arr2 = [1, 7, 8, 3, 2];
// Output: [1, 3, 2]

// function findCommon(arr1, arr2) {
//     const arr = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             arr.push(arr1[i])
//         }
//     }
//     return arr
// }

// const result = findCommon(arr1, arr2)
// console.log(result)


function findCommon(arr1, arr2) {
    const set1 = new Set(arr1); // Store unique values from arr1
    const commonElements = new Set(); // Store unique common values

    for (let num of arr2) {
        if (set1.has(num)) {
            commonElements.add(num);
        }
    }

    return [...commonElements];
}

const result = findCommon(arr1, arr2);
console.log(result);
