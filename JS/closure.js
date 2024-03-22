// Run on browser and check console

const num1 = 2
const sum = function () {
    const num2 = 5
    return function () {
        return num1 + num2
    }
}

// const sumFn = sum()
// console.dir(sumFn)
// console.log(sumFn)

let score = 0
function one() {
    let score = 1
    console.log(score)
}
function two() {
    let score = 2
    console.log(score)
}
function three() {
    // let score = 3
    console.log(score)
}

// one()
// two()
// three()
// console.log(score)


function outherFun() {
    let outherVar = 'I am at scope level 1'
    function innerFun() {
        let innerVar = 'I am at scope level 2'
        console.log(outherVar)
    }
    // console.log(innerVar)
    innerFun()
}
// outherFun()


const globalVar = 0
function func() {
    const funcVal = 1
    console.log(globalVar, funcVal)
    function innerFun() {
        const innerVal = 2
        console.log(globalVar, funcVal, innerVal)
        function innerOfInnerFun() {
            const innerOfInnerVal = 3
            console.log(globalVar, funcVal, innerVal, innerOfInnerVal)
        }
        innerOfInnerFun()
    }
    innerFun()
}
// func()

const errorMessage = 'File not found'
setTimeout(function callback() {
    console.log(errorMessage)
}, 1000)

let pageCount = 0
const item = [4,5,7,8]
item.forEach(function iterator(num){
    pageCount ++
    console.log(num)
})
console.log('Page count', pageCount)