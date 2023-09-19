/* Map two type in js
1. functional map also called Array map
2. Class Map / object alternative(advance object)

normal object key are string but in Map key are Number, String, Boolean, etc.

Map are advance object introduce with new features and better performence.

*/

const obj = {
    name:'Pratap',
    10:'This is key',
    true:'boolean value'
}
const data = new Map([
    ['name','Das'],
    [10, 'This is key in Map'],
    [false, 'This is key are boolean'],
])

console.log(obj)
console.log(data)

// console.log(obj.10) // i can't used without string
console.log(obj[10])
console.log(data.get(10))

// get key
// console.log(obj.key) //can't get key or value
console.log(data.keys())
console.log(data.values())

// set
obj.city = 'Kolkata'
data.set('city', 'Haldia')

console.log(obj)
console.log(data)

// console.log(obj.size) // can't get size
console.log(data.size)

console.log(data.has(true))

// loop
// data.forEach((a, b)=>{
//     console.log('a:',a, 'b:', b)
// })

// for (const i of data) {
//     // console.log(i[0]) //key
//     // console.log(i[1]) //value
// }

for (const [key, value] of data) {
    console.log(key)
    console.log(value)
}

console.log(typeof data)


// problem
const maxico = new Map()
console.log(maxico)
maxico.set('id', 22) //set key value peer
maxico.set('name', 'Mexico')
maxico.set('capital', 'Mexico city')
maxico.set('neighbours', ['USA', 'Brazile', 'Vanezulia'])
console.log(maxico)

maxico.set('id', 30)
maxico.set('language', 'Brazilian')

console.log(maxico)

maxico.get('neighbours').push('Peru')
console.log(maxico)
maxico.get('neighbours').shift()
console.log(maxico)



// problem 2
const banana = {name: 'Banana', quantity: 1, price: 1.95}
const apple = {name: 'apple', quantity: 1, price: 1.45}
const candy = {name: 'candy', quantity: 1, price: 3.50}

const store = new Map()
store.set('store number', 5)
store.set('location city', 'Kolkata')
store.set('Location country', 'India')
store.set('Products', [banana, apple, candy])

console.log(store)
console.log(store.get('Products')[0].name)

// covert array object to object
for (let i = 0; i < store.get('Products').length; i++) {
    console.log(store.get('Products')[i])
}