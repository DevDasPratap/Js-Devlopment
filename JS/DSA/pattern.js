// *****
// *****
// *****
// *****

// function printPattern(n) {
//     for (let row = 0; row < n; row++) {
//         let pattern = ''
//         for (let column = 0; column < n; column++) {
//             pattern += '* '
//         }
//         console.log(pattern)
//         // pattern = ''
//     }
// }

// printPattern(5)

// *
// **
// ***
// ****

// function printPattern(n) {
//     let pattern = ''
//     for(let i=0; i<n; i++){
//         for (let j = 0; j < i+1; j++) {
//             pattern += '* '
//         }
//         console.log(pattern)
//         pattern = ''
//     }
// }

// printPattern(5)

// *****
// ****
// ***
// **
// *

// function printPattern(n) {
//     let pattern = ''
//     for(let i=0; i<n; i++){
//         for (let j = 0; j < n-i; j++) {
//             pattern += '* '
//         }
//         console.log(pattern)
//         pattern = ''
//     }
// }

// printPattern(5)

// *
// **
// ***
// ****
// ****
// ***
// **
// *


function normalPattern(n) {
    let pattern = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i + 1; j++) {
            pattern += '*'
        }
        console.log(pattern)
        pattern = ''
    }
}
function invertedPattern(n) {
    let pattern = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            pattern += '*'
        }
        console.log(pattern)
        pattern = ''
    }
}
// function printPattern(n) {
//     normalPattern(n)
//     invertedPattern(n)
// }
// printPattern(5)

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// function printPattern(n) {
//     let pattern = '';
//     for (let i = 0; i < n * 2 - 1; i++) {
//         let stars = i < n ? i + 1 : 2 * n - i - 1; // Calculate number of stars
//         for (let j = 0; j < stars; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//         pattern = ''; // Reset the pattern for the next row
//     }
// }

// printPattern(5);

// or

// function printPattern(n) {
//     for (let i = 1; i <= 2 * n - 1; i++) {
//         let stars = i <= n ? i : 2 * n - i; // Determine the number of stars
//         console.log('*'.repeat(stars)); // Print stars using `repeat`
//     }
// }

// printPattern(5);


//     *    
//    ***   
//   *****  
//  ******* 
// *********

function printPattern(n) {
    let pattern = ''
    for(let i=0; i<n; i++){
        for (let j = 0; j < n-i; j++) {
            pattern += ' '
        }
        for (let k = 0; k < 2*i+1; k++) {
            pattern +='*'
        }
        for (let l = 0; l < n-i-1; l++) {
            pattern +=' '
        }
        console.log(pattern)
        pattern = ''
    }
}

printPattern(5)

// 1
// 12
// 123
// 1234
// 12345

// function printNumber(n) {
//     let number = ''
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             number += j+1
//         }
//         console.log(number)
//         number = ''
//     }
// }
// printNumber(5)


// 1
// 22
// 333
// 4444
// 55555
// function printNumber(n) {
//     let number = ''
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             number += i+1
//         }
//         console.log(number)
//         number = ''
//     }
// }
// printNumber(5)


// *******
//  *****
//   ***
//    *

// function printNumber(n) {
//     let pattern = '';
//     for (let i = n - 1; i > 0; i--) {
//         // Leading spaces
//         for (let j = 0; j < n - i; j++) {
//             pattern += ' ';
//         }
//         // Stars
//         for (let j = 0; j < 2 * i - 1; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//         pattern = '';
//     }
// }

// // Call the function with n = 5
// printNumber(5);


//     *
//    ***
//   *****
//  *******
// *********
// function printNumber(n) {
//     let pattern = '';
//     for (let i = 0; i < n; i++) {
//         // Leading spaces
//         for (let j = 0; j < n - i - 1; j++) {
//             pattern += ' ';
//         }
//         // Stars
//         for (let j = 0; j < 2 * i + 1; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//         pattern = '';
//     }
// }

// // Call the function with n = 5
// printNumber(5);


//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// function normalPattern(n) {
//     let pattern = '';
//     for (let i = 0; i < n; i++) {
//         // Leading spaces
//         for (let j = 0; j < n - i - 1; j++) {
//             pattern += ' ';
//         }
//         // Stars
//         for (let j = 0; j < 2 * i + 1; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//         pattern = '';
//     }
// }

// function invertedPattern(n) {
//     let pattern = '';
//     for (let i = n - 1; i > 0; i--) {
//         // Leading spaces
//         for (let j = 0; j < n - i; j++) {
//             pattern += ' ';
//         }
//         // Stars
//         for (let j = 0; j < 2 * i - 1; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//         pattern = '';
//     }
// }

// function printNumber(n) {
//     normalPattern(n);     // Print the normal pattern
//     invertedPattern(n);   // Print the inverted pattern
// }

// // Call the function with n = 5
// printNumber(5);
