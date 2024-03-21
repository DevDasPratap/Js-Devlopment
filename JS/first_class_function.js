// Higher order/first class function are same
const powerTwo = (n) => {
    return n ** 2
}

function powerCube(powerTwo, n) {
    return powerTwo(n) * n
}

// console.log(powerCube(powerTwo, 3))


function sayHello() {
    return () => {
        console.log('Hello PD')
    }
}

const guessValue = sayHello()

// console.log(guessValue)
// console.log(guessValue())


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n + m + p
        }
        return twoFun
    }
    return oneFun
}

const res = higherOrder(2)(3)(4)

console.log(res)

const arr = [7, 8, 9, 10]
arr.forEach(function (element, index, array) {
    console.log(element, index, array)
})

arr.forEach(function (element, index, array) {
    console.log(String(element))
})

const hinduHeroes = [
    "Rama",
    "Krishna",
    "Hanuman",
    "Arjuna",
    "Bhima",
    "Draupadi",
    "Lakshmana"
];
const hero = ['Parashuram', 'Bali Vibhishana', 'Hanuman', 'Maharishi Ved Vyas', 'Kripacharya', 'Ashwatthama']

hinduHeroes.forEach((e)=>{
    // console.log(e.toUpperCase())
    // console.log(e.toLowerCase())
    // console.log(e.concat(' Om'))
})

const num = [7, 8, 9, 10]

const result = num.every((ele)=>{
   return typeof ele === 'number'
})
console.log(result)