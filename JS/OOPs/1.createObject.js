// There are three way to make object in OOPs
// 1. Function constructure
// 2. Classes
// 3. Object.create()


// 1. Function constructure
// const computer = function () {
//     console.log(this)
// }
// const pc = new computer() // craete object with new(new => create instance/constructor)

// 4 rules of functional constructor
// 1. create an empty obj {}
// 2. function is called this = obj {}
// 3. obj {} linked to prototype
// 4. obj {} will retuen automatically
// const obj = {}
// obj.name = 'Pratap Das'
// obj.add = 'Kolkata'
// console.log(obj)

// const Computer = function (name, model) {
//     this.name = name
//     this.model = model
//     this.aboutComputer = function(){
//         console.log(`This computer name: ${this.name} and model: ${this.model}`)
//     }
// }
// const dell = new Computer('Inspiron', '91')
// console.log(dell)
// const apple = new Computer('MacBook', 'Air')
// console.log(apple)
// dell.aboutComputer()
// apple.aboutComputer()

// prototype => separate from function/class, after function/class call
const num = [10, 5, 7, 9, 16]
const evenNum = num.filter(e=>e%2===0)
console.log(evenNum)
console.log(Array.prototype)
console.log(new Array()) //craete new blank array

const Computer = function (name, model) {
    this.name = name
    this.model = model
}
Computer.prototype.aboutComputer = this.aboutComputer = function(){
    console.log(`This computer name: ${this.name} and model: ${this.model}`)
}
const dell = new Computer('Inspiron', '91')
console.log(dell)
const apple = new Computer('MacBook', 'Air')
console.log(apple)
dell.aboutComputer()
apple.aboutComputer()

console.log(Computer.prototype)
console.log(apple.__proto__)
console.log(apple.__proto__.__proto__)
console.log(apple.__proto__.__proto__.__proto__)
console.log(Computer.prototype === apple.__proto__)

console.log(Object.getPrototypeOf(dell))
console.log(dell.hasOwnProperty('name'))

// challenge - task
const HouseRent = function(amount){
    this.amount = amount
}
HouseRent.prototype.houseRentIncrementByYearly = function(amount){
    this.amount += 1000
    console.log(`Next year my house rent will be ${this.amount}`) 
}
HouseRent.prototype.houseRentDecrementByYearly = function(amount){
    this.amount -= 1000
    console.log(`Next year my house rent will be ${this.amount}`) 
}
const pdHouse = new HouseRent(5000)
console.log(pdHouse)
pdHouse.houseRentIncrementByYearly()
pdHouse.houseRentIncrementByYearly()

pdHouse.houseRentDecrementByYearly()
pdHouse.houseRentDecrementByYearly()


// Object.create()
const Computers = {
    name : '',
    model : '',
    aboutComputer(){
        console.log(`This computer name: ${this.name} and model: ${this.model}`)
    }
}

const laptop = Object.create(Computers) //create obj {}
console.log(laptop)
laptop.aboutComputer()

laptop.name = 'Apple'
laptop.model = 'Air'

console.log(laptop)
laptop.aboutComputer()