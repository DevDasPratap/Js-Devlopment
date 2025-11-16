/**
 * Logical Operators
 *  x      |   y  x and y
 * false | false  false
 * true | false   false
 * false | true     false
 * true  | true   true
 * 
 * or gate
 * 
 * not gate
 * 
 * 
 * Special_Numbers_NaN_0_and_Negative_0_Infinity
 * 
 * 0, -0, NaN
*/
// console.log(+0, -0, NaN, 10/null, undefined/null, Infinity, -Infinity, 10 <Infinity, )
// Abstract and Strict Equality Operators == ===

/**
 * Bitwise operators
 * & =>bitwise and
 * | =>bitwise or
 * ^ => bitwise xor
 * ~ => bitwise not
 */

/**
 * Abstract and Strict Equality Operators
 * == Abstract Equality Operators
 * === Strict Equality Operators
 * 
 * == it checks the types of both operands
 *     if type is same, then it calls ===
 *     if types are not same then types conversion occurs (cocrcian) & then comparison is done
 * === it checks types of both the operands if types are diffrent it returns false
 *     if types are same then value comparision occurs
 * 
 * 1 == '1' => true
 * 1 == 1 
 * but when we try 1 == 'one'
 * it 1 == NaN => false
 * 
 * NaN === NaN =>false
 */

/**
 * Typeof operator _ type of null special case
 * 
 */

/**
 * if else
 * a=8,b=4,c=5 is a valid triangle
 * a+b>c
 * c+a>b
 * b+c>a
 * if(a+b>c && b+c>a && a+c>b){
 * console.log('yes')
 * }else{
 * console.log('no')
 * }
 */

let a = 10
let b = 7
let c = 9
if (a + b > c && a + c > b && b + c > a) {
    console.log('yes')
} else {
    console.log('no')
}

/**
 * Minimum of three
 * x<y && y<z
 */

let x = 10
let y = 30
let z = 9
if (x < y && x < z) {
    console.log(x)
} else if (y < x && y < z) {
    console.log(y)
} else {
    console.log(z)
}

/**
 * Scalene Equilateral isosceles
 * if(a==b && b==c && a==c)
 */

/**
 * loops
 */

/**
 * Definition Of Coercion
 * manulally typecasting called: explicit / type conversion
 * auto typecasting by language called: implicit / type conversion
 * 
 * Abstract Operations:
 * there are some set of algorithms, that is prompt in the ecmascript docs, but they are not available for usage in ecmascript.
 * i.e: we as developer cannot use there operation directly
 * ToPrimitive, ToBoolean, ToNumber, ToInteger, ToString
 * 
 * ToNumber:
 * argument type             result
 * undefined                  NaN
 * Null                        +0
 * Boolean                 if argument true return 1, if argument false return 0
 * Number                   return argument (no conversion)
 * String                     See grammer and conversion algorithm below
 * Symbol                     return a typeError exception
 * Object                     apply the following steps
 */

// Abstract Operations
console.log(4-9)
console.log(4-null) // 4 - null -> 4-0 -> 4
console.log(4 - undefined) // 4 - undefined -> 4 - NaN -> NaN

// ToNumber on Strings
console.log(4 - '90') // 4 - 90 -> -86
console.log(4 - '50abc9') // 4 - '50abc9' -> NaN
console.log(1- '0xa') // 1- '0xa' -> -9 why -9?

// Understanding the subtraction operation
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()

// how ToPrimitive Abstract Operation works?
/**
 * if type (input) is an premitive then return same like
 * like: number, string, boolean, 
 * if type(input) object then
 *  - case 1 prefered type is not present (hint-> 'default')
 *  - case 2 prefered type is an string (hint-> 'String')
 *  - case 2 prefered type is an number (hint-> 'Number')
 *  - case 2 prefered type is an string (hint-> 'String')
 * 
 * toString and valueOf
 *  Hint:
 *   - String -> [toString, valueOf]
 *   - Number -> [valueOf, toString]
 */

let obj = {}
console.log(obj.toString())
console.log(obj.valueOf())
console.log(typeof obj.toString())
console.log(typeof obj.valueOf())

// overwrite toString method

