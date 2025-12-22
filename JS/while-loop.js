let i = 1;
while(i <= 10)
{
    //console.log(i);
    i++;
}

let a = 10;
while(a >= 1)
{
    //console.log(a);
    a--;
}

let b = 1;
while(b <= 10)
{
    //console.log(b);
    b = b + 2;
}

const numbers = [12, 14, 16, 18, 19];
let c = 0;
while(c < numbers.length)
{
    //console.log(numbers[c]);
    c++;
}

const myName = "Pratap Das";
let d = 0;
while(d < myName.length) {
    //console.log(myName[d]);
    d++;
}

let e = myName.length - 1;
while(e >= 0) {
    //console.log(myName[e]);
    e--;
}

let f = 1;
while(f <= 10) {
    let g = 1;
    while(g <= 10)
    {   
        const result = f * g;
        console.log(`${f} * ${g} = ${result}`);
        g++;
    }
    console.log("--------------");
    f++;
}

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