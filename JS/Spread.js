/* Array Spred */

const array = [10, 20, 30, 40, 50]
const arrayCopy = []

for (const value of array) {
    arrayCopy.push(value)
}
arrayCopy.push(60)
arrayCopy.push(70)
arrayCopy.push(80)

console.log(array)
console.log(arrayCopy)

const arrayCopy2 = [10, 20, ...array, 80, 90]
console.log(arrayCopy2)

const str = 'Hello welcome to string'
const stringCopy = [...str]

console.log(str)
console.log(stringCopy)


const mySet = new Set()
mySet.add('Batman')
mySet.add('Robin')
mySet.add('Spiderman')
mySet.add('Batman')

console.log(mySet) //object

const mySetCopy = ['Batman', ...mySet] //copy to array
console.log(mySetCopy)

const myMap = new Map()
myMap.set('Tiger', 1)
myMap.set('Monkey', 5)
myMap.set('Elephant', 2)

console.log(myMap)

const myMapCopy = [...myMap, 'Bool']
console.log(myMapCopy)


/* Object Spread */

const countryPop ={
    Germany:10,
    Brazil:7,
    USA: 22
}

console.log(countryPop)

const countryPopExtent = {}

for (const entry of Object.entries(countryPop)) {
    const country = entry[0]
    const pop = entry[1]
    countryPopExtent[country] = pop
}
countryPopExtent['India'] = 55
countryPopExtent['Russia'] = 25

console.log(countryPopExtent)
// or
const countryPopExtent2 = {
    Germany: 16,
    ...countryPop,
    India: 55,
    Russia: 25
}

console.log(countryPop)
console.log(countryPopExtent2)

// Shallow copy array
const prices = [[10],[20],[30]]
console.log(prices)
const copy = [...prices]
console.log(copy)

// shallow copy
prices[0].pop()
console.log(prices)
console.log(copy)

// Shallow copy object
const countryPopu ={
    Germany:10,
    Brazil:7,
    USA: 22,
    canada:{
        pop:9
    }
}

const countryPopuCopy = {...countryPopu}

console.log(countryPopu)
console.log(countryPopuCopy)

countryPopu.canada.capital = 'Ottawa'

console.log(countryPopu)
console.log(countryPopuCopy)

const views = [[10, 15, 22], [30, 55, 75]]
const viewsCopy = [...views]
viewsCopy[1].push(40)
viewsCopy[0].pop()
viewsCopy.push([100, 200])

console.log(views)
console.log(viewsCopy)


const animal = {
    name: 'Beer',
    kingdom:'Jangle',
    cute:false,
    friends:[{name:'Choto valluk', kingdom:'Jangle'}]
}

const beer = {
    ...animal,
    tail:false
}
console.log(animal)
console.log(beer)

animal.cute = true

console.log(animal)
console.log(beer) // 'cute' can't chge bcz premitive type

animal.friends[0].cute = false

console.log(animal)
console.log(beer)