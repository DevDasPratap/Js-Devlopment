/**
 * Basic nature - concat, find, substring
 * Immutable nature - method return new string ex toUpperCase, ex str[5] = 'H' its cant posible
 * Indexing
 * Iterating
 * Concatination
 * Substring
 * Case(conversion, triming, split, join)
 * Replace chartcher
 * Reversing
 * Palindrom
 * Anagram
 * Longest subString
 */


// creating string
const string = new String('Hi Pratap Das')
console.log(string)

const str = 'Hi its PD From Kolkata'
console.log(str)
console.log`Hello`
console.log`Hello ${str}`

function test(name, add, pin) {
    console.log(name, add, pin)
    console.log(name, pin)
    console.log(name, add)
    return
}
const name = 'Pratap'
const add = 'Kolkata'
test`Hi ${name} go ${add} 700160`

console.log(str.length)
console.log(str[4])
console.log(str.charAt(4))

for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
}

// modify
str[3] = 'b' //cant modify
console.log(str)
console.log(str.replace('i', 'I'))
console.log(str.replaceAll('a', 'A'))

const newStr = str.concat('   Add    ')
console.log(newStr)
console.log(newStr.trim())

// searching
console.log(str.indexOf('K'))
console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))
console.log(str.startsWith('H'))
console.log(str.endsWith('a'))
// console.log(str.lastIndexOf('a'))

// extract
console.log(str.substring(10))
console.log(str.substring(5, 10))

console.log(str.slice(5, 16))
// convert
const convert = 1
console.log(typeof String(convert))

// convert obj
const obj = {name: "Pratap", pin: 700016}
console.log(String(obj))
console.log(JSON.stringify(obj))

// compaire
const fruit1 = "Apple"
const fruit2 = "Banana"
const fruit3 = "Banana"

console.log(fruit1.localeCompare(fruit2))
console.log(fruit3.localeCompare(fruit2))
console.log(str.includes('Hello'))

// split and join
console.log(str.split(' '))
console.log(str.split('o'))

const arr = ['me', 'you']
console.log(arr.join(' and '))

const rev = 'a b c defg'
let revStore = ''
for (let i = rev.length-1; i>=0; i--) {
    revStore += rev[i]
}
console.log(revStore)
// or
const revStr = revStore.split('').reverse().join('')
console.log(revStr)


// truncate promblem
const line = 'I have linkedin acc'
function truncate(str, maxLength) {
    if (str.length > maxLength)
    return str.slice(0, maxLength)+'.....'
else return str
}
console.log(truncate(line, 9))


// palindrom
const palin = 'madam'
const palinDrom = function(val){
    if (val < 0) return false
    if(typeof val === "number") val = String(val)
    return val === String(val).split('').reverse().join('')
}
const res = palinDrom(palin)
console.log(res)

// hamming distance //not copy char
const val_a = 'Hello'
const val_b = 'Hwlly '
const hamming = function(val_a, val_b) {
    if (val_a.length !== val_b.length) return console.log('value are not same length')
    let missChar = 0
for (let i = 0; i < val_a.length; i++) {
    if (val_a[i] !== val_b[i]) {
        missChar++
    }
}
return missChar
}

const ham = hamming(val_a, val_b)
console.log(ham)

// Anagram
const ana_a = 'kolkata'
const ana_b = 'atakolk'
const anagram = function (ana_a, ana_b) {
    if(ana_a.length !== ana_b.length) return false

    return ana_a.split('').sort().join('') === ana_b.split('').sort().join('')
}
const anag = anagram(ana_a, ana_b)
console.log(anag)