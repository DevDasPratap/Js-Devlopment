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



// senaio 1

console.log('Hi')
console.lo('Hey') // here no systextical errors
console.log('Bye')
/**
 * so senario parshing will pass but execcution fail
 * like: execution time console check is object the call .log method/function but when check/call .lo('Hey') inside console object dont have .log() so here break code and exceution will stop, so before execution will run/execute/print but after executon break below code dont execute
*/


// senario 2
console.log('Hi')
console..log('Hey') // here is systextical errors
console.log('Bye')
/**
 * so parshing will fail and execution not performed
 * like: parshing time console check is object then check ..log method/function is systex error so here parshing time break code so never execute performed
*/

// compile, interpeter, parshing, exection, execution is call run time , compile means parshe phase

/**
 * senario 2
 * if js interpreted js will run by line, first line execute then second line will break because systex error
 * 
 * 
 */

// scope
function fun() { // fun -> global scope
    var x = 10 // x -> fun scope
    function gun() { //gun -> fun scope
        var y = 20
        console.log(x) // 10
        console.log(y) // 20
    }
    gun() //
    console.log(x) // 10
    console.log(y) // error in run time
}

fun()

// console in js not define it comming on run time


// lexical scope vs dynamic scope
var teacher = 'Pratap' // teacher -> global
function ask() { // ask -> global
    console.log(teacher, question)
}
function funto() { // funto -> global
    var teacher = 'Das' // teachet -> funto
    ask('Why?')
}

funto()



// let block scoping
var teacher = 'Pratap' // teacher -> global
function funcc() { // ask -> global
    console.log(teacher)
    console.log(content) // tdz
    var teacher = 'Das'
    let content = ' JS'
    if (content === 'JS') {
        let hours = '10+'
        console.log(hours)
    }
    console.log(teacher, content)
}

funcc()
console.log(teacher)
console.log(content)