import Course from "../models/course.model.js"
import AppError from "../utils/error.util.js"
import cloudinary from "cloudinary";
import fs from "fs/promises";

const getAllCourse = async function (req, res, next) {
    try {
        const courses = await Course.find({}).select('-lectures')
        res.status(200).json({
            success: true,
            message: 'All courses',
            courses
        })
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        )
    }
}
const getLecturesByCourseId = async function (req, res, next) {
    try {
        const { couseId } = req.params
        const course = await Course.findById(couseId)
        if (!course) {
            return next(
                new AppError('Invalid course id', 400)
            )
        }
        res.status(200).json({
            success: true,
            message: 'Course lectures fetched successfully',
            course
        })
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        )
    }
}

const createCourse = async function (req, res, next) {
    const { title, description, category, createdBy } = req.body
    if (!title || !description || !category || !createdBy) {
        return next(
            AppError('All fields are required', 400)
        )
    }
    const course = await Course.create({
        title,
        description,
        category,
        createdBy
    })
    if (!course) {
        return next(
            AppError('Course could not created, please try again', 500)
        )
    }
    // File upload
    if (req.file) {
        console.log(req.file)
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'lms',
                width: 250,
                height: 250,
                gravity: 'faces',
                crop: 'fill'
            })
            if (result) {
                course.thumbnail.public_id = result.public_id;
                course.thumbnail.secure_url = result.secure_url

                // removed file from server
                fs.rm(`uploads/${req.file.filename}`)
            }
        } catch (error) {
            return next(
                new AppError(error || 'File not uploaded, Please try again', 500)

            )
        }
    }
    await course.save() // 2nd time save
    res.status(200).json({
        success: true,
        message: 'Course created successfully',
        course
    })
}
const updateCourse = async function (req, res, next) {
    try {
        const { id } = req.params
        const course = await Course.findByIdAndUpdate(
            id,
            {
                $set: req.body
            },
            {
                runValidators: true
            }
        )
        if (!course) {
            return next(
                new AppError(error.message || 'Course with given id does not exist', 400)
            )
        }
        res.status(200).json({
            success: true,
            message: 'Course updated successfully',
            course
        })
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        )
    }
}
const removeCourse = async function (req, res, next) {
    try {
        const { id } = req.params
        const course = await Course.findById(id)
        if (!course) {
            return next(
                new AppError(error.message || 'Course with given id does not exist', 400)
            )
        }
        await Course.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'Course deleted successfully',
            course
        })
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        )
    }
}
const addLectureToCourseId = async function (req, res, next) {
    try {
        const { title, description } = req.body
        if (!title || !description) {
            return next(
                AppError('All fields are required', 400)
            )
        }
        const { id } = req.params
        const course = await Course.findById(id)
        if (!course) {
            return next(
                new AppError(error.message || 'Course with given id does not exist', 400)
            )
        }
        const lectureData = {
            title,
            description,
            lecture:{}
        }
        if (req.file) {
            try {
                const result = await cloudinary.v2.uploader.upload(req.file.path, {
                    folder: 'lms',
                    width: 250,
                    height: 250,
                    gravity: 'faces',
                    crop: 'fill'
                })
                if (result) {
                    lectureData.lecture.public_id = result.public_id;
                    lectureData.lecture.secure_url = result.secure_url

                    // removed file from server
                    fs.rm(`uploads/${req.file.filename}`)
                }
            } catch (error) {
                return next(
                    new AppError(error || 'File not uploaded, Please try again', 500)

                )
            }
        }
        course.lectures.push(lectureData)
        course.numberOfLectures = course.lectures.length
        await course.save()

        res.status(200).json({
            success: true,
            message: 'Lecture successfully added to the course',
            course
        })
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        )
    }
}
export {
    getAllCourse,
    getLecturesByCourseId,
    createCourse,
    updateCourse,
    removeCourse,
    addLectureToCourseId
}