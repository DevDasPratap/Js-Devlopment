// Find Difference Between Two Arrays
// Question: Find elements in arr1 that are not in arr2.

let arr1 = [2, 1, 4, 6, 3];
let arr2 = [1, 7, 8, 3, 2];
// Output: [4, 6]

function findDiffrent(arr1, arr2) {
    const arr = []
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            arr.push(arr1[i])
        }
    }
    return arr
}

const result = findDiffrent(arr1, arr2);
console.log(result);