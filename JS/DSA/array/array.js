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


const array = [10, 7, 0, 5, 0, 9, 16, 91, 22, 22, 0]
// Second Largest
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

const findSecondLargest = (array) => {
    let largest = -Infinity; // Start with the smallest possible value
    let secondLargest = -Infinity; // Start with the smallest possible value
    let secondLargestIndex = -1; // Default value if no second-largest exists

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest; // Update second largest
            secondLargestIndex = array.indexOf(secondLargest); // Store index of previous largest
            largest = array[i]; // Update largest
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i]; // Update second largest
            secondLargestIndex = i; // Store index of second largest
        }
    }

    return { secondLargest, secondLargestIndex };
};
const getSecondLargest = findSecondLargest(array)
console.log(getSecondLargest)


// Move All Zeroes to End
// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
// Input: arr[] = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.
// Input: arr[] = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.

const moveAllZeroToEnd = (array)=>{

}
const getMoveZeroResult = moveAllZeroToEnd(array)
console.log(getMoveZeroResult)