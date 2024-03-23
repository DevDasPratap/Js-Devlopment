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


// console.log(`star`)
// setTimeout(function f(){
//     console.log(`Timer done`)
// }, 0)
// console.log(`mid`)

// console.log(`star`)
// for(let i =0; i< 10000000000; i++){}
// console.log(`end`)

/**
 * JavaScript native feature is synchronus
 * checkout https://ecma-international.org/ settimeout/setinterval, etc not found because it not part of js
 * node, settimeout, fs system these are not js part its just run time env
 * inside in js-> event loop, callback queue
 * callstack-> event loop macrotask queue/callback queue
 * f function will wait in callback queue, wait until loop complete
 * event loop check global code/callstack empty run complete or not
 * if empty then event loop called f function in callstack
 * 
 * 
 * callbackhell.com
 * Inversion of control - any higher order function if any argument have not calling/all power/control give to higher function -when/how execute callback function -> it fix by promise -> it return resolve/reject 
 */

function createPromise() {
    return new Promise(function exec(resolve, reject){
        // write any async code
        setTimeout(function f(){
            console.log('Promise timer done')
            // resolve('Done')
            reject('Not complete')
        }, 4000)
    })
}

console.log(`Start`)
const res = createPromise()
console.log(`Timer done`)

res.then(function f(value){
    console.log(`Promise Resolve: ${value}`, )
}).catch(function c(value){
    console.log(value)
}).finally(function fn(){
    console.log(`Finally`)
})
console.log(`End`)

// for(let i =0; i< 10000000000; i++){}
// console.log(`Loop end`)

/**
 * Promise handle microtask queue
 * promise by default pending state
 */

// async function consume(){
//     return 10
// }
// console.log(consume()) // return promise because async

async function consume(){
    try {
        console.log('Inside function')
        const response = await createPromise()
        console.log('response: ', response)
    } catch (error) {
        console.log(`Async error: ${error}`)
    }
}

console.log(`Async start`)
console.log('Consume call: ', consume())
console.log(`Async end`)

