// Function constructor

// const Computer = function (name, model) {
//     this.name = name
//     this.model = model
// }
// Computer.sayAboutComputer = function (){ //satict method
//         console.log('Hi i am asus')
//     }

// const asus = new Computer('Asus cell', 23)
// console.log(asus)

// Computer.sayAboutComputer()



// Class constructor

class Computer {
    constructor(name, model) {
        this.name = name
        this.model = model
    }
    aboutComputer () {
        console.log(`This computer name: ${this.name} and model: ${this.model}`)
    }
    static sayAboutComputer = function (){ //static method
        console.log('Hi i am asus')
    }
}
const asus = new Computer('Asus cell', 23)

console.log(asus)
asus.aboutComputer()

Computer.sayAboutComputer() //satic method call