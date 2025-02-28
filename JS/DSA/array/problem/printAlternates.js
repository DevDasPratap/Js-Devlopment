// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50

function printALternate(array) {
    const arr = []
    for (let index = 0; index < array.length; index = index + 2) {
        arr.push(array[index])
    }
    return arr
}
const array = [10, 20, 30, 40, 50]
// console.log(printALternate(array))




