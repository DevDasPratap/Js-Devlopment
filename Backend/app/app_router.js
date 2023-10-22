const app_router = require('express').Router()

app_router.get('/health',(_, res, next)=>{ // _ or _req mean req variable not used
    // throw new Error('Error')
    res.status(200).json({message:'Success'})
})

module.exports = app_router