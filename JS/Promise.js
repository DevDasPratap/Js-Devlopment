/*
*/
// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Hello')
//         resolve('resolve')
//     }, 1000)
// })
// console.log(myPromise)
// console.log('last')
// console.log(myPromise)


// console.log('Promise start')
// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise completed')
//     }, 3000)
// })
// console.log(myPromise)
// console.log('Promise in progress')

// myPromise.then((value)=>{
//     console.log(value)
// })



// console.log('Promise start')
// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise completed')
//     }, 3000)
//     setTimeout(()=>{
//         reject('Promise failed')
//     }, 2000)
// })
// console.log(myPromise)
// console.log('Promise in progress')

// myPromise.then((value)=>{
//     console.log(value)
// }).catch((value)=>{
//     console.log(value)
// })


// Promise another way
/*
Promise.all => parallel api cal and get the result(it will handle multiple api call)
Promise.all([promise1, promise2, promise3])
promise1 take 3s to take fullfiled
promise2 take 1s to take fullfiled
promise2 take 2s to take fullfiled

after collect the result and get result with in array after 3s becuse promise1 take 3s
if any promise was rejected means promise.all throw an error
ex- promise2 was rejected then promise1,promise2 also throw same error,
as soon as error happend in any promise it will not wait for other promises.
if promise2 1s resolve if promise2 2s get rejected then promise1,promise2,promise3 will rejected even promise2 resolved state to change rejected state.

Promise.allSetteled() => it will return [{}]
if i call 10 api out of them if any api respose failed i want rest of the api response result that's why we use promise.allSetteled

if promise2 was failed still wait for all promise to settled after 3s [resolve, error, resolve]

Promise.sace([p1,p2,p3])
suppose p1 take 3s
suppose p2 take 1s
suppose p3 take 2s

if any promise response first result was successfull settled din't wait for another promise
if any first response promise was false it will throw error

Prmise.any([p1,p2,p3])
it will wait for first success/fullfiled/response
if first promise was failed still wait any success response
if evethings failed then return aggregate error[error1,error2,error3]
*/

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Promise1 success'), 3000)
})
const promise2 = new Promise((resolve, reject)=>{
    // setTimeout(()=>resolve('Promise2 success'), 1000)
    setTimeout(()=>reject('Promise2 rejected'), 1000)
})
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Promise3 success'), 2000)
})

// it will wait 3s
// Promise.all([promise1,promise2,promise3])
// .then(res =>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

// Promise.allSettled([promise1,promise2,promise3])
// .then(res =>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

// Promise.race([promise1,promise2,promise3])
// .then(res =>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

Promise.any([promise1,promise2,promise3])
.then(res =>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
    console.log(err.errors)
})