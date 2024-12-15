// Encapsulation Using Closures 

function createCounter() {
    let count=0
    return{
        increment: function() {
            count++
        },
        decrement: function() {
            count--
        },
        getCount: function() {
            return count
        }
    }
    
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()

// console.log(counter.getCount())




// Encapsulation Using ES6 Classes 
class CreateCounter{
    #count=0 // private
    increment(){
        this.#count++
    }
    decrement(){
        this.#count--
    }
    getCount(){
        return this.#count
    }
}

const counterObj = new CreateCounter()

counterObj.increment()
counterObj.increment()
counterObj.increment()
counterObj.increment()
counterObj.increment()
counterObj.decrement()
console.log(counterObj.getCount())

// Encapsulation Using Constructor Functions