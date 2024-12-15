import {Router} from 'express'
import userRoute from '../route/userRoute.js'
import postRoute from '../route/postRoute.js'
import commentRoutes from '../route/commentRoute.js'
const router = Router()

router.use('/api/user', userRoute)
router.use('/api/post', postRoute)
router.use("/api/comment", commentRoutes);
export default router