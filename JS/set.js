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