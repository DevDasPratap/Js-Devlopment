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

const name = 'Pratap' //this is variable
age = 30 // this is assigned global object

// console.log(delete name) // not work on variable
// console.log(delete age) // here delete operation work

// console.log(typeof name)
// console.log(typeof age)


let str = 'pratap'
str[0] = 'a' // we can't not modify by index (string are mutable in js)

// console.log(str)

str = 'update'
// console.log(str)


// console.log(3+4+'5') // in js calculation lest to right

let xx = 'Learn'
// console.log(xx.substring(5, 1)) // here startIndex and endIndex swap because startIndex is greater than the endIndex
// are swapped to xx.substring(1, 5).

// (function (num) {
//     console.log(num * num)
// })(false) // it same time run when it created bcz it iffe fn here false = 0 so 0 * 0 = 0

const xxx = [1, 2, 3]
delete xxx[1] // here delete operator delete the and assgin empty slot here array length not chaged
// if you want delete from array maintain clean array structure use pop or splice or create create new array with slice
// console.log(xxx)
// console.log(xxx.length)

// event bublings question learn

// setTimeout(()=>{
//     console.log('1')
// }, 0)
// console.log('2')


function data() {
    let a = b = 5 // b not delecleration with let/var/const
    // whener varibale assign without decleration it automaic set global object so ans is 5 print in console  
}
data()
// console.log(b)

// p++ // hoisted variable increment with 1
// console.log(p) // undefined + 1 = NaN
// var p = 22 // hoisting variable


let strr = 'pdas'
str.length = 0 // in js string imatable we can't modify string indivusual char and length property
// console.log(strr.length)

let arr1 = [1, 2, [3, 4]]
let arr2 = [...arr1]
arr2[1] = 10
arr2[2][0] = 100
// console.log(arr1)
// console.log(arr2)


// console.log([1,2]+![])

// primitive (Immutability) and non-primitive (reference) (Mutability)
let a = 10
let c = 10
// console.log(a === c)
let obj1 = { a: 10 }
let obj2 = { a: 10 }
// console.log(obj1 === obj2)

// here not user resolve or reject state so it work like synchronusly
new Promise(() => {
    // console.log('d')
})
// console.log('s')

const box = {
    x: 5, y: 10
}

Object.freeze(box)
box.x = 10
// console.log(box)


let person1 = { name: 'pratap' }
const members = [person1]
person1 = null
// console.log(members)
// console.log(typeof members)

var arrA = [1, 2, 3]
var arrB = arrA.slice()
arrB[0] = 0
// console.log(arrA)

// in js default consider when sending undefined or not sending any value
function sum(a = 5, b = 7) {
    console.log(a + b)
}

// sum(null, 10) // in js due to type coercion concept null treated as false value and false mean 0 for numerical context, so 0+10=10

// var fx = 1
// console.log(fx)
// function fx() {
//     console.log('2')
// }
// fx()


let aa = 5
let bb = aa++
// console.log(aa+bb)

// in js value of two diffrent types js wil autometic convert into common type 
// to make the compare. js internally uges tostring method for compare
const arr3 = [1, 2, 3]
const arr4 = '1,2,3'
// console.log(arr3 == arr4)

const a1 = {}
const b1 = { key: 'b1' }
const c1 = { key: 'c1' }

a1[b1] = 46
a1[c1] = 286

// console.log(a1[b1])


var employeeId = 'abcd'
function foo() {
    employeeId = '01234'
    return
    function employeeId() { }
}

foo()
// console.log(employeeId)


let newList = [1].push(2) // here return length
// console.log(newList.push(3)) //getting typeError

// console.log([] == [])

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        // console.log('Value is ' + i)
    });
}

// function job() {
//     return new Promise((resolve, reject)=>{
//         reject()
//     })
// }

// let promise = job()
// promise.then(()=>{
//     console.log('1')
// }).then(()=>{
//     console.log('2')
// }).catch(()=>{
//     console.log('3')
// }).then(()=>{
//     console.log('4')
// })

let a3 = 2
let b3 = new Number(2) // data type is object
// console.log(typeof b3)
// console.log(a3 == b3)
// console.log(a3 === b3)


const numbers = [1, 2, 3, 4, 5]
const [j] = numbers
// console.log(j)

function calculation({ a = 1, b = 2 }) {
    return a + b
}

