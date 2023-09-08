// duplicate string removed
const arr = ['ram', 'sam', 'dev', 'devi', 'dev', 'Ram']
const uniqueArr = []
for(let i=0; i<=arr.length-1; i++){
  let count = 0;
  for(let j=0; j<=arr.length-1; j++){
    if (arr[i] == arr[j]) {
      count++;
    }
  }
  if(count === 1){
      uniqueArr.push(arr[i])
  }
}
// console.log(uniqueArr)

// ------ deep and shallow copy ------
const obj = {
    name:'Pratap'
}
const user = obj // not data copy, it copied location/reference
console.log(obj)
console.log(user)

user.name = 'PD'

console.log(obj)
console.log(user)

// not working with premitive data type
let nam = 'das'
let newName = nam
console.log(nam)
console.log(newName)
newName = 'dev'
console.log(nam)
console.log(newName)

// when we copied variable that time copy only data, but when
// we copied object that time copy location/reference

// Shallow copied
// const obj1 = {
//     name:'Pratap',
// }
// // const user1 = Object.assign({},obj1)
// // or
// const user1 = {...obj1}
// console.log(obj1)
// console.log(user1)

// user1.name = 'PDas'
// user1.add.pin = 700000 

// console.log(obj1)
// console.log(user1)


// Deep copied
const obj2 = {
    name:'Pratap',
    add:{
        city:'Haldia',
        pin:721602
    }
}

const user2 =  JSON.parse(JSON.stringify(obj2))
console.log(obj2)
console.log(user2)

user2.name = 'ahszv'
user2.add.pin = 700000 

console.log(obj2)
console.log(user2)