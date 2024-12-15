// part 1

// object create by object literal
const personObj = {
    firstName: 'Pratap',
    lastName: 'Das',
    city: 'New Town',
    isIndian: true,
    getName: ()=>{
        // console.log(firstName, lastName) // can't access inside object property
        console.log(personObj.firstName, personObj.lastName)
    }
}

// personObj.getName()

// object create by instance of Object
const personInsObj = new Object()

personInsObj.fullName = 'PD'
personInsObj.currentLocation = 'Kolkata'
personInsObj.isIndian = true
personInsObj.getFullName=()=>{
    return `My Name is ${personInsObj.fullName}`
}

// console.log(personInsObj)

// console.log(personInsObj.getFullName())


// object create by constructur of Object

function personConObj(){
    this.firstName='Pratap'
    this.lastName='Das'
    this.isIndian=true
    this.city='New Town'
    this.getFullName=()=>{
        return `My Name is ${this.firstName}`
    }
}

const personConObjInstance = new personConObj()
// console.log(personConObjInstance)
console.log(personConObjInstance.getFullName())
