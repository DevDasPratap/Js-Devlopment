const strArr = ["hi", "Hello", "Dev", "Kolkata", "new town"];
const arr = [5, 1, 10, 90, 91, 11, 10, 11, 16, 90, 9, 7, 8, 10, 90];

// ------- reverse ---------
const tempArr = [];
// for (let i = 0; i < arr.length; i++) {
//         tempArr.unshift(arr[i])
// }
// console.log(tempArr)

for (let i = arr.length - 1; i >= 0; i--) {
  tempArr.push(arr[i]);
}
// console.log(tempArr);

// arr.reverse() //change orginal array
// console.log(arr)

// console.log(tempArr)
// console.log(tempArr)

// ------ Find the maximum number in an array --------
// const maxVal = Math.max(...arr)
// console.log(maxVal)

let maxN = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxN) {
    maxN = arr[i];
  }
}
// console.log(maxN)

// -------- Calculate the sum of all numbers in an array --------

let sumArr = null;
for (let i = 0; i < arr.length; i++) {
  sumArr += arr[i];
}
// console.log(sumArr)

// -------- Remove duplicates from an array --------

// const unique = [...new Set(arr)]
// console.log(unique)

const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}
// console.log(uniqueArr)

const duplicateArr = [];
for (let i = 0; i < arr.length; i++) {
  if (duplicateArr.includes(arr[i])) {
    duplicateArr = arr[i].pop();
  }
}
// console.log(duplicateArr)

const uniqueArray = [];
const duplicateArray = [];
const checkDuplicate = new Map();
for (num of arr) {
  if (checkDuplicate.has(num)) {
    duplicateArray.push(num);
  } else if (!checkDuplicate[num]) {
    uniqueArray.push(num);
    checkDuplicate.set(num);
  }
}
// console.log("Unique array is :", uniqueArray);
// console.log(" Duplicate array is: ", duplicateArray);


// arr.sort((a,b)=>{
//     return a - b
// })
// console.log(arr)


// map in array
// const planets = ['Mercury', 'Venus', 'Erath', 'Mars']
// planets.push('Jupiter')
// console.log(planets)

// const newPlanet = planets.map((planet, index)=>planet+'-'+ index)
// console.log(newPlanet)

const iteam = ['light', 'bnana', 'phone', 'book', 'note']
// const plurals = iteam.map((item)=>{
//   return `${item}s`
// })
// const plurals = iteam.map((item)=>{
//   if (item === 'phone') {
//     return 'mobile'
//   }
//   return item+'s'
// })
// console.log(plurals)

// filter
const nums = [5,4,7,8,9,10,16]
// const oddNum = nums.filter((n)=>{
//   if (n%2===1) {
//     return true
//   }
// })
// console.log(nums)
// console.log(oddNum)

const nArr = [
  [1,2,3],
  [0,0,1],
  [3,6,9],
  [0,1,2]
]
const hasTwo = nArr.filter((value)=>{
  if (value.includes(2)) {
    return true;
  }
  return false;
})

// console.log(nArr)
// console.log(hasTwo)

