const express = require('express')
const path = require('path')
const multer = require('multer')
const router = express()

router.use(express.json())
const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, path.json(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
        const name = Date.now()+'-'+file.orginalname
        cb(null, name)
    }
})

const upload = multer({storage: storage})

module.exports = router