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