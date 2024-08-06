require('dotenv').config();


const OTPGenerator = require('otp-generator')
const tiwilo = require('twilio')
const otpModel = require('../models/otp')
const twilioAccountSID = process.env.TWILIO_ACCOUNT_SID
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber =  process.env.TWILIO_PHONE_NUMBER

if (!twilioAccountSID || !twilioAuthToken || !twilioAuthToken) {
    console.error("Twilio environment variables are not set correctly.");
    process.exit(1);
}
const tiwiloClient = new tiwilo(twilioAccountSID, twilioAuthToken)
const sendOTP = async(req, res)=>{
    try {
        const { phoneNumber } = req.body;
        if (!phoneNumber) {
            throw new Error("Phone number is required.");
        }
        
        const otp = OTPGenerator.generate(6, {upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false});
        const result = otpModel.fin
        return res.status(200).json({
            success: true,
            message: otp
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = sendOTP


// const phoneNumber = req.body
// const otp = otpGenerator.generate(6)
// return res.status(200).json({
//     success: true,
//     message: otp
// })