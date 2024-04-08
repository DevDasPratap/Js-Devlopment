const bcrypt = require('bcrypt')
const userSchema = require('../models/user.model')
const userRegister = async (req, res) => {
    try {
        const { name, email, password, mobile } = req.body
        const isExistUser = await userSchema.findOne({email})
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
        return res.status(200).json({
            success: true,
            message: 'User register successfully',
            user: userData
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    userRegister
}