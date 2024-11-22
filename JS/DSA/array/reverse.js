const arr = [10, 6, 7, 2, 3, 5, 9, 16, 91, 22]

// recursive way
const reverse_arr = (arr, start, end) => {
    let temp = null
    if (start <= end) {
        // console.log(arr) //swap
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        reverse_arr(arr, start + 1, end - 1)
    }
    return arr
}
// const res = reverse_arr(arr, 0, arr.length - 1)
// console.log(res)

// optimise way
// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = temp
// }
// console.log(arr)

// other way
let left = 0
let right = arr.length-1
while (left <right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
}

console.log(arr)