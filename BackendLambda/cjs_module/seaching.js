const linearSearch = function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===x) {
            return i
        }
    }
    return undefined
}

const binarySearch = function search(arr, x) {
    let first = 0, last = arr.length-1
    while (first<=last) {
        const mid = first + Math.floor((last-first)/2)
        if (arr[mid] === x) {
            return mid
        }else if(arr[mid] < x){
            first = mid + 1
        }else{
            last = mid-1
        }
    }
    return undefined
}

module.exports = {
    linearSearch,
    binarySearch
}