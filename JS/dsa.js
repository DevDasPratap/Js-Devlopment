// DataType => Premitive(Store only single value), Non premitive(Store multiple values)
// Premitive => Number, String, Boolean, null, undefine, BigInt, Symbol
// Non Premitive => Object, Array

// Non premitive (Lists data type)=> Linear, non linear
// Linear => opration only work start and end postion (Stack Queue)
// Non linear => opration can do anywhere (Graphs, Tree)

// Operation => Traverse, Insert, Delete, Search, Sort, Merge
// Array, Stack, Queue, Tree, Graph, Recursion, Search, Sort, Merge, Map, Set

//  --------  Array  ---------
const arr = [10, 7, 8, 9, 90, 91, 16, 22];

// Traverse
for (let i = 0; i < arr.length; i++) {
  // console.log(`Array of ${arr[i]} index ${i}`)
}

// search
// const getValue = 90;
// let found = false
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === getValue) {
//         console.log(`Get array of ${arr[i]} index ${i}`)
//         found = true
//         break
//     }
// }
// if(!found){
//     console.log(`Search data not found`)
// }

// or other way search - Linear search
// function linearSearch(find) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==find) {
//             console.log(`${arr[i]} value find index ${i}`)
//         }
//     }
// }
// linearSearch(90)

// or other way search - Binary search
// function binarySearch(find) {
//     arr.sort((a,b)=>{
//         return a-b
//     })
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === find) {
//             console.log(`${arr[i]} value find index ${i}`)
//         }
//     }
// }
// binarySearch(90)

// Insert
// console.log(arr)
// // arr.splice(4, 0, 111)
// // or
// function insert(postion, value) {
//     for (let i = arr.length-1; i>=0; i--) {
//         if (i >= postion) {
//             arr[i+1] = arr[i]
//             if (i== postion) {
//                 arr[i] = value
//             }
//         }
//     }
// }
// insert(1, 90000)
// console.log(arr)

// delete
// console.log(arr)
// // arr.splice(3, 2)
// function del(postion, value) {
//     for (let i = 0; i < arr.length-1; i++) {
//         arr[i] = arr[i+1]
//     }
//     arr.length=arr.length-1
// }
// del(0)
// console.log(arr)

// Merge two array

const arr1 = [10, 3, 5, 4, 9];
const arr2 = [7, 8, 90, 16, 91];
arr1.push(...arr2);
// const arr3 = arr1.concat(arr2)
// const arr3 = [...arr1, ...arr2]

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// Sort
// const sortArr = [10, 7, 8, 9, 90, 91, 16, 22, 90];
// for (let i = 0; i < sortArr.length; i++) {
// //   console.log(sortArr);
//   for (let j = 0; j < sortArr.length; j++) {
//     if (sortArr[j] > sortArr[j + 1]) {
//       let temp = sortArr[j];
//       sortArr[j] = sortArr[j + 1];
//       sortArr[j + 1] = temp;
//     }
//   }
// }
// console.log('Sorted: ', sortArr);


// Recursion - call itself
// function recursion(a) {
//     console.log('inside recursion', a)
//     if (a<10) {
//         recursion(a+1)
//     }
// }
// let data = 1
// recursion(data)

