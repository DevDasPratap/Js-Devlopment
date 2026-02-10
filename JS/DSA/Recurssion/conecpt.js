/**
 * Recurssion: Divide and concure, trees, graph, dp
 * Base condition / termination condition
 * Tail recursion: better space optimization compared to head recursion, because it doesn't require additional memory to store the call stack.
 */

/**
 * PMI (principal of mathematical induction)
 * it is a prooving technique
 *  - to prove a formula correct
 *  PMI does 3 steps:
 *  - PMI check the value/answer for the most trivial value (Base case)
 *  - PMI assumes that the formula is correct for some value k (Assumpsion)
 *  - Then PMI proves the formual for one more term apart from k, maybe k+1 or k-1, etc. (self work)
 * 
 *  Recursion solve
 *   - Find out smallest subproblem for which we know the answer.
 *   - assume that for the given problem recurssion will correctly calculate a sub problem
 *   - self work
 * 
 * How memory distributed for a process?
 *  - memory 2 part -> stack(linear, generally call callstack) and heap(big pool) it not a data structure
 *  - 
 */

// Head recurssion
function printHead(arr, startIndex) {
    // Base condition / termination condition
    if (startIndex >= arr.length) {
        return
    }
    // Logic
    console.log('arr[startIndex]', arr[startIndex])
    // Recursive call
    printHead(arr, startIndex + 1)
}

// printHead([1,2,3,4], 0)


// Tail recurssion
// Tail recursion is a form of recursion where the recursive call is the last operation in the function.
function printTail(arr, startIndex) {
    // Base condition / termination condition
    if (startIndex >= arr.length) {
        return
    }
    console.log('call')
    // Recursive call
    printTail(arr, startIndex + 1)
    console.log('call end')

    // Logic
    console.log('arr[startIndex]', arr[startIndex])
}

// printTail([1,2,3,4], 0)


function factorial(num) {
    // Base condition
    if (num === 0 || num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}

const res = factorial(4)
// console.log(res)

// Sum of array element
function sumOfArray(array, startIndex) {
    // Base condition
    if (startIndex >= array.length) {
        return 0
    }
    return array[startIndex] + sumOfArray(array, startIndex + 1)
}

const sum = sumOfArray([1, 2, 3, 4], 0)
// console.log(sum)

function sumOfDigits(n) {
    // code here
    let sum = 0

    while (n > 0) {
        let last = n % 10  // getting last digit from the number
        n = Math.floor(n / 10)  // removing last digit from the number
        sum += last
    }

    return sum
}

// console.log(sumOfDigits(99999))


/**
 * Types of Recursion
 * There are generally two types:
 *  - Direct Recursion
 *   - A function calls itself directly:
 * - Indirect Recursion
 *   - A function calls another function, which in turn calls the first one:
 */

// Direct Recursion
function func(n) {
    if (n<=0) {
        return
    }
    console.log('print: ', n)
    func(n-1)
}
// const funcResult = func(10)


// Indirect Recursion
function funcA(n) {
    if (n <= 0){
        return
    }
    console.log('Func A:', n)
    funcB(n - 1)
}

function funcB(n) {
    if (n <= 0){
        return
    }
    console.log('Func B:', n)
    funcA(n - 1)
}

// funcA(5)


function printFun(test) {
    if (test < 1)
        return;
    else {
        console.log(test);        // before recursion
        printFun(test - 1);       // recursive call
        console.log(test);        // after recursion
    }
}

let test = 3;
// printFun(test);


function printTail(n, k) {
    if (k > n){
        return;
    }
    console.log(k);
    printTail(n, k + 1); // tail recursive call
}
// printTail(3,1);


function recur_sum(n) {
    if (n === 1) return 1;           // Base case
    let answer = n + recur_sum(n - 1);  // Recursive case
    console.log('ans: ',answer)
    return answer;
}

// console.log(recur_sum(5));  // Output: 15

function fact(n) {
    // Base case
    if(n===1){
        return 1
    }

    // Recursive assumption
    const subProblem = fact(n-1)

    // Self work
    return n*subProblem
}

// console.log(fact(4))



// There are N persons, who want to go to a party, there is a contraint that any person can  either go alon or go in a pair
// [a][b][c] = 1 way
// [a,b][c] = 1 way
// [a,c][b] = 1 way
// [b,c][a] = 1 way