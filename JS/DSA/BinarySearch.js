const bs = [5, 4, 1, 10, 8, 9, 16, 91, 22]
function binarySearch(arr, target) {
    if (arr.length < 1) {
        return false
    }
    arr = arr.sort((a, b) => a - b)
    console.log(arr)
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] < target) {
            start = mid + 1
        } else if (arr[mid] > target) {
            end = mid - 1
        } else {
            return mid
        }
    }
    return -1
}
// console.log(binarySearch(bs, 9))

// Binary search using recurssion
const bss = [1, 4, 5, 8, 9, 10, 16, 91]
const target = 9
const binarySearchRecurssion = (arr, target)=>{
    return binarySearchUtil(arr, target, 0, arr.length)
}
const binarySearchUtil = (arr, target, start, end)=>{
    if (start > end) {
        return -1
    }
    let mid = Math.floor((start+end)/2)
    if (arr[mid] === target) {
        return mid
    }else if(arr[mid] < target){
        return binarySearchUtil(arr, target, start, mid - 1)
    }else{
        return binarySearchUtil(arr, target, mid + 1, end)
    }
}

const res = binarySearchRecurssion(bss, target)
console.log(res)