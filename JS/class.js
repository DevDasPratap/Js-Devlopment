class Product {

    // custom constructor - called by default
    constructor(n, p, r) {
        console.log(`Calling the constructor`)
        this.name = n
        this.price = p
        this.rating = r
        // this -> calling context
        // return  -> not required in constructor
        // return {x:0, y:9} return only return object
    }

    // By default construcor bellow
    // Property add / variable / data member
    name
    price
    rating
    // property behariour represent as a function / property member
    display() {
        console.log(this)
        console.log(`Display the current product`)
    }
}


const p = new Product('iphone', 10, 5) // new -> create a empty object, Product('iphone', 10, 5) -> constructor value passed
// In the above piece of code are calling the constructor method 
// new Product() -> constructor
// p -> instance of object/class
// console.log(p)
p.display() // calling this context


function Products(n, p, r) {
    console.log(`Calling the function constructor`)
    this.name = n
    this.price = p
    this.rating = r
}

const pro = new Products('MacBook', 16, 5)
// console.log('Pro:', pro)


let x = {
    p: Products
}
x.p('Airpods', 20000, 5)
// console.log('X: ', x)



const Productt = function (n, p, r) {
    console.log(`Calling the function constructor`)
    this.name = n
    this.price = p
    this.rating = r
}

const prod = new Productt('MacBook', 16, 5)
// console.log('Pro:', prod)


/**
 * this keyword refer to the context from where we called
 * 
 * in the function constructor also
 *  - if you return premitive it is ignored and return object reffred by this
 *  - if you return a custom object, then the custom obj is return
 *  - if you dont return anything, then object reffred by this is returned 
 */

// const Product_arrow = (n,p,r)=> {
//     console.log(`Calling the function constructor`)
//     this.name = n
//     this.price = p
//     this.rating = r
// }

// const produ = new Product_arrow('MacBook', 16, 5)
// console.log('Pro:', produ)

// this not work in arrow function



// let obj = {
//     x: 10,
//     fun(){
//         console.log(this.x)
//     },
//     func: ()=>{
//         console.log(this)
//         console.log(this.x)
//     }
// }

// obj.fun()
// obj.func()



let obj = {
    x: 10,
    fun() {
        console.log(this.x)
        y = {
            innerFuc: () => {
                console.log(this)
                console.log(this.x)
            }
        }
        y.innerFuc()
    },
    // func: ()=>{
    //     console.log(this)
    //     console.log(this.x)
    // }
}

// obj.fun()
// obj.func()

// property add in class in constructor
class Prodc {
    constructor(n, p, r) {
        this.name = n
        this.price = p
        this.rating = r
    }
}

const pr = new Prodc('ABC', 1000, 5)
// same as object
const normal_obj = {}

normal_obj.name = 'Pratap'
normal_obj.price = 100000
normal_obj.rate = 5

// console.log('cpnstructor ', pr)
// console.log('Normal obj', normal_obj)


class Produc {
    #rating //private method
    constructor(n, p, r) {
        this.name = n
        this.price = p
        this.#rating = r
    }

    /**
     * static is class method
     * we cant call with object
     * inside class we call
     * use - db call, network req
     */
    static custom() {
        console.log(`Call static method`)
    }
    display() {
        console.log(this.#rating)
    }
    get getRating() {
        console.log(`Calling a static method ${this.#rating}`)
    }
    set setRating(r) {
        if (r < 0) {
            return
        } this.#rating = r
    }

}

const prodc = new Produc('Mobile', 10, 5)
console.log(prodc.custom) // static not object method, so not work here 
console.log(Produc.custom)
Produc.custom() //static class method
console.log(prodc.rating) //rating cant access bcz private function
prodc.display() // get private data inner class function

prodc.setRating = 100001
prodc.getRating
