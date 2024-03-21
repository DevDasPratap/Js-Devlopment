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
console.log(p)
p.display() // calling this context


function Products(n,p,r) {
    console.log(`Calling the function constructor`)
    this.name = n
    this.price = p
    this.rating = r
}

const pro = new Products('MacBook', 16, 5)
console.log('Pro:', pro)


let x = {
    p: Products
}
x.p('Airpods', 20000, 5)
console.log('X: ', x)



const Productt = function(n,p,r) {
    console.log(`Calling the function constructor`)
    this.name = n
    this.price = p
    this.rating = r
}

const prod = new Productt('MacBook', 16, 5)
console.log('Pro:', prod)


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
    fun(){
        console.log(this.x)
        y = {
            innerFuc: ()=>{
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

obj.fun()
// obj.func()