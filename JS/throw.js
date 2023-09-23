/*
Exception handling:-
We try to do an operation on something that is undefined.
we try to open a file that is already in use
we try to talk to a database, but it's down.

--Crashing vs recovering gracefully
--Error monitoring/logging
*/



// throw 'There was a bad this that happend'
// console.log('dont print') // bcz upper side throw used

// try {
//     throw 'error here'
// } catch (error) {
//     console.log(error)
// }

// try {
//     const user = {
//         name: 'Alex',
//         age: 21
//     }
//     console.log(user.profile)
// } catch (error) {
//     console.log(error)
// }


// try {
//     console.log('Program started')
//     throw new Error('Uh oh')
// } catch (error) {
//     console.error(error)
// }
// console.log('Program complete')



for(let i=1; i<=10; i++){
    console.log(i)
    try {
        if(i===5){
            throw new Error('Booom')
        }
    } catch (error) {
        console.error(`Error on loop # ${i}`)
    }
}


