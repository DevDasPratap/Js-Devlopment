// Find Union of Two Arrays
// Question: Combine two arrays and remove duplicates.
// Output: [2, 1, 4, 6, 3, 7, 8]

let arr1 = [2, 1, 4, 6, 3];
let arr2 = [1, 7, 8, 3, 2];

function removeDuplicate(arr1, arr2) {
    const newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (!newArr.includes(arr1[i])) {
            newArr.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!newArr.includes(arr2[i])) {
            newArr.push(arr2[i])
        }
    }

    return newArr
}

const result = removeDuplicate(arr1, arr2)
console.log(result)