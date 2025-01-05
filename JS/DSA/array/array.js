// Array data structure - is an ordered collection of elements that can be accessed using a numerical index

// create custom array
class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }
    get(index) {
        return this.data[index]
    }
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
    shift() {
        const firstItem = this.data[0]
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return firstItem
    }
    delete(index) {
        const item = this.data[index]
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i - 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return item
    }
}

const myNewArray = new MyArray()
// console.log(myNewArray)
// console.log(myNewArray.push(10))
// console.log(myNewArray.push(100))
// console.log(myNewArray.push('Apple'))
// console.log(myNewArray.push('Pratap'))
// // console.log(myNewArray)
// // console.log(myNewArray.get(1))
// console.log(myNewArray.pop())
// console.log(myNewArray.shift())
// console.log(myNewArray.delete(100))
// console.log(myNewArray)

// reverse
const str = 'apple banana oragnge'
let rev = ''
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i]
}
// console.log(rev)

const numArr = [10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]

for (let i = 0; i < numArr.length/2; i++) {
    let temp = numArr[i]
    numArr[i] = numArr[numArr.length-1-i]
    numArr[numArr.length-1-i] = temp
}

let left = 0
let right = numArr.length-1
while (left < right) {
    let temp = numArr[left]
    numArr[left] = numArr[right]
    numArr[right] = temp
    left++
    right--
}

for (let i = 0, j=numArr.length-1; i < numArr.length/2; i++, j--) {
    [numArr[i], numArr[j]] = [numArr[j], numArr[i]]
}
// console.log(numArr)

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

const res = reverse_arr(numArr, 0, numArr.length - 1)
// console.log(res)

// palindrom
const palindrom = 'cddc'
let palin = ''
for (let i = palindrom.length - 1; i >= 0; i--) {
    palin += palindrom[i]
}

// console.log('palindrom ? ', palindrom === palin ? 'yes' : 'no')

// sentence capitalize first char
const myName = 'pratap das'
const words = myName.split(' ')
let sentence = ''
for (let i = 0; i < words.length; i++) {
    if (myName[i].charAt(0)) {
        sentence += words[i][0].toUpperCase() + words[i].slice(1) + ' '
    }
}
// console.log(sentence)

// fizzBuzz
// const num = 10
// for (let i = 0; i < num; i++) {
//     if (i%3 === 0 && i%5===0) {
//         console.log('FizzFuzz')
//     }else if(i%3===0){
//         console.log('Fizz')
//     }else if(i%5===0){
//         console.log('Fuzz')
//     }
// }

// max profit


const array = [10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]
// Second Largest
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

const findSecondLargest = (array) => {
    let largest = -Infinity; // Start with the smallest possible value
    let secondLargest = -Infinity; // Start with the smallest possible value
    let secondLargestIndex = -1; // Default value if no second-largest exists

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest; // Update second largest
            secondLargestIndex = array.indexOf(secondLargest); // Store index of previous largest
            largest = array[i]; // Update largest
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i]; // Update second largest
            secondLargestIndex = i; // Store index of second largest
        }
    }

    return { secondLargest, secondLargestIndex };
};
// const getSecondLargest = findSecondLargest(array)
// console.log(getSecondLargest)

// function secondLargestEle(array) {
//     const srt = array.sort((a,b)=>a-b)
//     for(let i = srt.length-2; i>=0; i--){
//         if(srt[i] !== srt[srt.length-1]){
//             return srt[i]
//         }
//     }
//     return -1
// }
// console.log(secondLargestEle(array))

// Move All Zeroes to End
// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
// Input: arr[] = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.
// Input: arr[] = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.

const moveAllZeroToEnd = (array) => {
    let nonZeroIndex = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[nonZeroIndex] = array[i]
            nonZeroIndex++
        }
    }
    for (let j = nonZeroIndex; j < array.length; j++) {
        array[j] = 0
    }
    return array
}
const getMoveZeroResult = moveAllZeroToEnd(array)
// console.log(getMoveZeroResult)

