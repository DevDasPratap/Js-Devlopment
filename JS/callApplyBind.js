// Call, Apply, Bind => function/method bulid in pre defined method
// Call => Call method allow an object to used the function/method of another object

const person = {
    f_name: 'Pratap',
    l_name:'Das',
    fullName:function (hometown, country) {
        return this.f_name + " " + this.l_name + ", " + hometown + ", " + country
    }
}
const person2 = {
    f_name: 'Dev',
    l_name:'D',
}
// console.log(person.fullName.call(person2, 'Haldia', "INDIA"))
const callResult = person.fullName.call(person2, 'Haldia', "INDIA")
console.log(callResult)

// Apply => call and apply are same, only arrgument pass are diffrent
// Apply => argument pass with in Array
// console.log(person.fullName.apply(person2, ['Haldia', 'India']))
const applyResult = person.fullName.apply(person2, ['Haldia', 'India'])
console.log(applyResult)

// Bind => call and bind are same, not immediate invoke
// obj(person2) bind with function(fullname) of obj(person) and return a function
const bindResult = person.fullName.bind(person2, 'Haldia', "Bharat")
console.log(bindResult)
console.log(bindResult())

// const userDetails = {
//     name:'Pratap',
//     id:100,
//     designation: 'Software developer',
//     printDetail:function(){ //can't access without 'this'
//         console.log(this)
//         console.log(this.name)
//         console.log(this.designation)
//     }
// }
// userDetails.printDetail()


// Call
// const userDetails = {
//     name:'Pratap',
//     id:100,
//     designation: 'Software developer',
//     printDetail:function(){ //can't access without 'this'
//         console.log(this)
//         console.log(this.name)
//     }
// }
// userDetails.printDetail()

// const contactDetails = {
//     name:'PD',
//     company:'BCD'
// }
// // Borrow function
// userDetails.printDetail.call(contactDetails)


// const userDetails = {
//     name:'Pratap',
//     id:100,
//     designation: 'Software developer',
// }
// let printDetail = function(){
//     console.log(this)
//     console.log(this.name)
// }
// printDetail.call(userDetails)

// const contactDetails = {
//     name:'PD',
//     company:'BCD'
// }
// // Borrow function
// printDetail.call(contactDetails)

