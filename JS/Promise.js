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



console.log('Promise start')
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise completed')
    }, 3000)
    setTimeout(()=>{
        reject('Promise failed')
    }, 2000)
})
console.log(myPromise)
console.log('Promise in progress')

myPromise.then((value)=>{
    console.log(value)
}).catch((value)=>{
    console.log(value)
})