// Rotate Array
// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
// Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
// Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
// Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
// Input: arr[] = [7, 3, 9, 1], d = 9
// Output: [3, 9, 1, 7]
// Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.

function rotatedArray(array, position) {
    // Handle cases where position > array.length
    position = position % array.length;

    const first = [];
    const second = [];

    // Collect elements before the position
    for (let i = 0; i < position; i++) {
        first.push(array[i]);
    }

    // Collect elements from the position to the end
    for (let j = position; j < array.length; j++) {
        second.push(array[j]);
    }

    // Return the concatenated rotated array
    return [...second, ...first];
}
//  console.log(rotatedArray([7, 3, 9, 1], position=9))

function rotateArrayRecursive(array, d){
    d = d % array.length
    if (d === 0) {
        return array
    }
    const firstElement = array.shift()
    array.push(firstElement)
    return rotateArrayRecursive(array, d-1)
}
// console.log(rotateArrayRecursive([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3));


function maxIndex(arr) {
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[index]) {
            index = i
        }
    }
    return index
}

// console.log(maxIndex([10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]))

function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            return false
        }
    }
    return true
}

// console.log(isSorted([10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]))


function reverseArray(arr) {
    const rev = []
    let start = 0, end = arr.length-1
    while(start < arr.length){
        rev[end] = arr[start]
        start++
        end--
    }
    return rev
}

// console.log(reverseArray([10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]))

// two pointer
function moveZeroLeft(arr) {
    let left = 0
    let right = arr.length-1
    while (left <right) {
        while (arr[left]===0) {
            left++
        }
        while (arr[right] !== 0) {
            right--
        }
        if (left<right) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }
    }
    return arr
}

// console.log(moveZeroLeft([10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]))

function moveZeroRight(arr) {
    let left = 0
    let right = arr.length-1
    while (left <right) {
        while (arr[left]!==0) {
            left++
        }
        while (arr[right] === 0) {
            right--
        }
        if (left<right) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }
    }
    return arr
}

// console.log(moveZeroRight([10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]))
const n = 5
let sum = 0
for(let i=1; i<=n; i++){
  sum += i
}
// console.log('summ', sum)


function findUnion(a, b) {
    // code here
    const map = {}
        for(let i=0; i<a.length; i++){
            map[i] = (map[a[i]] || 0 )+1
        }
        for(let i=0; i<b.length; i++){
            map[i] = (map[b[i]] || 0 )+1
        }
        let count = Object.keys(map).length
        console.log(count)
}

// findUnion([1, 2, 3, 4, 5], [1, 2, 3])


// https://www.geeksforgeeks.org/array-data-structure-guide/
// https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/


// Find the Minimum and Maximum Element in an Array
function maxMin(array) {
    // const max = Math.max(...array)
    // const min = Math.min(...array)
  
    const min = getMin(array)
    const max = getMax(array)
  
    return [min, max]
  }
  function getMin(array) {
    let min = Infinity
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]
      }
    }
    return min
  }
  function getMax(array) {
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]
      }
    }
    return max
  }
//   console.log(maxMin([22, 14, 8, 17, 35, 3]))

const arr = [1, 2, 3];
// console.table(arr); // Shows detailed information in the console

const maximumProduct = function(nums) {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity
    let min1 = Infinity, min2 = Infinity
    // Traverse the array to find max1, max2, max3 and min1, min2
    for(let num of nums){
        if(num > max1){
            max3 = max2
            max2 = max1
            max1 = num
        }else if(num > max2){
            max3 = max2
            max2 = num
        }else if(num > max3){
            max3 = num
        }

        if(num < min1){
            min2 = min1
            min1 = num
        }else if(num < min2){
            min2 = num
        }
    }
    return Math.max(max1*max2*max3, max1*min1*min2)
};

console.log(maximumProduct([1,2,3,4]))