// Abstraction in JS between class constructor
class Computer {
    constructor(name, model) {
        this.name = name
        this.model = model
    }
    aboutComputer() {
        console.log(`This computer name is ${this.name} and model is: ${this.model}`)
    }
}

// const laptop = new Computer('Asus', 22)
// console.log(laptop)

class Apple extends Computer {
    constructor(name, model, warenty) {
        super(name, model)
        this.warenty = warenty
    }
    // aboutComputer(){
    //     console.log(`This computer name is ${this.name} and model is: ${this.model}`)
    // }
    aboutWarenty() {
        console.log(`${this.name} provide: ${this.warenty} year warenty`)
    }
    useComputer(value) {
        // console.log(`Your ${this.warenty * 12 - value} month warenty remaining`)
        console.log(`Your ${(this.warenty * 12 * 30) - (value*30)} day warenty remaining`)
    }
}
const apple = new Apple('Apple', 'Air m1', 1)
console.log(apple)

apple.aboutComputer()
apple.aboutWarenty()
// apple.useComputer(5)
apple.useComputer(5.4)