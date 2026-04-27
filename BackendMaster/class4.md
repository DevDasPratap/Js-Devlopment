Event Loop

process.nexttick: Every time the runtime calls back into JavaScript for an event, we call it a tick(loop/itration).

Event Loop Phases Overview:
 - timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
 - pending callbacks: executes I/O callbacks deferred to the next loop iteration.
 - idle, prepare: only used internally.
 - poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
 - check: setImmediate() callbacks are invoked here.
 - close callbacks: some close callbacks, e.g. socket.on('close', ...).

Event Loop inside:
tick, promises, timers, I/O operation, poll, check, close

tick: 
global: this global kind of global variables, that are avaliable for you through out your journey
 - example: in nodejs-> process, require, module, console
 - example: in browser -> window, document

process: it process global give us access to diffrent property associted to your current process.
livuv expose environment variable
example: process.env -> it will do to access all of the access env variable, so ENV kind of object it is avaliable

env variable is OS level variable

Promise.resolve().then(()=>console.log('Printing from promise'))

// this function takes a callback by calling process.nexttick we instruct node to invoke this callback function. at the end of current operation before the next starts.
process.nextTick(()=>console.log('Printing from nexttick'))
setTimeout(()=>console.log('Printing from timer'), 0)