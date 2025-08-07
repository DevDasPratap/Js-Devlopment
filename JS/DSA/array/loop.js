// Normal loop
// for (let i = 0; i < 10; i++) {
//     console.log(`Looping through ${i}`);
// }

// nested loop
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(`Looping through ${i} and ${j}`);
//     }
// }

// multiple nested loops
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         for (let k = 0; k < 5; k++) {
//             console.log(`Looping through ${i}, ${j} and ${k}`);
//         }
//     }
// }

// Multiple variables in a loop
// for (let start = 0, end = 10; start < 10; start++, end--) {
//     console.log(`Looping through start: ${start} and end: ${end}`);
// }

const array = [1, 2, 3, 4, 5];
// for(let start = 0, end = array.length - 1; start < end; start++, end--) {
//     console.log(`Looping through start: ${array[start]} and end: ${array[end]}`);
// }


// Looping through an array with multiple arrays
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Math.min(array2.length, array3.length); i++) {
    // console.log(`Array2 element: ${array2[i]}, Array3 element: ${array3[i]}`);
}

// const fruits = ['apple', 'banana', 'orange'] // 'abcdefgh'  ;
const fruits = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

// for (let index = 0; index < fruits; index++) {
//     console.log(index)
// }
for(let key of Object.entries(fruits)){
    // console.log(key)
}

// fruits.reduce(element => {
//     console.log(element)
// });

const obj = {
  name: 'pd',
  add:{
    vill:'a',
    pin:700000,
    country: 'a'
  }
}

const copyObj = {...obj}

copyObj.age = 10

console.log(obj === copyObj)
console.log(obj, copyObj)