// let count = 1
// const recurssion = function(num){
//     if (count > num) {
//         return
//     }
//     console.log(`Recurssion: ${count}`)
//     count++
//     recurssion(num)
// }
// const res = recurssion(7)
// console.log(res)
const arr = [10, 50, 90, 70, 80]
let newArrList = []
let i = 0; 
let j = 1;
function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}
const recurssionSort = function (arr) {
    if (isSorted(arr)) {
        newArrList = arr
        return
    } else if (arr[i] < arr[j]) {
        i++
        j++
        recurssionSort(arr)
    } else {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i = 0
        j = 1
        recurssionSort(arr)
    }
}
// const res = recurssionSort(arr)
// console.log(newArrList)

// findOdd
const odd = [4, 7, 10, 9, 8, 7, 16]
const recurssion = function(odd){
    const result = []
    function helperRecurssion(inputOdd) {
        if (inputOdd.length === 0) {
            return false
        }
        if (inputOdd[0] % 2 !== 0) {
            result.push(inputOdd[0])
        }
        helperRecurssion(inputOdd.slice(1))
    }
    helperRecurssion(odd)
    return result
}
const res = recurssion(odd)
console.log(res)