// Array data structure - is an ordered collection of elements that can be accessed using a numerical index

// create custom array
class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }
    get(index){
        return this.data[index]
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }
    shift(){
        const firstItem = this.data[0]
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
        return firstItem
    }
    delete(index){
        const item = this.data[index]
        for (let i = index; i < this.length-1; i++) {
            this.data[i]=this.data[i-1]
        }
        delete this.data[this.length-1]
        this.length--
        return item
    }
}

const myNewArray = new MyArray()
// console.log(myNewArray)
// console.log(myNewArray.push(10))
// console.log(myNewArray.push(100))
// console.log(myNewArray.push('Apple'))
// console.log(myNewArray.push('Pratap'))
// // console.log(myNewArray)
// // console.log(myNewArray.get(1))
// console.log(myNewArray.pop())
// console.log(myNewArray.shift())
// console.log(myNewArray.delete(100))
// console.log(myNewArray)

// reverse
const str = 'apple banana oragnge'
let rev = ''
for (let i = str.length-1; i >= 0; i--) {
    rev += str[i]
}

// console.log(rev)

// palindrom
const palindrom = 'cddc'
let palin = ''
for (let i = palindrom.length-1; i >= 0; i--) {
    palin += palindrom[i]
}

// console.log('palindrom ? ', palindrom === palin ? 'yes' : 'no')

// sentence capitalize first char
const myName = 'pratap das'
const words = myName.split(' ')
let sentence = ''
for(let i=0; i<words.length; i++){
    if (myName[i].charAt(0)) {
        sentence += words[i][0].toUpperCase()+words[i].slice(1)+' '
    }
}
// console.log(sentence)

// fizzBuzz
// const num = 10
// for (let i = 0; i < num; i++) {
//     if (i%3 === 0 && i%5===0) {
//         console.log('FizzFuzz')
//     }else if(i%3===0){
//         console.log('Fizz')
//     }else if(i%5===0){
//         console.log('Fuzz')
//     }
// }

// max profit
