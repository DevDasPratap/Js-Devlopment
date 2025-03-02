// Find Common Elements in Three Arrays
// Question: Find common elements in three arrays.

let arr1 = [2, 1, 4, 6, 3];
let arr2 = [1, 7, 8, 3, 2];
let arr3 = [3, 2, 9, 1];
// Output: [1, 3, 2]

function findCommonThreeArray(arr1, arr2, arr3) {
    const arr = []
    const hash = {}
    for (let i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = (hash[arr1[i]]||0)+1
    }
    for (let i = 0; i < arr2.length; i++) {
        hash[arr2[i]] = (hash[arr2[i]]||0)+1
    }
    for (let i = 0; i < arr3.length; i++) {
        hash[arr3[i]] = (hash[arr3[i]]||0)+1
    }
    for(let [key, value] of Object.entries(hash)){
        if (hash[key] === 3) {
            arr.push(Number(key))
        }
    }
    return arr
}

const result = findCommonThreeArray(arr1, arr2, arr3);
console.log(result);