import client from "./client.js";

async function init() {
    // get
    // const result = await client.get('msg:1')
    // const result2 = await client.get('user:7')
    // console.log(`Result: ${result} ${result2}`)

    // set
    // await client.set('msg:8', 'Hey from Node.js')
    // const result3 = await client.get('msg:8')
    // console.log(`set result3 ${result3}`)

    // expire
    // await client.expire('msg:8', 100) // 10 second
    // const result4 = await client.get('msg:8')
    // console.log('result4', result4)

}

init()