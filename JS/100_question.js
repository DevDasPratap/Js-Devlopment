const getData = async function () {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('somthing went wrong')
        }
        let arr= []
        const result = await response.json()
        for (let i = 0; i < result.length; i++) {
            // console.log(result[i].name)
            await new Promise((resolve)=>{
                setTimeout(resolve, 2000)
            })
            arr.push({id:result[i].id, name:result[i].name})
            console.log(arr)
        }

        const get = arr.find(user=>user.name === 'Kurtis Weissnat')
        console.log(get)
    } catch (error) {
        console.log('err', error)
    }
    }

getData()