const result = calculation({ a: 5 })
// console.log(result)

const nums = [1, 2, 3, 4, 5]
const [fst, second, ...rest] = nums

// console.log(fst)

function func() {
    try {
        console.log(1)
        return
    } catch (error) {
        console.log(2)
    } finally {
        console.log(3)
    }
    console.log(4)
}

// func()


// getData1()
// getData2()

function getData1() {
    console.log('Hello')
}
function getData2() {
    console.log('I am pd')
}


let xo = 1 < 2 < 3
// console.log(xo)


let numb = 0

// console.log(numb++)
// console.log(++numb)


// console.log(typeof typeof 1)

const fistPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one')
})
const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two')
})

Promise.race([fistPromise, secondPromise]).then((res) => {
    // console.log(res)
})

// console.log(5 > '15' < 5)


// static typed vs dynamic typed language



// implement a promise.all percentage

const allPromiseProgress = (promises, onProgress) => {
    let complete = 0;

    return Promise.all(promises.map(promise => {
        return promise.then((result) => {
            complete++;
            const completePercentage = (complete / promises.length) * 100;
            onProgress(completePercentage.toFixed(2));
            return result;
        });
    }));
};

// Example tasks
const tasks = [
    () => new Promise((resolve) => setTimeout(() => resolve('Task 1'), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve('Task 2'), 5000)),
    () => new Promise((resolve) => setTimeout(() => resolve('Task 3'), 2500)),
    () => new Promise((resolve) => setTimeout(() => resolve('Task 4'), 3000))
];

// Execute all promises and track progress
// allPromiseProgress(tasks.map(t => t()), (progress) => console.log(`Progress: ${progress}%`))
//     .then(results => console.log('All tasks completed:', results))
//     .catch(error => console.error('Error:', error));


const array = [4, 5, 0, 1, 2, 3, -5, 7, 10]
// [4, 0, 2, 10, 5, 1, 3, -5, 7]

function separateFn(arr) {
    const even = []
    const odd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    return [...even, ...odd]
}
// console.log(separateFn(array))


// multiple api call sequence
function fetchTodo(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
        .then(res => res.json())
        .then(todos => {
            console.log('todos: ', todos)
            return todos
        })
}

function fetchUser(post) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => res.json())
        .then(user => {
            console.log('user: ', user)
            return user
        })
}

function fetchPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(post => {
            console.log('Post: ', post)
            return post
        })
}

const task = [
    () => fetchPost(1),
    (post) => fetchUser(post),
    (user) => fetchTodo(user)
]
const sequenceCall = (tasks) => {
    return tasks.reduce((promise, currentPromise) => {
        return promise.then(currentPromise)
    }, Promise.resolve())
}

// sequenceCall(task)

// api call timeout function

function timeoutPromise(promise, time) {
    const timeout = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Timeout')
            }, time)
        })
    }
    return Promise.race([promise(), timeout()])
}

const promise = () => new Promise((res) => setTimeout(() => res('resolve'), 4000))
// timeoutPromise(promise, 1000).then(console.log).catch(console.error)


function retryPromise(promiseFun, noOfRetry, delay) {
    return new Promise((resolve, reject) => {
        function retry() {
            promiseFun()
                .then(resolve)
                .catch((error) => {
                    if (noOfRetry <= 0) {
                        reject(error);
                    } else {
                        console.log(">>>>>>> Retrying ");
                        noOfRetry--; // Decrement the number of retries left
                        setTimeout(retry, delay); // Retry after the specified delay
                    }
                });
        }
        retry(); // Start the first attempt
    });
}

// Example usage:
const promiseReTry = () => Promise.reject('Error got');
// retryPromise(promiseReTry, 10, 1000)
//     .then(result => console.log("Success:", result))
//     .catch(error => console.log("Failed after retries:", error));



// currying
function curry(func) {
    return function curried(...arg) {
        if (arg.length >= func.length) {
            return func(...arg)
        } else {
            return function nestedCurry(...args2) {
                return curried(...arg, ...args2)
            }
        }
    }
}

function add(a, b, c) {
    return a + b + c
}
const curriedAdd = curry(add)
// console.log(curriedAdd(1)(2)(3))
// console.log(curriedAdd(7)(8)(9))
// console.log(curriedAdd(100)(101)(99))

