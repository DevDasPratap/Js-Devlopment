// function declare/defenation /statement
function name(params) {
  return params;
}

// function expression
const fn = function (params) {
  //fn is expression(varible)
  return;
};

// annyonumos(no name) function = assign to variable or callback function
// function(params) {
//     return
// }

// First class function = function treat a like variable
// function can pass to another function, used, manupualted, return same like varible do
function squre(params) {
  return params * params;
}
function dispaly(fn) {
  console.log("Squre is: ", fn(5));
}
dispaly(squre);

// IIFE =
// (function name(params) {
//     console.log(params*params)
// })(7)

// (function(x) {
//     return(function(y) {
//         console.log(x)
//     })(2)
// })(3)

// function scope
// Params vs arguments
function name(params) {
  //params
  return;
}
name("values"); //this enetr values are arguments

// sprade vs rest operator
// function multiply(a, b) {
//     console.log(a * b)
// }
// multiply(5, 7)

function multiply(...nums) {
  //rest
  console.log(...nums);
  console.log(nums[0] * nums[1]);
}
const arr = [5, 8, 9];
multiply(...arr); // spred

// callback function

// arrow function
const arrowFn = (a, b) => {
  return a + b;
};
arrowFn(10, 16);
console.log(arrowFn(1, 1));

// Lexical
// var namm = 'Global' //global scope
// var lex = 'Lexical' // lexical scope = outside variable can access inside function but if it
// // declear inside function it cant be access
// function local(params) {
//     var namm = 'Local' // local scope
//     console.log(namm)
// }
// local()

// Closure, scope chain
function subcribe() {
  var n = "subcribe";
  function dispaly() {
    //this is closure
    // inner scope
    console.log(n);
  }
  dispaly();
}
subcribe();

// Closure -> module pattern
var Module = (function () {
  function privateMethod() {
    console.log("Private");
  }
  return {
    publicMethod: function () {
      console.log("Public");
    },
  };
})();
Module.publicMethod();
// Module.privateMethod() // can't access bcz private

// Closure -> call one time
let view;
function subcribe() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already subcribed");
    } else {
      view = "PD";
      console.log("Subcribe to", view);
      called++;
    }
  };
}
let isSubcribed = subcribe();
isSubcribed();
isSubcribed();
isSubcribed();
isSubcribed();
isSubcribed();

// caching/memoize

// diffrent between closure and scope
// Curring = example -> f(a,b) into f(a)(b)
function f(a) {
  return function (b) {
    // console.log(a, b)
    return `${a} ${b}`;
  };
}
// console.log(f(5))
// console.log(f(5),(7))
// console.log(f(5)(7))

// infinite curring
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(2)(4)(10)());


// Convert f(a,b,c) into f(a)(b)(c)
function curry(fn) {
    return function curriedFn(...args){
        console.log(`Args length ${args.length}, fn length ${fn.length}`)
        if(args.length >=  fn.length){
            return fn(...args)
        }else{
            return function(...next){
                return curriedFn(...args, ...next)
            }
        }
    }
}

const sum = (a, b, c) => a + b + c
const totalSum = curry(sum)
console.log(totalSum(1)(2)(3))



// ----Function-----
console.log(`--------Function------`)

// function declaration
function greet(name) {
  console.log(`Hello ${name}`)
}

greet('PD')

// Function expretion
const multiplyNum = function (a, b) {
  return a*b
}
console.log(multiplyNum(5, 7))

// Arrow function
const addNum = (a, b)=> a+b
console.log(addNum(4,5))

// Anonymous function
const numbers = [1, 2, 3, 4]
numbers.forEach(function (nums) {
  console.log(nums)
})

// IIFE - Immediately invoked function expression
// (function() {
//   console.log(`I am IIFE`)
// })()

// generate function
function * generateNumbers(){
  yield 1
  yield 2
  yield 3
}
const generator = generateNumbers()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)


// Callback function
console.log(`--------- Callback function --------`)
// function fetchData(callback) {
//   setTimeout(()=>{
//     const data = 'Get some async data'
//     callback(data)
//   }, 1000)
// }

// fetchData((result)=>{
//   console.log(result)
// })

// Higher order function
/*
In JS, a higher order function is a function that either takes another function as an argument
or returns a function as its results. This concept allow you to create more flexible and reusable.
*/

console.log(`--------- Higher order function --------`)

// Function as argument - this twice function takes another function as an argument and calls it twice.
function twice(fn) {
  fn()
  fn()
}
function greet() {
  console.log('Hello')
}
twice(greet)

// Function as result - MultiplyBy is higher order function that return a function. we create a double function using multiplyBy
function multiplyBy(factor) {
  return function(numbers){
    return numbers * factor
  }
}
const double = multiplyBy(2)
console.log(double(5))

// Array higher order function
const num = [1, 2, 3, 4, 5]
const squared = num.map(x=> x ** 2)
console.log(squared)

// Constructor function
function Person(name, age) {
  this.name = name
  this.age = age
}
const person = new Person('XYZ', 50)
console.log(person)
console.log(person.name)


function higherOrderFunction(operation) {
  return function(a, b){
    return operation(a, b)
  }
}
const addNums = higherOrderFunction((a, b)=>a+b)
console.log(addNums(5,4))