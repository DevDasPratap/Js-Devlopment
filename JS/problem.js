// duplicate string removed
const arr = ['ram', 'sam', 'dev', 'devi', 'dev', 'Ram']
const uniqueArr = []
for (let i = 0; i <= arr.length - 1; i++) {
  let count = 0;
  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
  }
  if (count === 1) {
    uniqueArr.push(arr[i])
  }
}
// console.log(uniqueArr)

// ------ deep and shallow copy ------
const obj = {
  name: 'Pratap'
}
const user = obj // not data copy, it copied location/reference
console.log(obj)
console.log(user)

user.name = 'PD'

console.log(obj)
console.log(user)

// not working with premitive data type
let nam = 'das'
let newName = nam
console.log(nam)
console.log(newName)
newName = 'dev'
console.log(nam)
console.log(newName)

// when we copied variable that time copy only data, but when
// we copied object that time copy location/reference

// Shallow copied
// const obj1 = {
//     name:'Pratap',
// }
// // const user1 = Object.assign({},obj1)
// // or
// const user1 = {...obj1}
// console.log(obj1)
// console.log(user1)

// user1.name = 'PDas'
// user1.add.pin = 700000 

// console.log(obj1)
// console.log(user1)


// Deep copied
const obj2 = {
  name: 'Pratap',
  add: {
    city: 'Haldia',
    pin: 721602
  }
}

const user2 = JSON.parse(JSON.stringify(obj2))
console.log(obj2)
console.log(user2)

user2.name = 'ahszv'
user2.add.pin = 700000

console.log(obj2)
console.log(user2)

// even, multiply, total sum
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = newArr.filter((i) => i % 2 === 0).map((a) => a * 10).reduce((acu, cur) => acu + cur)
console.log(result)

// get length with length assigned
const { length } = newArr
console.log(length)


// What will be the output of the following question?

function changeProperty(person) {
  person.age = 25
  person = {
    name: 'jhon',
    age: 50,
  }
  return person;
}

const personObj1 = { name: "Alex", age: 30, }
const personObj2 = changeProperty(personObj1);
console.log(personObj1);
console.log(personObj2);


// What will be the output of the following question?

let a = {
  name: 'I love js',
  pin: 70000
}

function changeObject(v = { ...a }) {
  console.log(v);
}
changeObject(null);
changeObject(undefined)


// What will be the output of the following question?

let obj1 = { name: 'I love js' }
let arrObj = [obj1]
obj1 = null
console.log(arrObj)

// What will be the output of the following question?

const a1 = {};
const b = { key: 'b' };
const c = { key: 'c' };
a1[b] = 123;
a1[c] = 456;
console.log(a1[b]);
console.log(a1[c]);

// What will be the output of the following question?

 var myObject = {
  foo: "bar",
  func: function() {
    console.log("outer func: this.foo = " + this.foo);
  },
  func2:()=>{
    console.log("outer func2: this.foo = " + this.foo);
  }
};
myObject.func();
myObject.func2();