const EventEmitter = require('events')
const emitter = new EventEmitter()
// console.log('EventEmitter Print:', EventEmitter)
// console.log('Emitter Print:', emitter)

// register a listerner for RingingBell event
// emitter.on('RingingBell', (anything)=>{
//     console.log(`1hr completed and ${anything}`)
// })
// or

// raised an event
// emitter.emit('RingingBell')
// or
// setTimeout(()=>{
//     emitter.emit('RingingBell', '2nd half start')
// }, 2000)

// or
emitter.on('RingingBell', ({ time, message }) => {
    console.log(`1hr completed and ${time} ${message}`)
})
setTimeout(() => {
    emitter.emit('RingingBell', {
        time: 'First',
        message: 'Time ended'
    })
}, 2000)