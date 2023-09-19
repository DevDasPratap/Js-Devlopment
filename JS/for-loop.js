// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     if (i==5) {
//         console.log('5 continue')
//         continue
//     }
//     if (i==6) {
//         console.log('6 break')
//         break
//     }
//     console.log('This is loop: ',i)
// }

// problem - 1
// for(let isLogedIn=false, i=0; !isLogedIn; i++){
    //     console.log(`Incorrect login credential`)
    //     if (i==3) {
        //         isLogedIn = true
        //     }
// }
// console.log(`Succcesfully logedin`)

// problem - 2
for(let i=1; i<= 100; i++){
    if (i===50) {
        console.log('Half way there')
        continue
    }
    if (i===100) {
        console.log('All printed done')
        continue
    }
    if (i%10===0) {
        console.log(`Checkpoint- ${i}`)
    }
}
