// For CRUD operation
// const app = require ('./crud')

// const PORT = process.env.PORT || 5000

// app.listen(PORT, ()=>{
//     console.log(`Server running on port: ${PORT} for CRUD`)
// })

// For Auth operation
const app = require ('./auth')
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT} for Auth`)
})