import User from "../models/user.model.js"
import AppError from "../utils/error.util.js"

const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
    httpOnly: true,
    secure: true
}

const register = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body
        if (!fullName || !email || !password) {
            return next(new AppError('All fields are required', 400))
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return next(new AppError('Email already exists', 409))
        }
        const user = await User.create({
            fullName,
            email,
            password,
            avatar: {
                public_id: email,
                secure_url: 'https://avatars.githubusercontent.com/u/59955072?v=4'
            }
        })
        if (!user) { // if not create user during register
            return next(new AppError('User registration faild, please try again', 400))
        }
        // Todo: file upload
        await user.save() // 2nd time save

        user.password = undefined // bcz user already send password don't resend

        const token = await user.generateJWTToken()
        // svae this token in cookie
        res.cookie('token', token, cookieOptions)

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user
        })
    } catch (error) {
        return next(new AppError(error.message, 500))
    }
}
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return next(new AppError('All field are required', 400))
        }
        const user = User.findOne({
            email
        })
            .select('+password') //this for select: false in user.model

        if (!user || !user.comparePassword(password)) {
            return next(new AppError('Email or password does not match', 400))
        }
        const token = await user.generateJWTToken()
        user.password = undefined
        res.cookie('token', token, cookieOptions)
        res.status(200).json({
            success: true,
            message: 'User logedin successfully',
            user
        })
    } catch (error) {
        return next(new AppError(error.message, 500))
    }
}
const logout = (req, res) => {
    res.cookie('token', null, {
        secure: true,
        maxAge: 0,
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: 'User loged out successfully',
    })
}
const getProfile = async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId)

        res.status(200).json({
            success: true,
            message: 'User detail',
            user
        })
    } catch (error) {
        return next(new AppError('Failed to fetch user detaild,', error.message, 500))
    }
}

export {
    register,
    login,
    logout,
    getProfile
}