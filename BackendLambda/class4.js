Promise.resolve().then(()=>console.log('Printing from promise'))
process.nextTick(()=>console.log('Printing from nexttick'))
setTimeout(()=>console.log('Printing from timer'), 0)



console.log('Start')
setTimeout(() => {console.log('Timer: 1')}, 0); // callback will waiting in the timer queue
Promise.resolve().then(()=>console.log('Promise 1')) // callback will waiting in the promise queue
process.nextTick(()=>console.log('Next Tick: 1'))  // callback will waiting in the nextTick queue

setTimeout(() => {console.log('Timer: 2')}, 0); // callback will waiting in the timer queue
process.nextTick(()=>console.log('Next Tick: 2'))  // callback will waiting in the nextTick queue
for(let i=0; i<1000000000; i++){} // by the time this loop complete all the callacks are thier respective queue
console.log('End')