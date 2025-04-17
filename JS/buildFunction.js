/**
 * Function:
 * What is a function?
 * A function is a block of code that performs a specific task.
 * It can take input parameters, perform operations, and return a value.
 * Functions help in code reusability and modularity.
 * They can be defined using the function keyword or as arrow functions.
 * 
 * Defining a function:
 * function functionName(parameter1, parameter2) {
 *     // Function body
 *     // Perform operations
 *     // Return a value (optional)
 * }
 * 
 * Function as expression:
 * const functionName = function(parameter1, parameter2) {
 *     // Function body
 *     // Perform operations
 *     // Return a value (optional)
 * }
 * 
 * Default rest parameter:
 * function functionName(parameter1, parameter2, ...rest) {
 *     // Function body
 *     // Perform operations
 *     // Return a value (optional)
 * }
 * 
 * Function nesting:
 * A function can call another function within its body.
 * This is known as function nesting.
 * It allows for better organization of code and separation of concerns.
 * 
 * Example:
 * function outerFunction() {
 *     // Outer function body
 *     function innerFunction() {
 *         // Inner function body
 *     }
 *    innerFunction(); // Calling the inner function
 * }
 * 
 * Callback function:
 * A callback function is a function passed as an argument to another function.
 * It allows for asynchronous programming and event handling.
 * 
 * Example:
 * function callbackExample(callback) {
 *     // Perform some operations
 *     callback(); // Call the callback function
 * }
 * 
 * Pure function:
 * A pure function is a function that always returns the same output for the same input.
 * It does not have any side effects and does not modify any external state.
 * Pure functions are easier to test and reason about.
 * 
 * Example:
 * function pureFunction(a, b) {
 *     return a + b; // Always returns the same output for the same input
 * }
 * 
 * Higher-order function:
 * A higher-order function is a function that takes one or more functions as arguments
 * or returns a function as its result.
 * 
 * Example:
 * function higherOrderFunction(callback) {
 *     // Perform some operations
 *     return function() {
 *         // Inner function body
 *     }
 * }
 * 
 * Arrow function:
 * An arrow function is a shorter syntax for writing functions in JavaScript.
 * It does not have its own this context and is lexically bound.
 * It is often used for writing anonymous functions or callbacks.
 * 
 * Example:
 * const arrowFunction = (parameter1, parameter2) => {
 *     // Function body
 *     // Perform operations
 *     // Return a value (optional)
 * }
 * 
 * IIFE (Immediately Invoked Function Expression):
 * An IIFE is a function that is executed immediately after it is defined.
 * It is often used to create a private scope and avoid polluting the global namespace.
 * 
 * Example:
 * (function() {
 *     // Function body
 *     // Perform operations
 * })(); // Immediately invoked
 * 
 * // usecase: Building plugins or libraries that run immediately in isolataed scope
 * 
 * Callstack:
 * The call stack is a data structure that keeps track of function calls in JavaScript.
 * When a function is called, it is pushed onto the stack.
 * When the function returns, it is popped off the stack.
 * The call stack helps in managing function execution and handling errors.
 * 
 * Example:
 * function firstFunction() {
 *     secondFunction(); // Call the second function
 * }
 * 
 * function secondFunction() {
 *     // Function body
 * }
 * 
 * 
 * Hoisting:
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved
 * to the top of their containing scope during the compilation phase.
 * This allows functions to be called before they are defined in the code.
 * 
 * Example:
 * function hoistedFunction() {
 *     console.log("This function is hoisted");
 * }
 * 
 * // Hoisting with variables
 * console.log(hoistedVariable); // undefined
 * var hoistedVariable = "This variable is hoisted";
 * 
 * 
 * Scope:
 * Scope refers to the visibility and accessibility of variables and functions in JavaScript.
 * There are two types of scope:
 * 1. Global scope: Variables and functions declared outside any function are in the global scope.
 *   They can be accessed from anywhere in the code.
 * 2. Local scope: Variables and functions declared inside a function are in the local scope.
 *  They can only be accessed within that function.
 * * Example:
 * var globalVariable = "I am a global variable"; // Global scope
 * 
 * function localFunction() {
 *     var localVariable = "I am a local variable"; // Local scope
 *     console.log(globalVariable); // Accessible
 *     console.log(localVariable); // Accessible
 * }
 * 
 * Clousure:
 * A closure is a feature in JavaScript where an inner function has access to the outer function's variables.
 * Closures are created when a function is defined inside another function.
 * They allow for data encapsulation and private variables.
 * * Example:
 * function outerFunction() {
 *     var outerVariable = "I am an outer variable"; // Outer variable
 *    function innerFunction() {
 *        console.log(outerVariable); // Accessing outer variable
 *    }
 *    return innerFunction; // Returning inner function
 * }
 * 
 */

function outer() {
    console.log('Outer')
    function inner() {
        console.log('Inner')
    }
    inner() // Calling the inner function
    // This inner fn is not accessible outside the outer function
}

const getInnerFuntion = outer()
console.log(getInnerFuntion)

function outerFunction() {
    function innerFunction() {
        var innerVariable = "I am an inner variable"; // Outer variable
        console.log(innerVariable); // Accessing outer variable
    }
    return innerFunction; // Returning inner function then accessing it outside the outer function
}

// const innerFunction = outerFunction() // Calling the outer function
// innerFunction() // Calling the inner function


(function(count) {
    console.log(`IIFE: ${count}`)
    // This function is executed immediately after it is defined
})(1); // Immediately invoked function expression

function recurssion(count) {
    console.log('Recursion')
    // return recurssion() // Calling the function recursively
    // This will cause a stack overflow error if not handled properly
    // because it will keep calling itself indefinitely
    // To prevent this, you can add a base case to stop the recursion
    if (count === 0) {
        return
    }
    return recurssion(count - 1) // Calling the function recursively with a decrementing count
}

console.log(recurssion(5)) // Calling the function with a count of 5