const { result } = require("lodash")

function isElegible(age) {
    return new Promise((resolve, reject)=>{
        if (age < 18) {
            return reject('Not eligible for vote')
        }else{
            resolve('Eligible for vote')
        }
    })
}

const state = isElegible(19)
.then((result)=>{
    console.log('Success: ', result)
})
.catch((err)=>{
    console.log('Error:', err)
})

console.log(state)