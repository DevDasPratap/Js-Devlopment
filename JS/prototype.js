// in js all are in object
let myHero = ['Hanuman', 'Prasuram']
let  dcHero = ['Batman', 'superman', 'IronMan', 'Spiderman']

let heroPower = {
    hanuman: 'Gada',
    prasuram: 'Trisul',

    getHunumanPower: function () {
        console.log(`Power is ${this.hanuman}`)
    }
}

Object.prototype.pratap = function () {
    console.log(`Pratap is present in all object`)
}

console.log(myHero.pratap())
console.log(heroPower.pratap())

Array.prototype.heyPratap = function () {
    console.group(`Hitesh say hi`)
} 
console.log(myHero.heyPratap())
// console.log(heroPower.heyPratap()) // array can't add on object

const User = {
    name: 'top name',
    email: 'top@mail.com'
}
const Techer = {
    makeVideos: false
}
const TechingSupport = {
    isAvailble: false
}
const TechAsistance = {
    makeAssigement: 'JS Assigment',
    fulltime: true,
    __proto__ : TechingSupport // inherite
}

console.log(TechAsistance.isAvailble)

Techer.__proto__ = User

// new way set 
Object.setPrototypeOf(TechingSupport, Techer)

String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`)
}

'Pratap   '.truelength()
'   Das  '.truelength()
