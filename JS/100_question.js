const getData = async function () {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('somthing went wrong')
        }
        let arr = []
        const result = await response.json()
        for (let i = 0; i < result.length; i++) {
            // console.log(result[i].name)
            await new Promise((resolve) => {
                setTimeout(resolve, 2000)
            })
            arr.push({ id: result[i].id, name: result[i].name })
            console.log(arr)
        }

        const get = arr.find(user => user.name === 'Kurtis Weissnat')
        console.log(get)
    } catch (error) {
        console.log('err', error)
    }
}

// getData()


/**
 * what is Event loop ?
 * What about macrotask vs microtask ?
 * can dfinned diffrnt map, filter and reduce method
 * how promises and async await are diffrent from each other ? and which situation we async or promise ?
 * When we used async over promises ?
 * If you stuck any code debugging technique you used?
 * 
 * 
 * 1. Event loop - gate keeper to callstack . Pushes functions to callstack from macro and micro task queue provided callstack is empty
 * 2.micro queue - stores functions received from fetch api when there is network calls and mutation functions where as macro queue stores callbacks from the web api such as settimeout,local storage and others in a queue format.micro takes precedence over micro 
 * 3. Map reduce filter - higher order function.map - works on each an every element on an array and returns the modified array.filter - filters the array based on a condition and returns a new arr with filtered value.reduce returns a scalar value after performing operations with each and every element on an arr.
 * 4.promise resolves call back hell.promisr chain is quite complex. To overcome this ecma script introduces Async and await .just use these for asynchronous operation
 * 5.improving application performance - observe throttling and debouncing.simple write better code
 * 6. Debugging techniques - debug on the console using dev tool debugger. Easy peasy.) console.log b) debugger c)Sourcemap
 * 
 */

// convert array to object
// const arrToobj = ['a', 'b', 'c', 'd']
// let obj = arrToobj.reduce(
//     // (acc, it, i)=>({...acc, [it]:it }), {}
//     (acc, it, i)=>({...acc, [i]:it }), {}
// )

// console.log(obj)

// scope
// (function () {
//     var x, y;
//     try {
//         throw new Error();
//     } catch (error) {
//         x = 1; // Assign 1 to the outer x variable
//         y = 2;
//         console.log('x', x); // 1
//     }
//     console.log('x', x); // 1
//     console.log('y', y); // 2
// })();

// hoisting
x = 10
var x
// console.log(x)

var y = 1
var call = function () {
    console.log(y) // undefined, because it initialize top on console var=y
    var y = 1
}
// call()

/**
 * Callback
 * start
 * single thread
 * time take
 * end
 */

// clouser
function outer(i = 0) {
    return function inner() {
        return i++
    }
}

let clouser = outer()
// console.log(clouser())
// console.log(clouser())

//find unique and duplicate
const s = [1, 7, 1, 4, 5, 4, 9, 10, 9, 9]

// unique
const unique = new Set(s)
const intoArr = [...unique]
// console.log(unique)
// console.log(intoArr)

// duplicate
const hasMap = {}

s.forEach(it => {
    if (it in hasMap) {
        hasMap[it]++
    } else {
        hasMap[it] = 1
    }
})

// console.log(hasMap)
const dup = []
for (const key in hasMap) {
    if (hasMap[key] > 1) {
        dup.push(key)
    }
}
// console.log(dup)

// flat map
const flatArr = [1, [1, 8, 9, [4, 5, [7, 8, [9, 10,], 90], 91, 90], 88, 81, 70]]
// console.log(flatArr.flat(1))
// console.log(flatArr.flat(2))
// console.log(flatArr.flat(3))
// console.log(flatArr.flat(4))
// console.log(flatArr.flat(Infinity))

const flatText = 'Pratap das is SWE and have 2 years of experiance'
const words = flatText.split('')
// console.log(words)
const flatWord = words.flatMap(w => w.split(''))
// console.log(flatWord)

// object short hand
const first = 'pratap'
const last = 'das'

const person = { first, last, town: 'new town' }
// console.log(person)


// generator function
function* generator() {
    // we used yield insted of return
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = generator() //get in array
// console.log(...g)
// console.log(g.next())
// console.log(g.next())

// length
const arrLength = [7, 8, 9, 10]
// console.log(arrLength)
// console.log(arrLength.length)
arrLength.length = 5
// console.log(arrLength.length)
// console.log(arrLength)

arrLength.length = 1
// console.log(arrLength.length)
// console.log(arrLength)

// !!
if ([]) {
    // console.log('yes')
}
if ({}) {
    // console.log('yes')
}
if (!'') {
    // console.log('yes')
}

// console.log(!!null, !null)
// console.log(!![], ![])
// console.log(!!{}, !{})
// console.log(!!'', !'')


// delete
const employee = {
    company: 'xyz',
    name: 'abc'
}

const chars = ['x', 'y', 'z', 'a', 'b', 'c']
delete employee.company
// console.log(employee)

delete chars[4]
// console.log(chars)

// callback to (convert) => promise

// callback
// setTimeout(()=>{
//     console.log('Hello callback')
// }, 4000)

// // callback to promise
// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Hello promise')
//         resolve('done')
//     }, 5000)
// })

// p.then((res)=>{
//     console.log('Completed', res)
// })

// option ? channing vs &&

const personObj = {
    address: { city: 'New town' }
}

// console.log(personObj.address.city) // if dont have property we avoid using && or optional channing

if (personObj && personObj.address && personObj.address.city) {
    // console.log(true)
}
// or
if (personObj?.address?.city) {
    // console.log(true)
}

// binary hexa ocatal
// when we star with zero(0) it behave like binary hexa ocatal
// console.log(010)
// console.log(0o10) //octal used o
// console.log(0b10) //binary b
// console.log(0x10) //hexa x
// console.log(111) //desimal
