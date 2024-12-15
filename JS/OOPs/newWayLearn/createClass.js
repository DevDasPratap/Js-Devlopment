// create class => previous stage of object

class Person{ // create class
    firstName='Pratap' // variable add
    isIndian=true
    getName(){ // function add
        return `My name is ${this.firstName}`
    }
}

// create class to Object
const personObj = new Person()
// console.log(personObj)
// console.log(personObj.isIndian)


// class constructor
class Sum {

    // construtor auto create and execute when object is created.
    //  construtor take a parameter
    // construtor method can't return any result
    constructor(num1, num2){ // parameter pass
        console.log('i am construtor method')
        let sum = num1+num2
        console.log(sum)
    }
    num1=4
    num2=5
    addToNum(){
        return this.num1+this.num2
    }
}

// const sumA = new Sum()
// const sumB = new Sum(4, 5) // here () is actually construtor (param)



// Change class properties value using constructor
class SumNum{
    num1=4
    num2=5
    constructor(a, b){
        this.num1=a
        this.num2=b
    }
    addToNum(){
        return this.num1+this.num2
    }
}

const sumNumGet = new SumNum(40, 50)
// console.log(sumNumGet.addToNum())