console.log('----for string iterator----')
const str = 'Pratap'
const res = str[Symbol.iterator]()
console.log(res)
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())

//  


// array
console.log('----for array iterator----')
const ar = [1, 2, 3, 4, 5]
let index = 0
function nxt() {
    return ar[index++]
}
console.log(nxt())
console.log(nxt())
console.log(nxt())
console.log(nxt())
console.log(nxt())
console.log(nxt())


console.log('----for object iterator----')
const obj = {
    start: 1,
    stop: 100,
    step: 5
}

const obje = obj[Symbol.iterator] = function () {
    let current = this.start
    const stop = this.stop
    const step = this.step
    return {
        next() {
            const o = {
                value: current,
                done: current > stop
            }
            current += step
            return o
        }
    }
}
console.log(obje)

const objIterator = obj[Symbol.iterator]()
// console.log(objIterator.next())
// console.log(objIterator.next())
// console.log(objIterator.next())
// console.log(objIterator.next())
for (const it of obj) {
    console.log(it)
}


console.log('----for function iterator----')

function* generator() {
    yield 1
    yield 2
    yield 3
}
const fnIt = generator()
console.log(fnIt.next())
console.log(fnIt.next())
console.log(fnIt.next())
console.log(fnIt.next())