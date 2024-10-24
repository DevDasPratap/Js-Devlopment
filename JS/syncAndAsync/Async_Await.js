// // non-blocking
// setTimeout(()=>{
//     console.log(1)
// },1000)
// setTimeout(()=>{
//     console.log(2)
// },2000)
// setTimeout(()=>{
//     console.log(3)
// },3000)
// setTimeout(()=>{
//     console.log(4)
// },5000)
// setTimeout(()=>{
//     console.log(5)
// },4000)

// function main(){
//     setTimeout(()=>{
//         console.log('fn')
//     }, 0)
//     test()
// }
// function test() {
//     console.log('test')
// }
// main()


// Async await
/*
Async function alawys return promise default if you return any value it will wrap the value return promise inside

*/

// async function getData() {
//     return 'Pratap'
// }
// // return promise
// const dataPromise = getData()
// console.log(dataPromise)
// // get promise data
// const data = getData()
// data.then((res)=>{
//     console.log(res)
// })


// const promise = new Promise((resolve, reject)=>{
//     resolve('Promise relove')
// })
// async function getPromise() {
//     return promise
// }
// const getPromiseData = getPromise()
// console.log(getPromiseData)
// getPromiseData.then((res)=>{
//     console.log(res)
// })

// using await
// Async and await to handle promises

// Before async and await how hanle promises
// const beforeAsync = new Promise((resolve, reject)=>{
//     resolve('Promise relove data without async')
// })
// function beforeAsyncData(){
//     beforeAsync.then((res)=>{
//         console.log(res)
//     })
// }
// beforeAsyncData()

// // After async and await how hanle promises
// const afterAsync = new Promise((resolve, reject)=>{
//     resolve('Promise relove data with async')
// })
// async function afterAsyncData(){
//     // await: await only use inside an async function
//     const result = await afterAsync
//     console.log(result)
// }
// afterAsyncData()

// After async and await how hanle promises in deep drive
// const afterAsync = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise relove data with async')
//     }, 5000)
// })
//  function afterAsyncData(){
//     // await: await only use inside an async function
//     afterAsync.then((res)=>console.log(res))
//     console.log(`Async data`)
// }
// afterAsyncData()

// After async and await how hanle promises in async await deep drive
const afterAsync = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise relove data with async')
    }, 5000)
})
async function afterAsyncData(){
    // await: await only use inside an async function
    const result = await afterAsync
    console.log(result)
    console.log('Async await')
}
afterAsyncData()