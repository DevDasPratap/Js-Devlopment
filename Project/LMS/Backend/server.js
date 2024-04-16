import cloudinary from 'cloudinary'
import app from './app.js'
import connectionToDB from './config/dbConnection.js'
import Razorpay from "razorpay";
const PORT = process.env.PORT || 5050

// Cloudinary config
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,

})

export const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secrect: process.env.RAZORPAY_SECRET,
    key_id: process.env.RAZORPAY_KEY_ID,
})

app.listen(PORT, async ()=>{
    await connectionToDB()
    console.log(`App is running at ${PORT}`)
})