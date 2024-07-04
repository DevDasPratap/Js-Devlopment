// Bubble sort
const arr = [4, 10, 5, 9, 7, 8]
function bubbleSort(arr) {
    for(let i = arr.length-1; i > 0; i--){
        for(let j=0; j<i; j++){
            if (arr[j] >arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
// const res = bubbleSort(arr)
// console.log(res)

// Bubble sort other way
function bubbleSortOther(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
// const res = bubbleSortOther(arr)
// console.log(res)

// Bubble sort optimize
function bubbleSortOptimize(arr){
    for(let i = arr.length-1; i > 0; i--){
        let isSwaped
        for(let j=0; j<i; j++){
            if (arr[j] >arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSwaped = true
            }
        }
        if (!isSwaped) {
            break
        }
    }
    return arr
}
// const result = bubbleSortOptimize(arr)
// console.log(result)

function bubbleSortOpt(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // swaped
                swaped(arr, j, j+1)
            }
        }
    }
    return arr
}
const res = bubbleSortOpt(arr)
console.log(res)

function swaped(array, left, right) {
    let temp = array[left]
    array[left] = array[right]
    array[right] = temp
}

function bubbleSortRev(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j+1]) {
                // swaped
                swaped(arr, j, j+1)
            }
        }
    }
    return arr
}
const rev = bubbleSortRev(arr)
console.log(rev)