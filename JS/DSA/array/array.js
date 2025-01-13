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

for (let i = 0; i < numArr.length / 2; i++) {
  let temp = numArr[i]
  numArr[i] = numArr[numArr.length - 1 - i]
  numArr[numArr.length - 1 - i] = temp
}

let left = 0
let right = numArr.length - 1
while (left < right) {
  let temp = numArr[left]
  numArr[left] = numArr[right]
  numArr[right] = temp
  left++
  right--
}

for (let i = 0, j = numArr.length - 1; i < numArr.length / 2; i++, j--) {
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

// Third largest element in an array
// Input: arr[] = [22, 35, 1, 10, 34, 1]
// Output: 10
// Explanation: The largest element of the array is 35 and the second largest element is 34 and the third largest element is 12.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 10 and the third largest element is 5.

function thirdLargestEle(array) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      third = second
      second = first
      first = array[i]
    } else if (array[i] > second) {
      third = second
      second = array[i]
    } else if (array[i] > third) {
      third = array[i]
    }
  }
  return third
}
// console.log(thirdLargestEle([22, 35, 1, 10, 34, 1]))


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

function rotateArrayRecursive(array, d) {
  d = d % array.length
  if (d === 0) {
    return array
  }
  const firstElement = array.shift()
  array.push(firstElement)
  return rotateArrayRecursive(array, d - 1)
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
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

// console.log(isSorted([10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]))


function reverseArray(arr) {
  const rev = []
  let start = 0, end = arr.length - 1
  while (start < arr.length) {
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
  let right = arr.length - 1
  while (left < right) {
    while (arr[left] === 0) {
      left++
    }
    while (arr[right] !== 0) {
      right--
    }
    if (left < right) {
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
  let right = arr.length - 1
  while (left < right) {
    while (arr[left] !== 0) {
      left++
    }
    while (arr[right] === 0) {
      right--
    }
    if (left < right) {
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
for (let i = 1; i <= n; i++) {
  sum += i
}
// console.log('summ', sum)


function findUnion(a, b) {
  // code here
  const map = {}
  for (let i = 0; i < a.length; i++) {
    map[i] = (map[a[i]] || 0) + 1
  }
  for (let i = 0; i < b.length; i++) {
    map[i] = (map[b[i]] || 0) + 1
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

// Maximum product of a triplet (subsequence of size 3) in array
// Input: arr[] = [10, 4, 5, 7, 22]
// Output: 1540
// Explanation: The maximum product of a triplet is 10*7*22 = 1540.
// Input: arr[] = [-10, -3, -5, -6, -20]
// Output: -90


const maximumProduct = function (nums) {
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity
  let min1 = Infinity, min2 = Infinity
  // Traverse the array to find max1, max2, max3 and min1, min2
  for (let num of nums) {
    if (num > max1) {
      max3 = max2
      max2 = max1
      max1 = num
    } else if (num > max2) {
      max3 = max2
      max2 = num
    } else if (num > max3) {
      max3 = num
    }

    if (num < min1) {
      min2 = min1
      min1 = num
    } else if (num < min2) {
      min2 = num
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2)
};

// console.log(maximumProduct([10, 4, 5, 7, 22]))

// Maximum consecutive one’s (or zeros) in a binary array
// Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 1, 1, 1}
// Output: 4
// Explanation: The maximum consecutive 1's in the binary array is 4.
// Input: arr[] = {0, 0, 0, 0}
// Output: 0
// Explanation: There are no consecutive 1's in the binary array.

const maxConsecutiveOnes = function (nums) {
  let count = 0
  let result = 0
  for (let num of nums) {
    if (num === 0) {
      count = 0
    } else {
      count++
      result = Math.max(result, count)
    }
  }
  return result
}

// console.log(maxConsecutiveOnes([1, 1, 0, 0, 1, 0, 1, 1, 1, 1]))

// Move all zeroes to end of array
function moveZeroes(nums) {
  // create a new array to store non-zero elements
  let result = [];

  // first, add all non-zero elements to the new array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    }
  }

  // calculate how many zeros are needed
  let zeroCount = nums.length - result.length;

  // append the zeros to the new array
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  // copy the result array back to the original array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }
  return nums
}

// function moveZeroes(nums) {
//     // position to place the next non-zero element
//     let lastNonZeroFoundAt = 0;

//     // iterate through the array
//     for (let current = 0; current < nums.length; current++) {
//         // check if the current element is non-zero
//         if (nums[current] !== 0) {
//             // swap the elements at current position with the last non-zero position
//             [nums[lastNonZeroFoundAt], nums[current]] = [nums[current], nums[lastNonZeroFoundAt]];
//             // move to the next position for non-zero element
//             lastNonZeroFoundAt++;
//         }
//     }
//     return nums
// }

// console.log(moveZeroes([0, 1, 0, 4, 22]))

// Move zeros to the start/end of the array
// Input: arr[] = {1, 2, 0, 4, 3, 0, 5, 0}
// Output: {0, 0, 0, 1, 2, 4, 3, 5}
// Explanation: All zeros are moved to the start of the array.

function moveZeroesToStart(nums) {

  // initialize the index to place the next non-zero element
  let nonZeroIndex = nums.length - 1;

  // move all non-zero elements to the end of the array
  for (let i = nums.length - 1; i >= 0; i--) { // iterate from the end of the array
    if (nums[i] !== 0) { // check if the element is non-zero
      nums[nonZeroIndex] = nums[i]; // copy the non-zero element
      nonZeroIndex--; // move to the next position
    }
  }

  // fill the remaining elements with zeros
  for (let i = nonZeroIndex; i >= 0; i--) { // iterate from the last non-zero position{
    nums[i] = 0;
  }
  return nums;
}

// console.log(moveZeroesToStart([1, 2, 0, 4, 3, 0, 5, 0]));

// Reverse an Array in groups of given size
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3
// Output: [3, 2, 1, 6, 5, 4, 9, 8, 7]
// Explanation: The array is reversed in groups of 3.
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 5
// Output: [5, 4, 3, 2, 1, 8, 7, 6]

function reverseArrayInGroups(arr, k) {

  for(let i=0; i<arr.length; i+=k){
    let start = i
    let end = Math.min(i+k-1, arr.length-1)
    while(start<end){
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  return arr

  // // iterate through the array in groups of k
  // for (let i = 0; i < arr.length; i += k) {
  //   // reverse the subarray
  //   arr = reverse(arr, i, Math.min(i + k - 1, arr.length - 1));
  // }
  // return arr;
}

// console.log(reverseArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

// create a helper function to reverse the subarray
function reverse(array, start, end) {
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
  return array;
}


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Print the matrix
for (let i = 0; i < matrix.length; i++) {
  let row = "";
  for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + " ";
  }
  // console.log(row);
}

// Array Representation by Compiler
// JavaScript uses row-major order for storing multidimensional arrays.
// Formula for 2D array in row-major order: index = row * columns + column

// Row Major Formula for 2D Arrays
let rows = 3, cols = 3;
let rowIndex = 1, colIndex = 2;
let linearIndexRowMajor = rowIndex * cols + colIndex;
// console.log("Row-Major Index:", linearIndexRowMajor);

// Column Major Formula for 2D Arrays
let linearIndexColMajor = colIndex * rows + rowIndex;
// console.log("Column-Major Index:", linearIndexColMajor);


// Get, Set, Avg, Max Functions
function get(arr, index) {
  return arr[index] ? arr[index] : -1;
}
function set(arr, index, value) {
  arr[index] = value;
}
function avg(arr) {
  // return arr.reduce((sum, val) => sum + val, 0) / arr.length;
  return Math.max(...arr) + Math.min(...arr)
}
function max(arr) {
  return Math.max(...arr);
}
let numbers = [10, 20, 30, 40];
// console.log("Get Element:", get(numbers, 2));
// set(numbers, 2, 35);
// console.log("Set Element:", numbers);
// console.log("Average:", avg(numbers));
// console.log("Max:", max(numbers));

