const { error } = require('console')
const http = require('http')

const options = {
    hostname: 'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}
/*
URL = http://www.example.com/course/search?q=term/#javascript
http: protocol
www:subdomain
example:domain
com:extention
course:sub directory
search:path
?q=term: query string
#javascript: perticular slug/resource point
*/
const apiRequest = http.request(options, (apiResponse)=>{
    apiResponse.on('data', (data)=>{
        console.log(data.toString())
    })
})
apiRequest.on('error', (error)=>{
    console.log(error)
})
apiRequest.end()