
// falsy
// false, 0, undefined, null, NaN, ''

// Short Circuit Evaluation in JavaScript: Explained Using AND and OR Operators

/**
 * What is short circuiting
 *  - Short circuting is the evaluation of an expression from left to right
 *    with || and && operators
 *  - Helps to shorten the lines of code
 *  - Complex but very powerful
 *  - Important to understand truthy and falsy
 */

// for && operator
console.log(true && false)
console.log(true && true)
console.log(true && true && false)
console.log(false && true && true) // js code run left to right check first get flase that time short circuit so next code not run

const firstName = 'Pratap'
const midName = null
const lastName = 'Das'

// with traditional way
if (firstName == null || midName == null || lastName == null) {
    console.log('There is a null value')
}

// short circuit way
const firstNullValue = firstName && midName && lastName // if any all value true then last value return or any postion value false that postion short cuircuit break

console.log(firstNullValue)
if (firstNullValue == null) {
    console.log('There is a null value')
}
// another way
if (!(firstName && midName && lastName)) {
    console.log('There is a null value')
}

// short circuiting with || operator
// The || operator will return the first truthy value of all the operands
//  The || operator will return the last value if all of them are falsy
// 


// Nullish Coalescing Assignment Operator

// the ?? operator return right-hand operand if left null/undefined, else left
// nullish assigment

let onlineName = 'spider man'
let realName = 'Pratap'
let nameToUse = null
if (onlineName != null) {
    nameToUse = onlineName
} else {
    nameToUse = realName
}

console.log(nameToUse)

// with nullish
nameToUse = onlineName ?? realName
console.log(nameToUse)


let x=5
let y=4
x = x ?? y
console.log(x)

const ROLE = Symbol("role");

const employee = {
  name: "Alice",
  [ROLE]: "Manager"
};

console.log(employee[ROLE]); // "Manager"
employee[ROLE] = 'Dev'
console.log(employee[ROLE]); // "Manager"


const sym1 = Symbol("hello");
const sym2 = Symbol("hello");

console.log(sym1 === sym2); // false (because each symbol is unique)
