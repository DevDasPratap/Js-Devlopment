// greet()

function greet() {
    console.log('Hello')
    hello()
}

function hello() {
    console.log('Hi')
    bye()
}

function bye() {
    console.log('Tata')
}

/**
 * two type of memory - stack (static), heap (dynamic) 
 * stack - function call, premitive variable, heap - object
 * premitive -> language defined
 * non premitive -> user defined
 * stack - LIFO (last in first out)
 * heap - FIFO (first in first out)
 */

function name() {
    // return means stop the function, terminate executuon, return value
    // return means remove function from stuck
    return
}

/** any task we performed in two types loop and recursive
 * loop - itrative way
 * recursive - recursive way
 * recursion - > break a big problem into small problem solve. enventually big problem solved
 * stuck - limited memory 5%, heap 95% it depends on 
*/

// for (let i = 1; i <=5; i++) {
//     console.log('Hello loop')
// }

function recursion(n) {
    if (n === 0) {
        return // if i not return then it will get range error because it store into stuck memory, and stuck have limited size, that is why maximum call stack error
    }
    // console.log('Hello recursion')
    console.log(`Current n: ${n}`)
    recursion(n-1)
}

// recursion(5)


function recursionBack(n) {
    if (n === 0) {
        return // if i not return then it will get range error because it store into stuck memory, and stuck have limited size, that is why maximum call stack error
    }
    // console.log('Hello recursion')
    recursionBack(n-1) // backtracking, execute after recustion fun 
    console.log(`Current n: ${n}`)
}

// recursionBack(5)


function sum(n) {
    if (n === 0) {
        return 0
    }
    return n + sum(n-1)
}

const sumRes = sum(5) // 15
// console.log('Sum: ', sumRes)

/**
 * Stack = sum(5) => 5 + sum(4) => 5 + 4 + sum(3) => 5 + 4 + 3 + sum(2) => 5 + 4 + 3 + 2 + sum(1) => 5 + 4 + 3 + 2 + 1 + sum(0) => return 0
 * why use return - when we need old stack data wait for current stack data return
 */

function myMod(array, s) {
    var na = [];

    for (var i = 0; i < array.length; i++) {
        na.push(s + array[i]);
    }

    return na;
}
// console.log(myMod([1, 2, 3], 7))