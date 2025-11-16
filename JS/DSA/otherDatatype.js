/**
 * non zero value
 * 0
 * null => it actually represnt empty value
 * undefined => not assigned any value
 */

const marks = 100
const name = 'Pratap Das'
let age
const company = null
const salary = undefined
const isStudent = false

// console.log('Marks: ', marks)
// console.log('Name: ', name)
// console.log('Age: ', age)
// console.log('Comapany: ', company)
// console.log('Salary: ', salary)
// console.log('is student: ', isStudent)

const userDetails = {
    marks,
    name,
    age,
    company,
    salary,
    isStudent
}

function rootsQuadraticEquation(a,b,c) {
    const sqrtValue = Math.sqrt(b-b - 4*a*c)
    const root1 = (-b + sqrtValue) / (2*a)
    const root2 = (-b -sqrtValue) / (2*a)

    return {root1, root2}
}

// console.log(rootsQuadraticEquation(7,8,9))

console.log('abc' == "abc")

let x = "abc" //string literal or normal string
let y = "abc" //string literal or normal string

console.log(x == y)

let a = String("abc") //string literal or normal string
let b = new String("abc") // string object

console.log(a)

console.log(b == a)
console.log(b == x)
console.log(a == x)
console.log("abc" == new String("abc"))

console.log('-------------')

console.log(b === a)
console.log(b === x)
console.log(a === x)
console.log("abc" === new String("abc"))