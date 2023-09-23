
class Computer {
    constructor(name, model) {
        this.name = name
        this.model = model
    }
    aboutComputer () {
        console.log(`This computer name: ${this.name} and model: ${this.model}`)
    }
    get computerName(){
        return this.name
    }
    set computerName(value){
        return this.name = value
    }
    
}
const laptop = new Computer('Asus', 23)

console.log(laptop)
laptop.aboutComputer()
console.log(laptop.computerName)
laptop.computerName = 'Apple'
console.log(laptop.computerName)