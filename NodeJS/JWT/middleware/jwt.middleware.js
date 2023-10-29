const jwt = require('jsonwebtoken')
const User = require('../models/User')

async function authenticate(req, res, next) {
    // jwt protection for private
    console.log(req.headers)
    console.log(req.headers.authorization)
    try {
        let token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: 'You cant access' })
        }
        token = token.split(' ')[1] //Removed: Bearer 
        const decoded = jwt.verify(token, 'secrect-key')
        // console.log(decoded)
        const user = await User.findById(decoded._id) //compaire DB id and token user id same or not if same then pass
        if (!user) {
            return res.status(401).json({ message: 'You cant access bcz user id not match' })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Invalid token' })
    }
    next()
}
module.exports = authenticate