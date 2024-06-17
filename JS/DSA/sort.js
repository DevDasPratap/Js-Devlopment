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

// const res = insertionSort(arr)
// console.log(res)


// Merge Sort
// merge sort using recurssion
const mergeSortRecur = (arr) =>{
    // bas case
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSortRecur(arr.slice(0, mid))
    let right = mergeSortRecur(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let sortedarr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedarr.push(left.shift())
        }else{
            sortedarr.push(right.shift())
        }
    }
    return [...sortedarr, ...left, ...right]
}
// const res = mergeSortRecur(arr)
// console.log(res)

// Quick Sort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const res = quickSort(arr)
console.log(res)

const listStudent = [
    {name: 'Pratap', age: 25},
    {name: 'Das', age: 22},
    {name: 'Subho', age: 30},
    {name: 'Dipu', age: 27},
]

// sort by age
listStudent.sort((a, b)=>{
    return b.age - a.age
})

// console.log(`Sort by age:`)
// console.log(listStudent)

listStudent.sort((a,b)=>{
    if (a.name < b.name) {
        return 1
    }else if(a.name > b.name){
        return -1
    }
    return 0
})
// console.log(`Sort by name:`)
// console.log(listStudent)