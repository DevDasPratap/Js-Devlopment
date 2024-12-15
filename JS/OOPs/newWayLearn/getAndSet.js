// geter and seter

class Product {
    constructor(){} //how to set and using constructor

    set setPrice(value){
        this.price = value
    }
    
    get getPrice(){
        return this.price
    }
}

const fruit = new Product()
console.log(fruit)
fruit.setPrice=10 // here set not a function it speacial method to set property
console.log(fruit)
console.log(fruit.getPrice)