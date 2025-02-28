// Question: Find elements that are unique to each array (not common).

let arr1 = [2, 1, 4, 6, 3];
let arr2 = [1, 7, 8, 3, 2];
// function findElementsUniquetoEachArray(arr1, arr2) {
//     const unique = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (!arr2.includes(arr1[i])) {
//             unique.push(arr1[i])
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if (!arr1.includes(arr2[i])) {
//             unique.push(arr2[i])
//         }
//     }
//     return unique
// }

function findElementsUniquetoEachArray(arr1, arr2) {
    const map = {}
    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = (map[arr1[i]] || 0)+1
    }
    for (let i = 0; i < arr2.length; i++) {
        map[arr2[i]] = (map[arr2[i]] || 0)+1
    }

    const unique = []
    for (let [key, value] of Object.entries(map)) {
        if (value == 1) {
            unique.push(Number(key))
        }
    }
    return unique
}

const res = findElementsUniquetoEachArray(arr1, arr2)
console.log('res', res)