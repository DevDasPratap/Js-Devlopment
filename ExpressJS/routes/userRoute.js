const express = require('express')
const { getRoot, createUser, getUsers, deleteUser, editUser } = require('../controllers/userController')

const router = express.Router()
router.get('/', getRoot)
router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.delete('/id:', deleteUser)
router.put('/:id', editUser)
module.exports = router