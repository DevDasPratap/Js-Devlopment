import express from "express";
import Redis from "ioredis";
import mongoose, { get } from "mongoose";

const app = express();
app.use(express.json())

const redisClient = new Redis("redis://localhost:6379");
function otpKey(phone) {
    return `otp:${phone}`
}
app.post('/send-otp', async(req, res)=>{
    const {phone} = req.body
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    await redisClient.set(otpKey(phone), otp, 'EX', 300)
    res.json({message:'OTP sent', otp})
})

app.post('/verify-otp', async(req, res)=>{
    const {phone, otp} = req.body
    const checkCorrectOtp = await redisClient.get(otpKey(phone))
    if (!checkCorrectOtp) {
        return res.status(400).json({message:'otp expired or not found'})
    }
    if (checkCorrectOtp !== otp) {
        return res.status(400).json({message:'Invalid otp'})
    }
    await redisClient.del(otpKey(phone))
    res.json({message: 'OTP verifyed successfully'})
})

app.get('/otp/:phone/ttl', async(req, res)=>{
    const ttl = await redisClient.ttl(req.params.phone)
    res.json({ttl})
})
app.listen(8002, () => {
  console.log("Server is running on port 8002");
});