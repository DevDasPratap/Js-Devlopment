// Polymorphism in JS between class constructor = multi varient
class Computer{
    constructor(name, model){
        this.name = name
        this.model = model
    }
    aboutComputer() { //hide this method when use Apple class
        console.log(`This computer name is ${this.name} and model is: ${this.model}`)
    }
}

class Apple extends Computer{
    constructor(name, model, color){
        super(name, model)
        this.color=color
    }
    aboutComputer() { // call this method
        console.log(`This computer name is ${this.name} and model is: ${this.model} and color: ${this.color}`)
    }
}
const apple = new Apple('MacBook', 'Air m1')
console.log(apple)
apple.aboutComputer()

const apple2 = new Apple('MacBook', 'Air m1', 'Gray')
console.log(apple2)
apple2.aboutComputer()