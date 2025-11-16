// Understanding the syntax sugar of classes
class Product {

    // i comment below name, price, description still work becasue this refer to empty object
    // name
    // price
    // description
    constructor(n,p,d){
        this.name = n
        this.price = p
        this.description = d

        // return '10' // primitive not effect
        // return {x:10}
        return this // if you dont return anything, it is equal to saying return this
    }
    display(){}
}

const p = new Product('Bag', 100, 'a cool bag')
console.log(p)

console.log(this)
console.log()