// async function getData() {
//     const result = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(await result.json())

// // return await result.json()
// }
// getData()

// weather api
// const button = document.querySelector('#search-btn')
// const input = document.querySelector('#input')
// const cityName = document.querySelector('#city-name')
// const cityTime = document.querySelector('#city-time')
// const cityTemp = document.querySelector('#city-temp')
// async function getData(cityName){
//     const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ce5576cbcf8d42e2b85144508242602&q=${cityName}&aqi=yes`)

//     return await response.json()
// }
// button.addEventListener('click', async()=>{
//     const value = input.value
//     const result = await getData(value)
//     cityName.innerText = `City: ${result.location.name}, ${result.location.region},  ${result.location.country}`;
//     cityTime.innerText = `Time: ${result.location.localtime}`;
//     cityTemp.innerText = `Temperature: ${result.current.temp_c}°C`;
//     return

// })


// get current location
async function getData(latitude, longitude){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ce5576cbcf8d42e2b85144508242602&q=${latitude},${longitude}&aqi=yes`)

    return await response.json()
}
const getmylocation = document.querySelector('#getmylol')
const myloc = document.querySelector('#myloc')

async function getLocation(position) {
    console.log(position.coords)
    const data = position.coords
    const result = await getData(data.latitude, data.longitude)
    console.log(result)
    myloc.innerText = `${result.location.name}, ${result.location.region}, ${result.location.localtime}`
    return result
}
function failedToGet() {
    console.log('User location access not allow')
}
getmylocation.addEventListener('click', ()=>{
    const result = navigator.geolocation.getCurrentPosition(getLocation, failedToGet)
})
