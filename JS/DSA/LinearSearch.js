const ls = [5,2,4,1,10,8,9,16,91,22]
function leanerSearch(arr, target) {
    if (arr.length <= 1 ) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            console.log(`Target ${arr[i]} found at index: ${i}`)
            return target
        }
    }
    return -1
}
console.log(leanerSearch(ls, 10))