// Deep clone object
function deepClone(data) {
    if (data === null || typeof data !== 'object') return data;

    if (Array.isArray(data)) {
        return data.map(deepClone)
    }

    if (data instanceof Date) {
        return new Date(data)
    }

    const clonedObj = {}
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(data[key])
        }
    }

    return clonedObj;
}

const object = {
    name: 'Pratap',
    add: {
        city: 'new town'
    }
}

const newObj = deepClone(object)
newObj.add.city = 'Kolkata'

// console.log('object', object, 'newObj', newObj)


// batches promise call
function createPromise(time) {
    return new Promise((res) => {
        setTimeout(() => {
            res(time)
        }, time);
    })
}

const p1 = createPromise(1000)
const p2 = createPromise(2000)
const p3 = createPromise(3000)
const p4 = createPromise(4000)
const p5 = createPromise(5000)
const p7 = createPromise(6000)

const promiseBatch = [
    () => p1.then(console.log),
    () => p2.then(console.log),
    () => p3.then(console.log),
    () => p4.then(console.log),
    () => p5.then(console.log),
    () => p7.then(console.log),
]

const promiseBatches = [p1, p2, p3, p4, p5, p7]

const promisesBatch = async (promises, batchCount) => {
    for (let i = 0; i < promises.length; i += batchCount) {
        const batch = promises.slice(i, i + batchCount)
        // [p1, p2] [p3, p4] [p5, p6]
        await Promise.all(batch.map(fn => fn()))
        await createPromise(5000)
    }
}

// promisesBatch(promiseBatch, 4)

// dry api call
function fetchData1(endpoint, id) {
    return fetch(`https://api.example.com/${endpoint}/${id}`)
        .then(res => res.json())
        .then(res => console.log('data:', res))
        .catch(err => console.log(err))
}

const fetchUser1 = (userId) => fetchData1('users', userId)
const fetchProduct = (productId) => fetchData1('product', productId)
const fetchOrder = (orderId) => fetchData1('order', orderId)


// insert array
const arra = [1, 2, 3, 4];
const newEle = 100;
const pos = 1;

// Create space for the new element by shifting elements to the right
for (let i = arra.length - 1; i >= pos; i--) {
    arra[i + 1] = arra[i]; // Shift elements one position to the right
}

// Insert the new element at the specified position
arra[pos] = newEle;

// Log the updated array
// console.log(arra);

// delete array
// arra.splice(1, 1)
// console.log(arra);

const newArray = []
for (let i = 0; i < arra.length; i++) {
    if (i !== pos) {
        newArray.push(arra[i])
    }
}
// console.log(newArray);

// merger two array
const narray = []
// for (let i = 0; i < arra.length; i++) {
//     narray.push(arra[i])
//     narray.push(newArray[i] || 0)
// }

// console.log(narray)

// linkedlist
class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        },
            this.tail = this.head
        this.length = 1
    }
    append(data) { //lest side add
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(data) {
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    traverse(requireIndex) {
        let counter = 0
        let currentNode = this.head
        while (counter !== requireIndex) {
            counter++
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert(index, data) {
        const newNode = {
            value: data,
            next: null
        }
        const leaderNode = this.traverse(index - 1)
        const nextNode = leaderNode.next
        leaderNode.next = newNode
        newNode.next = nextNode
        this.length++
    }
    delete(index) {
        const leaderNode = this.traverse(index - 1)
        const unwantedNode = leaderNode.next
        const nextNode = unwantedNode.next
        leaderNode.next = nextNode
        this.length--
    }
    reverse() {
        let first = this.head
        let second = first.next
        this.tail = this.head
        while (second) {
            let temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
    }
    search(data) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === data) {
                return currentNode
            } else {
                currentNode = currentNode.next
            }
        }
        return null
    }
    display() {
        const values = []
        let currentNode = this.head
        while (currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(values.join(' -> '))
    }
}

const myList = new LinkedList(10)
myList.append(16)
myList.append(22)
myList.prepend(8)
myList.insert(1, 9)
// myList.delete(1)
myList.reverse()
// console.log(myList.search(16))
// myList.display()
// console.log(JSON.stringify(myList))


// binary search tree

// class Node {
//     constructor(data) {
//         this.value = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     isTreeEmpty() {
//         return this.root === null;
//     }

//     makeTree(data) {
//         let newNode = new Node(data);
//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode; 
//             } else {
//                 this.insertNode(root.left, newNode);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode;
//             } else {
//                 this.insertNode(root.right, newNode);
//             }
//         }
//     }
//     search(root, data){
//         if (root === null) {
//             return false
//         }else if(root.value === data){
//             return true
//         }else if(root.value > data){
//             return this.search(root.left, data)
//         }else{
//             return this.search(root.right, data)
//         }
//     }
//     preOrder(root){
//         if (root) {
//             // console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right) 
//             console.log(root.value)
//         }
//     }
// }

// // Usage example:
// const bst = new BST();
// bst.makeTree(10);
// bst.makeTree(8);
// bst.makeTree(9);
// bst.makeTree(15);
// bst.makeTree(5);
// // console.log(bst.search(bst.root, 9))
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// bst.postOrder(bst.root)

// // console.log(JSON.stringify(bst, null, 2));

// function recursion(...num) {
//     if (num.length === 0) {
//         return 0
//     }
//     return num[0] + recursion(...num.slice(1))
// }
// console.log(recursion(1,2,3))

// const version = ['php-3', 'php-1', 'js-4', 'js-7', 'ts-7', 'ts-1']

const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure

    setTimeout(() => {
        if (success) {
            resolve('Operation succeeded!');
        } else {
            reject('Operation failed!');
        }
    }, 5000)
});

