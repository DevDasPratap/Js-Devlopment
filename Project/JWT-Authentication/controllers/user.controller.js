const bcrypt = require('bcrypt')
const userSchema = require('../models/user.model')
const { validationResult } = require('express-validator')
const { sendMail } = require('../helpers/mailer')

const userRegister = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: error.array()
            })
        }
        const { name, email, password, mobile } = req.body
        const isExistUser = await userSchema.findOne({ email })
        if (isExistUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exist'
            })
        }
        const hashPassowd = await bcrypt.hash(password, 10)
        const user = new userSchema({
            name, email, mobile, password: hashPassowd, image: 'images/' + req.file.filename
        })
        const userData = await user.save()
        const msg = '<p> Hi, ' + name + ', Please <a href="http://localhost:3000/api/verify-mail?id=' + userData._id + '"> Verify </a> your mail. </p>'
        sendMail(email, 'Mail verification', msg)
        return res.status(200).json({
            success: true,
            message: 'User register successfully',
            user: userData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const mailVerification = async (req, res) => {
    try {
        if (req.query.id === undefined) {
            return res.render('404')
        }
        const user = await userSchema.findOne({_id: req.query.id})
        if (user) {
            if (user.isVerified === 1) {
                return res.render('mail-verify', {message: 'Your mail alredy verified'})
            }
            await userSchema.findByIdAndUpdate({_id: req.query.id}, {$set:{
                isVerified:1
            }})
            return res.render('mail-verify', {message: 'Mail has been verified successfully'})
        }else{
            return res.render('mail-verify', {message: 'User not found'})
        }
    } catch (error) {
        console.log(error.message)
        return res.render('404')
    }
}

module.exports = {
    userRegister,
    mailVerification
}