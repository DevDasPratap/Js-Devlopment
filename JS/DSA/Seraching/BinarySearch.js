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
const binarySearchRecurssion = (arr, target) => {
    return binarySearchUtil(arr, target, 0, arr.length)
}
const binarySearchUtil = (arr, target, start, end) => {
    if (start > end) {
        return -1
    }
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] < target) {
        return binarySearchUtil(arr, target, start, mid - 1)
    } else {
        return binarySearchUtil(arr, target, mid + 1, end)
    }
}

// const res = binarySearchRecurssion(bss, target)
// console.log(res)

// Index of first occurrence in sorted
const array = [1, 1, 2, 2, 2, 3, 4, 7, 8, 8];
function firstOccurence(array, target) {
    const length = array.length
    let start = 0;
    let end = length - 1
    let res = -1
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (array[mid] > target) {
            end = mid - 1
        } else if (array[mid] < target) {
            start = mid + 1
        } else {
            res = mid
            end = mid - 1
        }
    }
    return res
}
// console.log(firstOccurence(array, 2))

// Index of last occurrence in sorted
function lastOccurrence(array, target) {
    const length = array.length
    let start = 0
    let end = length - 1
    let lastIndex = -1
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (array[mid] === target) {
            lastIndex = mid
            start = mid + 1
        } else if (array[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return lastIndex
}
// console.log(lastOccurrence(array, 8))

// Count Occurrences in Sorted
function countOccurrences(array, target) {
    const first = firstOccurence(array, target);
    if (first === -1) {
        return 0;
    }

    const last = lastOccurrence(array, target);
    return last - first + 1;
}
// console.log(countOccurrences(array, 2))

// Binary search reverse order sorted array
function reverseBS(array, target) {
    const length = array.length
    let start = 0, end = length-1
    while (start <= end) {
        const mid = Math.floor((start+end)/2)
        if (array[mid] === target) {
            return mid
        }else if (array[mid] < target) {
            end = mid - 1 // move left
        }else{
            start = mid+1 // move right
        }
    }
    return -1
}
// console.log(reverseBS([22,21,16,10,9,8,7], 9))

// 