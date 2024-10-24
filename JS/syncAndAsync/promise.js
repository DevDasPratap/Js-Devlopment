// const resolveBtn = document.querySelector('#resolveBtn')
// const rejectBtn = document.querySelector('#rejectBtn')
// const clearBtn = document.querySelector('#clearBtn')

// const p = new Promise((resolve, reject) => {
//     resolveBtn.addEventListener('click', () => {
//         resolve('Promise Resolve ddd')
//     })

//     rejectBtn.addEventListener('click', () => {
//         reject('Promise Rejected')
//     })
// })
// console.log('Promise status', p)
// p.then((data) => {
//     console.log('Promise status', p)
//     console.log(data);
//     return new Date()
// }).then((data) => {
//     console.log('Promise status', p)
//     console.log(data);
//     return 'Pratap'
// }).then((data) => {
//     console.log('Promise status', p)
//     console.log(data);
// }).catch(err => {
//     console.log('Promise status', p)
//     console.log(err);
// })

// clearBtn.addEventListener('click', ()=>{
//     window.location.reload();
// })


function sumAllPairsLogStep(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) { // Outer loop runs n times
        // console.log('i =>'+ i)
        for (let j = i; j <= n; j *= 2) { // Inner loop runs log(n) times
            console.log('j =>')
            break
            sum += i * j; // Operation inside inner loop
            console.log(sum)
      }
    }
    return sum;
  }

console.log( sumAllPairsLogStep(4))