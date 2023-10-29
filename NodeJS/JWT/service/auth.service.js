const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { find_user_by_property, create_new_user } = require('./user.service')
const error = require('../utils/error')

const register_service = async({name, email, password, role, accountStatus})=>{ //destrucure
    let user = await find_user_by_property('email', email) //key value pass
        if (user) {
            // return res.status(400).json({ message: 'User already exist' })
            // const error = new Error('User already exist')
            // error.status = 400
            // throw error
            throw error('User already exist', 400)
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        return create_new_user({name, email, password: hash, role, accountStatus})
        // return res.status(200).json({ message: 'User created successfully' })
}
const login_service = async({email, password})=>{
    let user = await find_user_by_property('email', email)
        if (!user) {
            // const error = new Error('Login details not match')
            // error.status(400)
            // throw error

            // return res.status(400).json({ message: 'Crediential not match' })

            error('Login details not match', 400)
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            // const error = new Error('Login details not match')
            // error.status = 400
            // throw error

            // return res.status(400).json({ message: 'Crediential not match' })

            error('Login details not match', 400)
        }
        // user.password = undefined
        //or
        // delete user._doc.password
        // or create payload
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            accountStatus: user.accountStatus
        }
        // const token = jwt.sign(user._doc, 'secrect-key') //when create token used sign
        const token = jwt.sign(payload, 'secrect-key', { algorithm: 'HS256', expiresIn: '1hr' }) //with configaration
        return token
}

module.exports = {
    register_service,
    login_service
}