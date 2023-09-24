const User = require('../models/userModel')
const mongoose = require('mongoose')
function getRoot(req, res) {
    res.send('Home')
}
const createUser = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email } = req.body
        if (!name || !email) {
            throw new Error('Name and email are required')
        }
        const userExist = await User.findOne({ email: email })
        console.log(userExist)
        if (userExist) {
            throw new Error('User all ready exist')
        }
        const user = await User.create({
            name: name,
            email: email
        })
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

const getUsers = async(req, res)=>{
    try {
        const users = await User.find({})
        if (!users) {
            throw new Error('User not found')
        }
        res.status(200).json({
            success:true,
            users
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

const deleteUser = async(req, res)=>{
    try {
        const userId = req.params.id
        const deleteUser = await User.findByIdAndDelete(userId)
        res.status(201).json({
            success: true,
            message: 'User deleted successfully',
            deleteUser
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}
const editUser = async(req, res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {$set:{name:req.body.name, email: req.body.email}})
        res.status(201).json({
            success: true,
            message: 'User updated successfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
    getRoot,
    createUser,
    getUsers,
    deleteUser,
    editUser
}