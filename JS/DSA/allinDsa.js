/**
 * Loop
 * for loop when we know start to end
 * for(start; end; change){}
 * 
 * continue => skip current iteration
 * bresk => leave and go outside the loop
 */

// Infinte loop
// for (let i = 1; i < 5;) {
//     console.log(i)
// }

// for (let i = 1; ;) {
//     console.log(i)
// }

// for (; ;) {
//     console.log('')
// }

// logical question: var outside print last value
// for (var i = 0; i < 5; i++) {
//     console.log('i: ', i)
// }
// console.log(i)



// for (let i = 1; i < 5; i++) {
//     console.log(i)
// }


// half time loop run
// const n = 10
// for (let i = 1; i < Math.floor(n/2); i++) {
//     console.log(i)
// }

function primeNumber(n) {
    if (n<=1) {
        return false
    }
    if (n===2) {
        return true
    }
    if (n%2===0) {
        return false
    }
    for (let i = 3; i < Math.sqrt(n); i +=2) {
        if (n%i===0) {
            return false
        }
    }
    return true
}
// console.log(primeNumber(10))

// square root 36 => 6 now 2 => 6 


/**
 * While
 * 
 * while(true){}
 */

let start = 0
let end = 10
// while (end) {
//     console.log(end)
//     end--
// }

/**
 * Array => Linear Data Structure
 * - Stores multiple values in **continuous memory locations**
 * - Fast access because elements are stored sequentially
 * - Fixed size (for static arrays) or dynamic (for JS arrays)
 */

/**
 * Linked List => Linear Data Structure
 * - Stores multiple values in **different memory locations**
 * - Each element (node) contains data and a reference (pointer) to the next node
 * - Slower access compared to arrays but allows **efficient insertion and deletion**
 */

