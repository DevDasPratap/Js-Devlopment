const express = require('express')
const multer = require('multer')
const userRouter = express()
const path = require('path')
const { userRegister } = require('../controllers/user.controller')

userRouter.use(express.json())


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, path.join(__dirname, '../public/images'))
        }
    },
    filename: function(req, file, cb){
        const name = Date.now()+'-'+file.originalname
        cb(null, name)
    }
})

const upload = multer({
    storage: storage
})

userRouter.post('/register', upload.single('image'), userRegister)

module.exports = userRouter