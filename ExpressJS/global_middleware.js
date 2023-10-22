const express = require('express')
const app = express()

// Middleware
const isLogin = (req, res, next) =>{
    console.log(`Req: ${req.url} - Method: ${req.method} - Time: ${new Date().toISOString()}`)
    next()
}
// router spefic middleware
// app.get('/', isLogin, (req, res, next)=>{
//     res.json({message:'Home'})
// })
// app.get('/contact', isLogin, (req, res, next)=>{
//     res.json({message:'Contact'})
// })

// Global middleware
app.use(isLogin) //global middleware
app.get('/', (req, res, next)=>{
    res.json({message:'Home'})
})
app.get('/contact', (req, res, next)=>{
    res.json({message:'Contact'})
})

app.listen(5001, ()=>{
    console.log('Server running on port 5001')
})