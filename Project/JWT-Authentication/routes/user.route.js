const express = require('express')
const multer = require('multer')
const userRouter = express()
const path = require('path')
const { userRegister } = require('../controllers/user.controller')
const { registerValidator } = require('../helpers/validation')

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
const fileFilter = (req, file, cb)=>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    }else{
        cb(null, false)
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

userRouter.post('/register', upload.single('image'), registerValidator, userRegister)

module.exports = userRouter