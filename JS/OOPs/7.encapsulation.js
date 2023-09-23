// Encapsulation in JS between class constructor
class Computer {
    #warenty //# = private, private mean only access inside a class
    constructor(name, model, warenty) {
        this.name = name
        this.model = model
        this.#warenty = warenty //private field
    }
    aboutComputer() {
        this.#aboutWarenty()
        console.log(`This computer name is ${this.name} and model is: ${this.model}`)
    }
    #aboutWarenty() { //private method
        console.log(`${this.name} provide: ${this.#warenty} year warenty`)
    }
}

const laptop = new Computer('Asus', 22, 1)
console.log(laptop)
console.log(laptop.warenty) //can't access private property
laptop.aboutComputer()
// laptop.aboutWarenty() //can't access private method
