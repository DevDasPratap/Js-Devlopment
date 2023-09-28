import { Router } from "express";
import { login, register, logout, getProfile } from "../controllers/user.controller.js";
import  {isLoggedIn}  from "../middlewares/auth.middleware.js";

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout', register)
router.get('/me', isLoggedIn, getProfile)

export default router