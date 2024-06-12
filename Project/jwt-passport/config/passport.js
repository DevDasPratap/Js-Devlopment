const User = require('../models/User')

// inside have 2 value (Strategies and JWT) it's a helps module authenticate end point with jwt token data
const StrategiesJWT = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const keys = 'secrectkey'

const options = {}

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = keys

const passportConfig = (passport)=>{
    passport.use(
        new StrategiesJWT(options, async (jwtPayload, done)=>{
            const user = await User.findById(jwtPayload._id)
            if (user) {
                return done(null, user)
            }else{
                console.log(`Error in user auth`)
            }
        })
    )
}

module.exports = passportConfig