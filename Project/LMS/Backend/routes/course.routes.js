import { Router } from "express";
import { getAllCourse, getLecturesByCourseId } from "../controllers/course.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
const courseRouter = Router()
courseRouter.get('/', getAllCourse)
courseRouter.get('/:id', isLoggedIn, getLecturesByCourseId)

export default courseRouter