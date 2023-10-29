const User = require("../models/User");
const auth_service = require("../service/auth.service");
const users_service = require("../service/user.service");
const error = require("../utils/error");

const get_users = async (req, res, next) => {
    try {
        const users = await users_service.find_users()
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
const get_user_by_id = async (req, res, next) => {
    const userId = req.params.userId
    try {
        const user = await users_service.find_user_by_property('_id', userId)
        if (!user) {
            // return res.status(200).json({message: 'User not found'})
            throw error('User not found', 400)
        }
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
const post_user = async (req, res, next) => {
    const { name, email, password, role, accountStatus } = req.body
    try {
        const user = await auth_service.register_service({ name, email, password, role, accountStatus })
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
const put_user = async(req, res, next) => {
    const { userId } = req.params
    const { name, email, role, accountStatus } = req.body
    try {
        const user = await users_service.update_user_by_id(userId, {name, email, role, accountStatus})
        if (!user) {
            // return res.status(200).json({message: 'User not found'})
            throw error('User not found', 400)
        }
        // await user.save()
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
const patch_user = async (req, res, next) => {
    const { userId } = req.params
    const { name, role, accountStatus } = req.body
    try {
        const user = await users_service.find_user_by_property('_id', userId)
        if (!user) {
            // return res.status(200).json({message: 'User not found'})
            throw error('User not found', 400)
        }
        user.name = name ?? user.name
        user.role = role ?? user.role
        user.accountStatus = accountStatus ?? user.accountStatus
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
const delete_user = async (req, res, next) => {
    const userId = req.params.userId
    try {
        const user = await users_service.find_user_by_property('_id', userId)
        if (!user) {
            throw error('User not found', 404)
        }
        await user.deleteOne()
        return res.status(203).json({ message: 'User delete now' })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    get_users,
    get_user_by_id,
    post_user,
    put_user,
    patch_user,
    delete_user
}