import User from "../models/user.model.js"
import AppError from "../utils/error.util.js"
import cloudinary from "cloudinary";
import fs from "fs/promises";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
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
            return next(new AppError('Email already exists', 409)) // next goto error.middleware then goto app.js
        }
        const user = await User.create({
            fullName,
            email,
            password,
            avatar: {
                public_id: email,
                secure_url: 'https://avatars.githubusercontent.com/u/59955072?v=4'
            },
        })
        if (!user) { // if not create user during register
            return next(new AppError('User registration faild, please try again', 400))
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
                    user.avatar.public_id = result.public_id;
                    user.avatar.secure_url = result.secure_url

                    // removed file from server
                    fs.rm(`uploads/${req.file.filename}`)
                }
            } catch (error) {
                const errorMessage = typeof error.message === 'string' ? error.message : JSON.stringify(error);
                return next(new AppError(errorMessage, 500));
            }

        }
        await user.save() // 2nd time save

        user.password = undefined // bcz dont send password to client

        const token = await user.generateJWTToken() // for register and direct logedin
        // svae this token in cookie
        res.cookie('token', token, cookieOptions)

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user
        })
    } catch (error) {
        const errorMessage = typeof error.message === 'string' ? error.message : JSON.stringify(error);
        return next(new AppError(errorMessage, 500));
    }

}
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log(email, password)
        if (!email || !password) {
            return next(new AppError('All fields are required', 400))
        }
         //speacilly call password bcause in model select:false, this for select: false in user.model
        const user = await User.findOne({ email }).select('+password')
        if (!(user && (await user.comparePassword(password)))) {
            return next(new AppError('Email or password does not match', 400))
        }
        const token = await user.generateJWTToken()
        user.password = undefined // dont send password to client
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
const logout = (req, res, next) => {
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
const getProfile = async (req, res, next) => {
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
const forgotPassword = async (req, res, next) => {
    const { email } = req.body
    if (!email) {
        return next(new AppError(`Email is requird`, 400))
    }
    const user = await User.findOne({ email })
    if (!user) {
        return next(new AppError(`Email id not registered`, 400))
    }
    const resetToken = await user.generatePasswordResetToken()
    await user.save()

    const resetPasswordUrl = `${process.env.FRONTEND_URL}/reset/${resetToken}`
    const message = `You can reset your password by clicking <a href=${resetPasswordUrl} target="_blank">Reset your password</a>\nIf the above link does not work for some reason then copy paste this link in new tab ${resetPasswordUrl}.\n If you have not requested this, kindly ignore.`;
    const subject = `Reset Password`


    // reset password email send
    try {
        await sendEmail(email, subject, message)
        res.status(200).json({
            success: true,
            message: `Reset password token has been sent to ${email} succussfully`
        })
    } catch (error) {
        // security resion
        user.forgotPasswordExpiry = undefined
        user.forgotPasswordToken = undefined
        await user.save() //for resend if sending time got some error

        return next(new AppError(error.message, 500))
    }
}
const resetPassword = async (req, res, next) => {
    const { resetToken } = req.params
    const { password } = req.body
    const forgotPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    const user = await findOne({
        forgotPasswordToken,
        forgotPasswordExpiry: { $gt: Date.now() }
    })
    if (!user) {
        return next(
            new AppError(`Token is invalid or expired, please try again`, 400)
        )
    }
    user.password = password
    user.forgotPasswordToken = undefined
    user.forgotPasswordExpiry = undefined
    user.save()

    res.status(200).json({
        success: true,
        message: `Password changed successfully`
    })

}
const changePassword = async (req, res, next) => {
    const { oldPassword, newPassword } = req.body
    const { id } = req.user
    if (!oldPassword || !newPassword) {
        return next(new AppError(`All field are mendatory`, 400))
    }
    const user = await User.findById(id).select('+password')

    if (!user) {
        return next(
            new AppError(`Token is invalid or expired, please try again`, 400)
        )
    }
    const isPasswordValid = await user.comparePassword(oldPassword)
    if (!isPasswordValid) {
        return next(
            new AppError(`Invalid old password`, 400)
        )
    }

    user.password = newPassword
    await user.save()
    user.password = undefined // response password undefined from object
    res.status(200).json({
        success: true,
        message: 'Password changed successfully'
    })
}
const updateUser = async (req, res, next) => {
    const { fullName } = req.body
    const { id } = req.params.id

    const user = await User.findById(id)
    if (!user) {
        return next(
            new AppError(`User does not exist`, 400)
        )
    }
    if (req.fullName) {
        user.fullName = fullName
    }
    if (req.file) {
        // Old profile image delete
        await cloudinary.v2.uploader.destroy(user.avatar.public_id)

        // New profile image add
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'lms',
                width: 250,
                height: 250,
                gravity: 'faces',
                crop: 'fill'
            })
            if (result) {
                user.avatar.public_id = result.public_id;
                user.avatar.secure_url = result.secure_url

                // removed file from server
                fs.rm(`uploads/${req.file.filename}`)
            }
        } catch (error) {
            return next(
                new AppError(error || 'File not uploaded, Please try again', 500)

            )
        }
    }
    await user.save()
    res.status(201).json({
        success: true,
        message: 'User details updated successfully',
    })
}

export {
    register,
    login,
    logout,
    getProfile,
    forgotPassword,
    resetPassword,
    changePassword,
    updateUser
}