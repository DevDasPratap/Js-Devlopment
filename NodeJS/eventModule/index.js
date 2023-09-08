const EventEmmiter = require('events')
const fs =require('fs')

const event = new EventEmmiter()

// emit => register
// event.on('click', ()=>{
//     console.log('Click event run now')
// })

// event.emit('click') //emit => register event in nodejs file (emit always last area after event call)


event.on('sum', (a, b)=>{
    console.log(`Sum is: ${a+b}`)
})
event.emit('sum', 10, 91)


console.log(typeof(fs)) //object
console.log(typeof(EventEmmiter)) //function
console.log(typeof(event)) //object