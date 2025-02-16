/**
 * Asynchronous Programming
 * - Tasks do not happen at the same time.
 * - Code does not run in order; it moves to the next task without waiting.
 * - Used when tasks take time, like loading data from a server.
 * 
 * 
 * Process vs Thread
 * - A process is like a full program running on a computer.
 * - A thread is a small part inside a process that does work.
 * 
 * 
 * JavaScript is Single-Threaded
 * - JavaScript has only one main thread (can do one thing at a time).
 * - But it can switch between tasks quickly (like multitasking).
 * - This makes it seem like JavaScript is handling many things at once.
 * 
 * 
 * JavaScript Asynchronous Methods
 * - **Callback** → A function that runs when a task is done.
 * - **Promise** → A way to handle success or failure of a task.
 * - **Async/Await** → A simple way to write async code that looks like normal code.
 */


// const getUser = () =>{
//     return {
//         user: 'Pratap Das'
//     }
// }

// const main = () =>{
//     const userInfo = getUser()
//     console.log({userInfo})
// }

// main()



// const getUser = () =>{
//     setTimeout(()=>{
//         return {
//             user: 'Pratap Das'
//         }
//     }, 4000)
// }

// const main = () =>{
//     const userInfo = getUser()
//     console.log({userInfo})
// }

// main()



const getUser = (callback) =>{
    setTimeout(()=>{
        const uInfo = {
            user: 'Pratap Das'
        }
        callback(uInfo)
    }, 4000)
}

const getUserSync= () =>{
    const userInfo = {
        user: 'Pratap Das'
    }
    return userInfo
}

const main = () =>{
    getUser(function (userInfoObj) {
        console.log('async', userInfoObj)
        console.log('Done')
    })

    const userInfoSync = getUserSync()
    console.log('Sync', userInfoSync)
}


main()