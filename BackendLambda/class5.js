// console.log(process.env)
// console.log(module)
// console.log(require)
// console.log(__dirname)
// console.log(console)
// console.log(global)

// const x = setTimeout(function exec() {
//     console.log('Complete timer')
// }, 10000)

// console.log(x)
// clearInterval(x)

let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]); 
}

const obj = {
    name:'pd',
    add:'bangalore',
    age:27,
    pin:560068
}

// for (const element in obj) {
//     console.log(element)
// }

let count = 0
const inc = () => ++count
[inc(), inc(), inc()]
console.log(count)


const x = ()=>{}
console.log(x.name)

function foo(x,y,z){
  return x+y+z
}

const bar = foo.bind(null, 1)
console.log(bar(2,3))

// (function f() {
//   console.log(typeof f)
// })()

const add = (a,b)=>a+b
console.log(add(5))




function greet() {
  console.log('Hello ', this.name)
}
const obj1 = greet()
const obj2 = new greet()
console.log('-----------')
console.log(obj1)
console.log(obj2)



const employee = {
  name: 'Pratap',
  age: 23,
  adhaarCardNo: 7000000000,
  accountNo: 9100000000000,
  emailId: 'pd@example.com'
};

const empProxy = new Proxy(employee, {
  get(target, prop, receiver) {
    if (prop === 'adhaarCardNo' || prop === 'accountNo') {
      console.log('Warning: Sensitive info accessed');

      const value = String(target[prop]);
      return value.slice(-4); // return last 4 digits
    }

    return Reflect.get(target, prop, receiver);
  }
});

console.log(empProxy.accountNo);     // "0000"
console.log(empProxy.adhaarCardNo);  // "0000"
console.log(empProxy.name);          // "Pratap"


console.log('-----------')
// var name = 'pratap';
// (function() {
//   console.log(name)
//   var name = 'inside iffe'
// })()

// console.log('-----------')
// const user = {
//   name: 'pratap',
//   greet: function() {
//     setTimeout(function() {
//       console.log(`Hi i am ${this.name}`)
//     }, 1000)
//   }
// }

// user.greet()
// console.log('------fix undefined-----')
// const usr = {
//   name: 'pratap',
//   greet: function() {
//     setTimeout(()=> {
//       console.log(`Hi i am ${this.name}`)
//     }, 1000)
//   }
// }

// usr.greet()



console.log('-----------')

function introduction(city) {
  console.log(`introduction hi my name is ${this.name}`)
  console.log(`city: ${city}`)
}

const user1 = {
  name: 'Pratap'
}

introduction.call(user1, 'blr')


console.log('-----------')
const a = {}
const b = {key: 'b'}
const c = {key: 'c'}

a[b] = 'first'
a[c] = 'second'

console.log(a[b])


console.log('-----------')
function greet(name = 'Guest') {
  console.log(`Hello: ${name}`)
}

greet()
greet(null)
greet(undefined)



console.log('-----------')

async function tryIt(fn) {
  try {
    return [null, await fn()]
  } catch (error) {
    return [error, null]
  }
}


// give me in js for build logic


/**
 * Scope & Closures | Chapter 3 | Part 2 - Global unshadowing
Global unshadowing is a trick which we can use to unshadow global “var” and “function” declarations. It doesn’t work for let , const and class declarations.
It’s not recommended for use, its just to understand the global object better.


 */


// Scope & Closures - Understand shadowing fundamentals with a basic example
var studentName = 'Any name'
function printStudent(studentName) {
  studentName = studentName.toUpperCase()
  console.log(studentName)
}
printStudent('new name')
printStudent(studentName)
console.log(studentName)

/**
 * Scope & Closures - Conversation between Scope manager, Compiler and Engine.

Understand the javascript execution as a conversation between the three. This will clear a lot of questions you have in mind about execution phases and will also lay foundation for upcoming topics.
 */

var students = [
  {id:10, name:'a'},
  {id:109, name:'d'},
  {id:7, name:'b'},
  {id:22, name:'p'}
]

function getStudentNames(studentId) {
  for(let student of students){
    if (studentId.id === studentId) {
      return student.name
    }
  }
}

var nextStudent = getStudentNames(22)
console.log(nextStudent)


/**
 *  Scope & Closures - Lexical scopes

The word lexical in lexical scope comes from the lexing stage, where JavaScript decides scopes before code runs.
A fundamentals-first look at why scope behaves the way it does.
 */


/**
 * Polyfilling/transpiling lets modern JavaScript features work in older browsers 🚀
A quick dive into polyfills from the You Don’t Know JavaScript series.
 */