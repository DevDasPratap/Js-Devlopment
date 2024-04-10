import { Router } from "express";
import { login, register, logout, getProfile, forgotPassword, resetPassword, changePassword, updateUser } from "../controllers/user.controller.js";
import  {isLoggedIn}  from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const userRoute = Router()

userRoute.post('/register', upload.single('avatar'), register)
userRoute.post('/login', login)
userRoute.get('/logout', register)
userRoute.get('/me', isLoggedIn, getProfile)
userRoute.post('/forgot', forgotPassword)
userRoute.post('/reset/:resetToken', resetPassword)
userRoute.post('/change-password', isLoggedIn, changePassword)
userRoute.post('/update/:id', isLoggedIn, upload.single('avatar'), updateUser)

export default userRoute