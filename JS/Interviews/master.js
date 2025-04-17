// Output: undefined
// Explanation: var is hoisted, meaning the variable declaration (var a;) is moved to the top, but its value remains undefined until assigned.

// console.log(a)
// var a


// Error: ReferenceError: a is not defined
// Explanation: If a is not declared anywhere, accessing it causes a ReferenceError.

// console.log(a)

// Error: ReferenceError: Cannot access 'a' before initialization
// Explanation: let is hoisted but stays in a Temporal Dead Zone (TDZ) until its declaration is executed.

// console.log(a)
// let a


// Error: SyntaxError: Missing initializer in const declaration
// Explanation: const must be initialized at the time of declaration, unlike let and var.

// console.log(a)
// const a

// + operator work concate and addition
// The + operator works for both concatenation and addition, depending on operand types.

// Since b is a string, JavaScript converts a to a string and performs concatenation.
// Implicit Type Conversion (Type Coercion) happens here.

let a = 5
let b = '5'
console.log(a + b) // here not addition it concanitaion

// String First → Everything Becomes a String
let c = 5
let d = 5
console.log('sum of 5 and 5: ' + c + d)
console.log('sum of 5 and 5: ' + (c + d)) //broadmass
console.log(c + d + ' sum of 5 and 5')

/**
 * 'sum of 5 and 5: ' is a string.
 * When + encounters a string, it converts everything after it into strings.
 * So, c + d is not added but concatenated as strings.
 */

// type coursion according operator
console.log('1' + 1);  // Output: "11" (String, because `+` prefers concatenation)
console.log('1' - 1);  // Output: 0 (String '1' is converted to Number)
console.log('1' * 1);  // Output: 1 (Multiplication converts string to number)
console.log('1' / 1);  // Output: 1 (Division converts string to number)
console.log('1' % 1);  // Output: 0 (Modulus converts string to number)
/**
 * + favors concatenation if one operand is a string.
 * Other operators (-, *, /, %) convert the string to a number before calculation.
 */

let x = 10;
let y = 90;
console.log(x % y); // Output: 10 (10 / 90 gives remainder 10)
console.log(y % x); // Output: 0 (90 / 10 has no remainder)
console.log(x / y); // Output: 0.1111... (division result)
console.log(y / x); // Output: 9 (division result)




// > < >= <= !=

console.log(10 <= 7);  // false (10 is not less than or equal to 7)
console.log(10 != 10); // false (10 is equal to 10)
console.log(10 !== 10); // false (`!==` checks value and type)



//  = === !== ==

let p = 91 // assigned
console.log(10 == 10) // both side value check
console.log(10 == '10') // both side value check
console.log(10 === 10) // both side value check with type



// && || where check multiple condition check

console.log(10 > 6 && 15 < 9 && 18 > 9) // if first condition get false didnot check next condition just return false
console.log(10 > 6 || 15 < 9 || 18 > 9) // if any condition true and check till last condition            


// pre post increment/decrement
let i = 9
i = i++ + ++i
console.log(i)


let j = 10, k = 22
let l = j + k + j++ + k++ + ++j + ++k
console.log('j=' + j)
console.log('k=' + k)
console.log('l=' + l)

let m = true
m++
console.log(m) // in js true mean 1, false mean 0

// let n = 1++ // we can use here
// console.log(n) // geting error

let e = 10
// let f = ++(e++)
// console.log(e)
// console.log(f)


/**
 * Condition
 */

if (-1) {
    console.log('a')
}
if (10) {
    console.log('a')
}

let num = 0
console.log(num > 0 ? 'Positive' : 'Negetive')
console.log(num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero')

/**
 * When we use If or Switch
 */

let day = 4;
// switch (day) {
//     case 1:
//         console.log('Sunday');
//         break;  // Added break to prevent fall-through
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     default:
//         console.log('Invalid');
//         break;
// }


// A fall-through condition in a switch statement occurs when a case does not have a break;, causing execution to continue into the next case, regardless of its condition.
switch (day) {
    case 1:
        console.log('Sunday'); // Fall-through occurs here
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    default:
        console.log('Invalid');
        break;
}

day = 1
switch (day) {
    case 1:
    case 2:
        console.log('Weekend')
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    default:
        console.log('Invalid');
        break;
}

switch (true) {
    case 10 > 5:
        console.log('Hello')
        break;
    case 9 > 5:
        console.log('Hi')
        break;
    case 10 < 5:
        console.log('Heooo')
        break;

    default:
        break;
}