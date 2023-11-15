const arr = [10, 6, 7, 2, 3, 5, 9, 16, 91, 22]
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
const res = reverse_arr(arr, 0, arr.length - 1)
console.log(res)