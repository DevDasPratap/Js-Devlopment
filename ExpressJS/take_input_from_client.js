/**
 * req.body = lager amount of data/ serect/sensetive/encrypted data
 * req.params = url palaceholder type data send ex - /user/1 /user/1/products/123
 * req.query = url query ex - http://localhost:8000/product/?page=1&limit=10
 */

const express = require('express')

const app = express()

// get query
// http://localhost:8000/users/?page=1&limit=10&name=abc
app.get('/users', (req, res)=>{
    const {limit, page, name} = req.query
    console.log(limit, page, name)
    res.json({limit, page, name})
})

app.get('/user/:id', (req, res)=>{
    const params = req.params
    console.log(params)
    res.json({params})
})

app.use(express.json())
app.get('/my', (req, res)=>{
    const body = req.body
    console.log(body)
    res.json({body})
})

app.listen(8000)