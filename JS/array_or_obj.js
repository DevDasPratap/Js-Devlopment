// who best array or object

// array best for sequence data store(sorted or unsorted)
// object store query more optimize

// PUSH
// array
// const arr = []
// for (let i = 0; i < 5000000; i++) {
//     arr.push({
//         id: i,
//         value: i
//     })
// }

// console.time('start')
// let id = 4999999
// const findIn = arr.find((iteam) => iteam.id === id)
// findIn.value = 555
// console.timeEnd('start')


// // obj

// const obj = {}
// for (let i = 0; i < 5000000; i++) {
//     const o = {
//         id: i,
//         value: i
//     }
//     obj[i] = o
// }

// console.time('start')
// obj[id].value = 999
// console.timeEnd('start')

// UNSHIFT
// const arr = []
// const obj = {}
// for (let i = 0; i < 5000000; i++) {
//     const o = {
//         id: i,
//         value: i
//     }
//     obj[i] = o
// }

// // array
// console.time('array')
// arr.unshift({
//     id: 5000000,
//     value: 5000000
// })
// console.timeEnd('array')


// // obj
// console.time('obj')
// obj[500000] = {
//     id: 500000,
//     value: 5000000
// }
// console.timeEnd('obj')

// DELETE
const arr = []
const obj = {}
for (let i = 0; i < 5000000; i++) {
    const o = {
        id: i,
        value: i
    }
    obj[i] = o
}

// array
console.time('array')
const index = arr.findIndex((item) => item.id === 4000000)
arr.splice(index, 1)
console.timeEnd('array')


// obj
console.time('obj')
delete obj[4000000]
console.timeEnd('obj')


// map, filter, reduce
/*
map - return same lenght of orginal array
filter - return filter item
reduce- know one knows (only you know) all possible value
*/
const numbers = [1, 2, 3, false, NaN, 4, 5]
const str = numbers.map((value) => value.toString())
console.log(str)

// const filterd = numbers.filter((value)=>!value)
const filterd = numbers.filter((value) => value)
console.log(filterd)

const num = [1, 2, 3, 4, 5]
// const reduced = num.reduce((a,b)=>a+b)
// console.log(reduced)

// reduce parameter (previous(accumulator), current, index, originalArray)

// const reduced = numbers.reduce((pre, cur, index, orginalArray)=>{
//     return pre
// }, {}) // here '' mean i want to return object


// const reduced = numbers.reduce((pre, cur, index, orginalArray)=>{
//     pre += cur.toString()
//     return pre
// }, '') // here '' mean i want to return string

// const reduced = numbers.reduce((pre, cur, index, orginalArray)=>{
//     // if (cur) {
//     //     pre += cur.toString()
//     // }
//     if (cur) {
//         pre += cur.toString() + (index < numbers.length-1 ? ',' : '')
//     }
//     return pre
// }, '') // here '' mean i want to return string

// const reduced = numbers.reduce((pre, cur, index, orginalArray)=>{
//     if (index === 0) {
//         pre += '['
//     }
//     if (cur) {
//         pre += cur.toString() + (index < numbers.length-1 ? ',' : '')
//     }
//     if (index === numbers.length-1) {
//         pre += ']'
//     }
//     return pre
// }, '')

// const reduced = numbers.reduce((pre, cur, index, orginalArray)=>{
//     console.log('Index: ', index, 'pre: ', pre, 'cur: ', cur)
//     if (cur) {
//         pre.push(cur.toString())
//     }
//     return pre
// }, [])

// console.log(reduced)


const array = []
for (let i = 1; i <= 500000; i++) {
    array.push(i)
}

console.time('non-optimized')
array.filter((item) => item % 2 === 0).map((item) => item * 2)
console.timeEnd('non-optimized')

console.time('optimized')
array.reduce((pre, cur) => {
    if (cur % 2 === 0) { // if truthy value
        pre.push(cur * 2)
    }
    return pre
}, [])
console.timeEnd('optimized')

function myReduce(array, cb, initial) {
    let pre = initial
    for (let i = 0; i < array.length; i++) {
        pre = cb(pre, array[i], i, array)
    }
    return pre
}
const sum = myReduce([1, 2, 3, 4], (a, b) => a + b, 0)
console.log(sum)

const arrRe = [1, 2, 3, 4, false, 5, NaN, '', 7]

const result = myReduce(arrRe,
    (pre, cur) => {
        if (cur) {
            pre.push(cur * cur)
        }
        return pre
    }, [])

console.log(result)



// grouping
const names = ['Apple', 'Banana', 'juice', 'chinmoy', 'bugs', 'Developer', 'coder', 'Codding', 'Faild', 'false', 'fruit', 'India', 'bharat', 'Banda', 'Pratap', 'pd', 'das']
const nameGruoped = names.reduce((pre, curr)=>{
    const filterLetter = curr[0].toUpperCase()
    if (filterLetter in pre) {
        // found
        pre[filterLetter].push(curr)
    }else{
        // not found
        pre[filterLetter] = [curr]
    }
    return pre
}, {})

console.log(nameGruoped)

Object.keys(nameGruoped).forEach((groupKey)=>{
    console.log(`---- ${groupKey} ------`)
    nameGruoped[groupKey].forEach((name)=>{
        console.log(name)
    })
})