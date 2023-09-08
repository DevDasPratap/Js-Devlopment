const fs = require('fs')
const { parse } = require('path')
const obj = {
    name: 'pratap das',
    ph: 700000000,
    pin:721602,
    email:'pratap@das.com',
    age: 25
}
const jsondata = JSON.stringify(obj)
// console.log(jsondata)

// fs.writeFile('JsonInnNode/data.json', jsondata, (error)=>{
//     console.log(`Data saved`)
// })

// fs.readFile('JsonInnNode/data.json', 'utf-8', (error, data)=>{
//     console.log(data)
// })

fs.readFile('JsonInnNode/data.json' , 'utf-8', (error, data)=>{
    const obj = JSON.parse(data)
    console.log(obj)
})