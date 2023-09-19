const animals = {
    id:10,
    name:'rai',
    type:'man',
    'num of legs':4,
    minLegs:4
}
console.log(animals)

animals['name']='Dog'
console.log(animals)
animals.type = 'security'
console.log(animals)
animals["num of legs"] = 2
console.log(animals)

delete animals.type
console.log(animals)

console.log('name' in animals)

console.log(Object.keys(animals))
console.log(Object.values(animals))

// Rename the key from 'oldKey' to 'newKey' using destructuring and spread syntax

// animals.ids = animals.id
// delete animals.id
// console.log(animals)

const {id: ids, ...animal} = animals
const updateObj = {ids, ...animal}
console.log(animals)
console.log(updateObj)
 