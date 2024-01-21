import { Router } from "express";
import { registerUser, loginUser } from "../controller/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router()

router.route('/register').post(
    registerUser,
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ])
    )
router.route('/login').post(loginUser)

export default router