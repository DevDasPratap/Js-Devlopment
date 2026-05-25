/**
 * scope: visibility(variable, function)
 * every thing (variable, function) inside your code, will be used in one of the following 2 ways
 * either it will be getting some valueassigned to it or some values will be retrived from it
 * 
 * do you thing js compile or interperate
 * it is hybrid  
 */

// not interpared example
// function fun() {
//     console....log(1)
//     return 0
// }

// console.log('hello')
// console.lo('hello')
// console.log('bye')
// console.log('fun call', fun())

// not compile
// console.log('hello')
// console.lo('hello')

/**
 * so evey js code execute in two phases - parsing, execution phase
 * 
 * parsing - scope resultion
 * in js have 3 types of scope
 *  - global scope
 *  - function scope
 *  - block scope
 */

// if (true) {
//     var a = 10
// }
// console.log(a)
function name() {
    var b = 10
}
// console.log(b)

function fun() {
    console.log(c)
    var c = 10
}
// fun()

// if (true) {
//     let e = 10
// }
// console.log(e)

function name() {
    let f = 10
}
// console.log(f)

function fun() {
    console.log(g)
    let g = 10
}
// fun()
// console.log(g)


var iam = 'i am global variable'
function gun() {
    var iam = 'i am fn variable'
    constent = 'here is content'
    console.log(iam)
}
function func() {
    var fnVar = 'i am fnvar'
    console.log(fnVar)
}

gun()
func()
console.log(iam)
console.log(constent)
// console.log(fnVar)


// parshing phase
// executing phase
