/**
 * Events- file open/read, browser open, network call etc.
 * 
 */
// custom event
const events = require('events')
const myEvent = new events.EventEmitter() //EventEmitter is class, use new keyword for create an object 
// console.log('Events: ',events)
// console.log('New event: ', new events)
// console.log('Event class:', events.EventEmitter())
// console.log('Class event in object:', myEvent)

myEvent.on('test-event', ()=>{ //event create/subcription
    console.log(`Called test event`)
})

// called/publishing event
myEvent.emit('test-event')