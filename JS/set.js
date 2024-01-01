const mySet = new Set()
console.log(mySet)

mySet.add(10)
mySet.add('10')
mySet.add(10) // this value not added bcz set only allow unique value
mySet.add(100)
mySet.add(1000)
console.log(mySet)
console.log(mySet.has(100))
console.log('Delete: ', mySet.delete(100))
console.log(mySet.has(100))
console.log(mySet)
console.log(mySet.size)

const numbers = new Set()
console.log(numbers)

numbers.add(1)
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(3)
numbers.add(4)
console.log(numbers)

const unique = new Set()
const numArray = [1,2,3,4,5,2,3,4]
for (let i = 0; i < numArray.length; i++) {
    unique.add(numArray[i])
}
console.log(numArray)
console.log(unique)

let set2 = new Set([1,2,3,4,5,6,7,8]);
let set3 = new Set('Pratap');
console.log(set2)
console.log(set3)

const dup = [1,1,2,2,2,3,4,8,5,9,5,7,10,10,9, null, true, false, null, undefined, 'das', 'dev']
const uniqueVal = (new Set(dup))
console.log('obj to arr: ', Array.from(uniqueVal))
// or
console.log('object to arr: ', [...uniqueVal])
console.log(uniqueVal.has(5))
console.log(uniqueVal.size)
console.log(uniqueVal.delete(2))
console.log(uniqueVal)

// uniqueVal.forEach((e)=>console.log(e))

for(let item of uniqueVal.keys()){
    console.log('Key: ', item)
}

for(let val of uniqueVal.values()){
    console.log('Value: ', val)
}
for (const [key, value] of uniqueVal.entries()) {
    console.log(`Key: ${key} and Value: ${value}`)
}


// console.log(uniqueVal.clear())
// console.log(uniqueVal)

const obj_to_arr = Array.from(uniqueVal)
// console.log('Arr: ', obj_to_arr)