obj= {
    toString(){
    // by default [object Object]
    console.log('i am number')
    return 10
},

valueOf(){
    // by default it return same object
}
}
console.log(obj.toString())

const obj10 = {x:10, valueOf(){return 9}}
console.log(obj10.valueOf())

const obj9 = {}
console.log(10 - obj9)
console.log(10 + obj9)

const obj1 = {x:9, y:10}
console.log(100 - obj1)

const obj8 = {x:8, valueOf(){return 99}}
console.log(100 - obj8)

const obj7 = {x:7, valueOf(){return '99'}}
console.log(100 - obj7)
const obj4 = {x:4, toString(){return '99'}}
console.log(100 - obj4)

const obj5 = {x:5, valueOf(){return {}}}
console.log(100 - obj5)

const obj21 = {x:21, toString(){return {}}}
// console.log(100 - obj21)

console.log('--------------')
const obj22 = {}
console.log(obj22)
console.log('22' - obj22) // '22' + obj22 -> ToPrimitive '22' remain '22' and obj22 [object Object]

console.log(22 + obj22)

// ToBoolean inside if-else
    if(10){ // if(inside this convert to boolean)

    } 
/**
 * Abstract Equality and Strict Equality
 * 
 * Abstract Equality:
 *  - if type(x) is the same as type(y) then return the result of performing strict equality comparison x===y 
 *  - if x is null and y is undefined return true
 *  - if x is undefined and y is null , return true
 *  - If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).
 *  - If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.
 *  - If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
 *  - If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
 *  - If Type(x) is either String or Number and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
 *  - If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y.
 */

// Abstract Equality:
console.log('-------Abstract Equality-----')
console.log(null == undefined)
console.log(false === '9')
console.log(10 == '10')
console.log(NaN == NaN)

// Why to use abstract equality
// Coercion with Templated String

// NaN
console.log('----NaN-----')
console.log(Number('22'))
console.log(Number('abc22'))
console.log(Number('abcd'))
console.log(Number('0*a'))
console.log(Number('abcd22wxyz'))
console.log(Number('22mnop22'))

const nan = NaN
console.log(x == NaN)
console.log(isNaN(nan))
console.log(isNaN('pratap')) //input converts the incomming input to a number 
console.log(Number.isNaN('pdas'))
console.log(Number.isNaN(nan))
console.log(typeof(nan), nan !== nan)
console.log()

if (typeof(nan) == 'number' && nan !== nan) {
    console.log(true)
}

const xx = -0
console.log(xx === 0)
console.log(Object.is(xx, -0))
console.log(Object.is(xx, 0))
console.log(Math.sign(-1))
console.log(Math.sign(4))
console.log(Math.sign(-8))
console.log(Math.sign(0))
console.log(xx < 0)


console.log(`-----Scopes-----`)
/**
 * variable, function are then then you call them outher wise you can;t access
 * everything inside your code will be used in one of the following 2 ways
 *  - 1. either it will be getting some value assigend to it
 *  - 2. or some value will be retrive from it
 */
console.log(`-----compile vs interprated`)
//compile error - (parsing phase)
// console.log('Hi')
// function fun() {
//     console...log(1)
//     return 0
// }
// console.log(`Hello`)
// console.log(`World`)
// console.log(`Bye`)

// Interprated error
// console.log('test')
// console.lo('testing....')

//parsing and execution phase

/**
 * basic 3 scope: global, function,  block scope
 */

// global scope
// let name = 'Pratap'
// function fun1() {
//     console.log(name)
// }
// fun1()
// console.log(name)


// function scope
function fun1() {
    let name = 'Pratap'
    console.log(name)
}
fun1()
console.log(name)


// parsing phase
function fun4() {
    console.log(y) // y is accessible here
    var y = 10 // not accessible outside
}

function fun5() {
    console.log(z) // not accessible here
    let z = 10
}

// parshing -> scope resulation (3 type of scope -> global, function, block), execution

/**
 * How we can create a promise
 *  - promise is just javascript object
 *  - creation of a promise object is sync nature
 *     - pending - when we create a new promise object, this is the default state. it represent work in progress.
 *     - fullfil - if the operation is completed successfully
 *     - regected - if operation was not successfull
 * 
 * How can we consume a promise
 */