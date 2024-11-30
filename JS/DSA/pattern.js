// *****
// *****
// *****
// *****

function printPattern(n) {
    for (let row = 0; row < n; row++) {
        let pattern = ''
        for (let column = 0; column < n; column++) {
            pattern += '* '
        }
        console.log(pattern)
        // pattern = ''
    }
}

printPattern(5)

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


// function printPattern(n) {
//     let pattern = ''
//     for(let i=0; i<n; i++){
//         for (let j = 0; j < n-i; j++) {
//             pattern += ' '
//         }
//         for (let k = 0; k < 2*i+1; k++) {
//             pattern +='*'
//         }
//         for (let l = 0; l < n-i-1; l++) {
//             pattern +=' '
//         }
//         console.log(pattern)
//         pattern = ''
//     }
// }

// printPattern(5)

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