// const url = 'https://jsonplaceholder.typicode.com/users'
// const getData = async (url)=>{
//     const result = await fetch(url)
//     console.log(await result.json())
// }

// getData(url)

// const url = 'https://jsonplaceholder.typicode.com/users'

// const getUser = async (url)=>{
//     try {
//         const result = await fetch(url)
//         const data = await result.json()
//         if (data && data.length > 0) {
//            const last = data[data.length-1]
//            console.log(last?.address)
//         }
//     } catch (error) {
//         console.log(error.toString())
//     }
// }
// getUser(url)


const url = 'https://jsonplaceholder.typicode.com/users'

const getUser = async (url)=>{
    try {
        const result = await fetch(url)
        const data = await result.json()
        let index = 0;

        const printData = () => {
            if (index < data.length) {
                console.log(data[index].name);
                index++;
            }
        };
        setInterval(printData, 4000);
    } catch (error) {
        console.log(error.toString())
    }
}
getUser(url)