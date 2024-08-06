const {Schema, model} = require('mongoose')

const OTPSchema = new Schema(
    {
        phoneNumber:{
            type: String,
            required: true
        },
        otp:{
            type: String,
            required: true
        },
        otpExp:{
            type: Date,
            default: Date.now,
            get: (otpExp) => otpExp.getTime(),
            set: (otpExp) => new Date(otpExp)
        }
    }
)

module.exports = model('otp', OTPSchema)