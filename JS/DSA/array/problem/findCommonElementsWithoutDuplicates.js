// Question: Find common elements, but ensure the result has no duplicates.

let arr1 = [2, 1, 4, 6, 3, 2];
let arr2 = [1, 7, 8, 3, 2, 2];

function findCommonElementWithoutDuplicate(arr1, arr2) {
    const common = []
    for (let i = 0; i < arr1.length; i++) {
        // if (arr2.indexOf(arr1[i]) !== -1 && common.indexOf(arr1[i]) === -1) {
        //     common.push(arr1[i])
        // }

        if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
            common.push(arr1[i])
        }
    }
    return common
}

const res = findCommonElementWithoutDuplicate(arr1, arr2)
console.log('res', res)