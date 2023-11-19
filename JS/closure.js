// Run on browser and check console

const num1 = 2
const sum = function () {
    const num2 = 5
    return function () {
        return num1 + num2
    }
}

const sumFn = sum()
console.dir(sumFn)
console.log(sumFn)