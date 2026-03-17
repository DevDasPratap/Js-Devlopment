/**
 * class
 * constructor
 * instance
 * inheritance
 * super
 * static
 * Getters
 * Setters
 * public fields
 * private fields
 * this
 * global object
 * call, bind and apply
 */

// const person = {
//     name: 'pratap',
//     city: 'Bengalore',
//     sing: function(){
//         // return 'La la la'
//         return `${this.name} sings la la la`
//     }
// }

// console.log(person.sing())


class Person {
    constructor(firstname){
        this.firstname = firstname
    }
    dance(style = 'tango'){
        return `Hi, i am ${this.firstname} and i like to ${style}`
    }
}

const p = new Person('pd')
console.log(p.dance('salsa'))

const pDance = p.dance
// console.log(pDance()) // error ?