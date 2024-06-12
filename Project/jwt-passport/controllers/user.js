const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userRegister = async (req, res)=>{
    try {
        const {name, email, password} = req.body
        if (!name && !email && !password) {
            return res.status(400).json(
                {
                    message: 'Mandatory field are required'
                }
            )
        }
    
        const user = await User.findOne({email})
        if (user) {
            return res.status(400).json(
                {
                    message: 'Already user exist with this email id'
                }
            )
        }
        const hashedPassowd = await bcrypt.hash(password, 10)
        const newUser = await new User({name, email, password: hashedPassowd}).save()
        return res.json(
            {
                success: true,
                message:"User successfully created"
            }
        )
    } catch (error) {
        console.log(error.toString())
        return res.status(500).json(
            {
                success: false,
                message:'Error in signup'
            }
        )
    }
}

const userLogin = async (req, res)=>{
    try {
        const {email, password} = req.body

        if (!email && !password) {
            return res.status(400).json(
                {
                    message: 'Mandatory field are required'
                }
            )
        }
        const userExist = await User.findOne({email})

        if (!userExist) {
            return res.status(400).json(
                {
                    message: 'User not exist in db'
                }
            )
        }

        const isPasswordMatched = await bcrypt.compare(password, userExist.password)
        if (!isPasswordMatched) {
            return res.status(400).json(
                {
                    message: 'You enter wrong password'
                }
            )
        }
        const payload = {
            _id: userExist._id,
            email: userExist.email,
        }
        const token = await jwt.sign(payload, 'secrectkey', {expiresIn: '30d'}, (err, token)=>{
            if (err) {
                return res.status(400).json(
                    {
                        message: 'Error in generating token'
                    }
                )
            }
            return res.json(
                {
                    success: true,
                    message: 'User logedin successfully',
                    token: token
                }
            )
        })
        
    } catch (error) {
        console.log(error.toString())
        return res.status(500).json(
            {
                success: false,
                message:'Error in login'
            }
        )
    }
}

const userProfile = async(req, res)=>{
    try {
        const {id} = req.params
        const userProfile = await User.findById({_id:id}).select('-password')
        return res.json(userProfile)
    } catch (error) {
        console.log(error.toString())
        return res.status(500).json(
            {
                success: false,
                message:'Error in get profile'
            }
        )
    }
}

module.exports = {userRegister, userLogin, userProfile}