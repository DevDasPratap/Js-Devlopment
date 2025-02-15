/**
 * What is class ?
 * Class is a way to create custom data types
 * Class is blue print to create objects
 * Object is an instance of a class
 * 
 * 
 * Parts of a class:
 *    - Constructor: That initializes the object
 *    - Propertes: They keep data
 *    - Functions: Action to be taken on data
 */

// Class
class WagonR {
    constructor() {
        console.log('Constructor called')
        this.model = 'Wagon R soprts'
        this.year = '2022'
        this.carNumber = ''
    }
    printModelAndYear(){
        console.log(`Model is: ${this.model} and yesr: ${this.year} carnumber: ${this.carNumber}`)
    }
    setCarNumber(carNumber){
        this.carNumber = carNumber
    }
}

// const wagonR1 = new WagonR() // create object using this class
// wagonR1.printModelAndYear()
// wagonR1.setCarNumber('WB001010')
// wagonR1.printModelAndYear()

/**
 * Constructor: is a speacial method called when 
 *    - an instance is called
 *    - instance is also called an object
 *    - new keyword is used to create instance
 */

class Car{
    constructor(model, year, carNumber){
        console.log('Constructor called')
        this.model = model
        this.year = year
        this.carNumber = carNumber
    }
    print(){
        console.log(`Model is: ${this.model} and yesr: ${this.year} carnumber: ${this.carNumber}`)
    }
}

// const myCar = new Car('tata', 1999, 101010)
// or
// const myCar = new Car()
// myCar.model = 'Mercedes'
// myCar.year = 2022

// myCar.print()


/**
 * Static
 * Static function and properties are same for all class instance
 * Static function and properties can be accessed without creating instance
 */

class Counter{
    constructor(){
        this.counter = 0
    }
    increment(){
        this.counter++
        console.log('Count: ', this.counter)
    }
    decrement(){
        this.counter--
        console.log('Count: ', this.counter)
    }
}

// const counterInstance = new Counter()

// counterInstance.increment()
// counterInstance.increment()
// counterInstance.increment()
// counterInstance.increment()

// const counterInstance4 = new Counter()

// counterInstance4.increment()
// counterInstance4.increment()
// counterInstance4.increment()
// counterInstance4.increment()

// counterInstance, counterInstance4 are unique so increment and decrement indepently

class CounterWithStaic {
    static counter = 0
    increment(){
        CounterWithStaic.counter++
        console.log('Count: ', CounterWithStaic.counter)
    }
    decrement(){
        CounterWithStaic.counter--
        console.log('Count: ', CounterWithStaic.counter)
    }
}


const staticCount = new CounterWithStaic()
staticCount.increment()
staticCount.increment()
staticCount.increment()
staticCount.increment()
staticCount.increment()

const staticCount4 = new CounterWithStaic()
staticCount4.increment()
staticCount4.increment()
staticCount4.increment()
staticCount4.increment()
staticCount4.increment()