// Final oops project after learn
class Car {
    constructor(name, tier) {
        this.name = name
        this.tier = tier
    }
    startCar() {
        return `Start car ${this.name}`
    }
    static staticMethod() {
        return `You could not access this method in instance`
    }
    get getName() { //get is not a funtion is a property
        return `This car name is: ${this.name}`
    }
    set setName(value) {
        this.name = value
    }
}
const ferrari = new Car('Ferrari', 4)
console.log(ferrari)
console.log(ferrari.startCar())

console.log(Car.prototype)
console.log(Car.__proto__)
console.log(ferrari.__proto__)
console.log(Car.prototype === ferrari.__proto__)
// console.log(ferrari.staticMethod()) //can't access
console.log(Car.staticMethod()) // access using class
console.log(ferrari.getName)
ferrari.setName = 'Lumbergine'
console.log(ferrari.getName)
console.log(ferrari)

class Mahindra extends Car {
    constructor(name, tier, light) {
        super(name, tier)
        this.light = light
    }
    carLight() {
        return `Start car ${this.light}`
    }
    carPrice(quantity) { //abstruct
        const price = 500000
        const total = price * quantity
        // return `You have to pay Rs: ${total} for ${quantity} car`
        return `You have to pay Rs: ${total > 0 ? total : 0} for ${quantity > 0 ? quantity : 0} car`
    }
    #hideMethod(){ //Encupsulation
        console.log(`Hide method`)
    }
    hideMethodAccess(){
        this.#hideMethod()
    }
}

const suv = new Mahindra('Mahindra thar', 4, 4)
console.log(suv)
console.log(suv.startCar())
console.log(suv.carLight())

console.log(suv.carPrice())
console.log(suv.carPrice(2))

console.log(suv.hideMethod)
console.log(Mahindra.hideMethod)
console.log(Car.hideMethod)

suv.hideMethodAccess()
































