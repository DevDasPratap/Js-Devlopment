
const geeting = 'Hello'
let number = 1

// while (number<=10) {
//     console.log(number, geeting)
//     number++
// }

// while (true) {
//     console.log(`${number} Inside loop`)
//     if (number >= 10) {
//         break
//     }
//     number++
// }
// console.log(`Loopin done`)

let loggedIn = false
const loopCounter = 0
while (!loggedIn) {
    console.log('Counter: ',loopCounter)
    if (loopCounter) {
        if (loopCounter === 3) {
            loggedIn = true
        }
    }
    loggedIn++
}
console.log('Successfully loggedin')