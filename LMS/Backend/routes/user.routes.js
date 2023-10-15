import { Router } from "express";
import { login, register, logout, getProfile, forgotPassword, resetPassword, changePassword, updateUser } from "../controllers/user.controller.js";
import  {isLoggedIn}  from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router()

router.post('/register', upload.single('avatar'), register)
router.post('/login', login)
router.get('/logout', register)
router.get('/me', isLoggedIn, getProfile)
router.post('/forgot', forgotPassword)
router.post('/reset/:resetToken', resetPassword)
router.post('/change-password', isLoggedIn, changePassword)
router.post('/update/:id', isLoggedIn, upload.single('avatar'), updateUser)

export default router