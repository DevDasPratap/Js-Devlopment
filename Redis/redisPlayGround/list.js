import client from "./client.js";

async function list() {
    // await client.lpush('messages', 1)
    // await client.lpush('messages', 2)
    // await client.lpush('messages', 3)
    // await client.lpush('messages', 4)
    // await client.lpush('messages', 5)

    // const result = await client.rpop('messages')
    const result = await client.lpop('messages')
    console.log('result', result)
}
list()