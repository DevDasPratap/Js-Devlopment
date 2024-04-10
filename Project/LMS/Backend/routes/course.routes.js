import { Router } from "express";
import { createCourse, getAllCourse, getLecturesByCourseId, removeCourse, updateCourse } from "../controllers/course.controller.js";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
const courseRouter = Router()
courseRouter.get('/', getAllCourse)
courseRouter.get('/:id', isLoggedIn, getLecturesByCourseId)
courseRouter.post('/', isLoggedIn, upload.single('thumbnail'), createCourse)
courseRouter.put('/:id', isLoggedIn, updateCourse)
courseRouter.delete('/:id', isLoggedIn, authorizeRoles('ADMIN'), removeCourse)

export default courseRouter