// Class expration
// const myClass = class{}

// Class declaration
// class myClass{}

class Computer {
    constructor(name,  model){
        this.name = name
        this.model = model
    }
    aboutComputer(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}`)
    }
}

const asus = new Computer('Asus Intel', 22)
console.log(asus)
asus.aboutComputer()