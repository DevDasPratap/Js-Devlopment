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

// selection sort

function selectionSort(arr) {
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}
// const res = selectionSort(arr)
// console.log(res)

// Insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]
        let start = i-1
        while (start >= 0 && arr[start] > curr) {
            arr[start+1] = arr[start]
            start--
        }
        arr[start+1] = curr
    }
    return arr
}

const res = insertionSort(arr)
console.log(res)