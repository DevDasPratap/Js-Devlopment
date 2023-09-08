// Json important in nodejs => show backend data in webpages
const obj = {
    name: 'pratap das',
    ph: 700000000,
    pin:721602,
    email:'pratap@das.com'
}
console.log('object: ', obj)

// object to json
const jsonData = JSON.stringify(obj) //convert to json
console.log('Json :', jsonData)

const objData = JSON.parse(jsonData) //convert to object
console.log('object data: ', objData)