//   myPromise.then(result => console.log(result)).catch(error => console.log(error));


// N - Number of tiles in the input string
// tiles1 = "11133555"           # True.  111 33 555
// tiles2 = "111333555"          # False. There are three triples, 111 333 555 but no pair.
// tiles3 = "00000111"           # True.  000 00 111. Your pair and a triplet can be of the same value
//                               #        There is also no limit to how many of each tile there is.
// tiles4 = "11122333"           # True.  Tiles are not guaranteed to be in order
// tiles5 = "11223344555"        # False. There
// tiles6 = "99999999"           # True.  You can have many of one tile
// tiles7 = "999999999"          # False.
// tiles8 = "9"                  # False.
// tiles9 = "99"                 # True.
// tiles10 = "000022"            # False.
// tiles11 = "221"               # False. There cannot be any tiles left over.

function isValidTileGrouping(tiles) {
    if (tiles.length <= 1) {
        return false
    }
    const pairMap = {}
    for (let i = 0; i < tiles.length; i++) {
        pairMap[tiles[i]] = (pairMap[tiles[i]] || 0) + 1
    }
    let foundPair = false;
    console.log(pairMap)
    for (let [key, value] of Object.entries(pairMap)) {
        console.log('key', key, 'value', value)
        const remainder = value % 3;
        // console.log(remainder)
        if (remainder === 2) {
            if (foundPair) {
                return false;
            }
            foundPair = true;
        } else if (remainder === 1) {
            return false;
        }
    }
    return foundPair;
}

// console.log(isValidTileGrouping('112'))

// function statement and function expression

const versions = ['node-16', 'node-22.5', 'python-4', 'java-8', 'node-18', 'python-5', 'java-9']

function getHigherVersion() {
    const map = {}
    for (const version of versions) {
        const [language, ver] = version.split('-')
        const currentVersion = parseFloat(ver)
        if (!map[language] || currentVersion > map[language]) {
            map[language] = currentVersion
        }
    }
    const higherVer = []
    for (const [key, value] of Object.entries(map)) {
        higherVer.push(`${key}-${value}`)
    }
    return higherVer
}
const highestVersions = getHigherVersion(versions);
// console.log(highestVersions);

// const myPromis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//     }, 5000);
//     setTimeout(() => {
//         reject("rejected")
//     }, 3000);
// });

// myPromis
//     .then((data) => {
//         console.log("Resolve:", data);
//     })
//     .catch((error) => {
//         console.log("Reject:", error);
//     })
//     .finally(() => {
//         console.log("Finally block");
//     });

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
  });

  Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Prints the value of the first resolved promise
  })
  .catch((error) => {
    console.error(error); // Handle error if all promises are rejected
  });

  const arr = ['ram', 'sam', 'dev', 'devi', 'dev', 'Ram']
const uniqueArr = []
for (let i = 0; i <= arr.length - 1; i++) {
  let count = 0;
  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
  }
  if (count === 1) {
    uniqueArr.push(arr[i])
  }
}
// console.log(uniqueArr)
