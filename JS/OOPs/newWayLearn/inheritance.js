// Inheritance => child alaway access preant property

// class Parent{
//     static firstName='Keka'
//     lastName="Das"
//     getFullName(){
//         console.log(`Fullname: ${this.firstName} ${this.lastName}`)
//     }
// }
// class Child extends Parent{
//     // how access parent property like lastname
// }

// const parentObj = new Parent()
// parentObj.firstName

// const childObj = new Child()
// console.log(childObj.getFullName())



// // parent constructor to access child
// class Parent{
//     constructor(msg){
//         // console.log('i am parent constructor')
//         console.log(`message: ${msg}`)
//     }
// }
// class Child extends Parent{

// }

// const parentObj = new Parent('from Parent')

// const childObj = new Child('from Child')



// // child constructor to access parent using super
// class Parent{

// }
// class Child extends Parent{
//     constructor(msg){ // only constructor have in child class
//         super()
//         console.log('i am child constructor')
//         console.log(`message: ${msg}`)
//     }
// }

// const parentObj = new Parent('from Parent') // parent not able get any data from child

// const childObj = new Child('from Child')




// // child and parent constructor 
// class Parent {
//     constructor(msgParent) {
//         // console.log('i am parent constructor')
//         console.log(`message: ${msgParent}`)
//     }
// }
// class Child extends Parent {
//     constructor(msg) { // only constructor have in child class
//         super()
//         // console.log('i am child constructor')
//         console.log(`message: ${msg}`)
//     }
// }

// const parentObj = new Parent('from Parent')

// const childObj = new Child('from Child')



// static with inheritance

// class Parent {
//     // constructor(msgParent) {
//     //     // console.log('i am parent constructor')
//     //     console.log(`message: ${msgParent}`)
//     // }

//     static greet(){
//         console.log('Parent: Hi good day ')
//     }
// }
// class Child extends Parent {
//     // constructor(msg) { // only constructor have in child class
//     //     super()
//     //     // console.log('i am child constructor')
//     //     console.log(`message: ${msg}`)
//     // }

//      greetChild(){
//         console.log('Child: Hi good day ')
//     }
// }

// const parentObj = new Parent()
// Parent.greet()

// const childObj = new Child()
// Child.greet()
// childObj.greetChild()


// Overriding
class Parent {
    addNum(){
        let num1=4
        let num2=5
        console.log(num1+num2)
    }
}
class Child extends Parent {
    addNum(){
        let num1=40
        let num2=50
        console.log(num1+num2)
    }
}

// const parentObj = new Parent()
// console.log('parentObj', parentObj.addNum())

// const childObj = new Child()
// console.log('childObj', childObj.addNum())


// Method Overloading

class MyClass{
    /**  if have same method name then param will diffrent it have c++, java
         in js has no direct support for Method Overloading
    */
    myMethod(parap1, param2){}
    myMethod(param1, param2, param3){}
}