/**
 * Loops and Iterations in JavaScript
 * This code demonstrates the use of different types of loops in JavaScript.
 * It includes examples of for, while, and do-while loops.
 * Each loop iterates through a range of numbers and performs some operations.
 * The code also includes examples of nested loops and the use of break and continue statements.
 */

// for(initialization; condition; update){}

for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        // console.log(`Row: ${i} Col: ${j}`)
    }
}

// Multiple variables in for loop
// for(initialization1, initialization2; condition; update1, update2){}
for(let i=1, j=10; i<=10 && j>=1; i++, j--){
    console.log(`I: ${i} J: ${j}`)
}