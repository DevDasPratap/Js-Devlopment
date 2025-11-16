// two pointer
// kadance algo
// sliding window
// prefix sum
// slow fast
// hash maps

// Important Algorithm and Problem on 1D-Arrays
// Array Reversal
const arr = [7, 8, 9, 10]

function arrayReversal(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr
}

// console.log(arrayReversal(arr))


// Array Rotations
function arrayRotations(arr, k) {
    let len = arr.length
    if (len === 0) {
        return arr
    }

    k = k % len
    console.log('k', k)
    // Reverse last k numbers
    arrayReverse(arr, len - k, len - 1)

    // Reverse the first n-k terms
    arrayReverse(arr, 0, len - k - 1)

    // Reverse the entire array
    arrayReverse(arr, 0, len - 1)

    return arr
}

function arrayReverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr
}

// Example
// console.log(arrayRotations(arr, 1)) // [5, 1, 2, 3, 4]
// console.log(arrayRotations([1, 2, 3, 4, 5], 2)) // [4, 5, 1, 2, 3]


// two sum
/**
 * question should be array or linkedlist
 * sorted data/ if required sort then to easy (when return number then we can sort, but when return index we cant be sort)
 * merge, remove duplicate, rearange, 
 * find pair, triple, quarduple
 * if question on linkedlist and mention detect cycle
 * 
 */

function twoSum(nums, target) {
    let left = 0
    let right = nums.length - 1
    let count = 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log(`count: ${count}, mid: ${mid}`)
        count++
        if (nums[mid] === target) {
          return mid;
        }
        else if (nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }

        // const mid = nums[left] + nums[right]
        // if (mid === target) {
        //     return [left, right]
        // }else if(mid < target){
        //     left++
        // }else{
        //     right--
        // }
    }
    return -1
};

const nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))