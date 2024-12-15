class Person {
    firstName = 'Pratap'
    static lastName='Das' // static use for share this property (use for utility function => form/data validation, rest api call req/res error related, token get/verify)
    getName(){
        return `My name is ${this.firstName}`
    }
}

const aPerson = new Person()
// console.log(aPerson.getName())

console.log(Person.firstName) // directly can't access
console.log(aPerson.lastName) // using instance cant access

console.log(Person.lastName) //directly access