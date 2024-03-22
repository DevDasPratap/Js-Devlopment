// function h(x, fn) { // h -higher oder function, fn -callback function
//     console.log(x*x)
//     fn()
// }

// h(10, function () {
//     console.log('Done with callback')
// })

// or

function h(x, fn) { // h -higher oder function, fn -callback function
    console.log(x*x)
    fn(x*x)
}
h(10, exec)
function exec(n) {
    console.log(`Square value is ${n}`)
}

// async code
// console.log(`star`)
// setTimeout(()=>{
//     console.log(`Timer done`)
// }, 3000)
// console.log(`end`)

// sync code
// console.log(`star`)
// for(let i =0; i< 10000000000000; i++){}
// console.log(`end`)