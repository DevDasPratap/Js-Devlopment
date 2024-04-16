import crypto from 'crypto';
import Payment from "../models/payment.model.js"
import User from "../models/user.model.js"
import { razorpay } from "../server.js"
import AppError from "../utils/error.util.js"

const getRazorpayApiKey = async function (req, res, next) {
    try {
        res.status(200).json({
            success: true,
            message: 'Razorpay API key',
            key: process.env.RAZORPAY_KEY_ID
        })
    } catch (error) {
        return next(new AppError(error.message, 500))
    }
}
const buySubscription = async function (req, res, next) {
    try {
        const { id } = req.user
        const user = await User.find(id)
        if (!user) {
            return next(
                new AppError('Unauthorized, please login', 400)
            )
        }
        if (user.role === 'ADMIN') {
            return next(
                new AppError('Admin cannot purchase a subcription', 400)
            )
        }

        const subcription = await razorpay.subcriptions.create({
            plan_id: process.env.RAZORPAY_PLAN_ID,
            customer_notify: 1
        })
        user.subcription.id = subcription.id
        user.subcription.status = subcription.status

        res.status(200).json({
            success: true,
            message: 'Subscribe successfully',
            subcription_id: subcription.id
        })
    } catch (error) {
        return next(new AppError(error.message, 500))
    }
}
const verifySubscription = async function (req, res, next) {
    try {
        const { id } = req.user
        const { razorpay_payment_id, razorpay_signature, razorpay_subscription_id } = req.params
        const user = await User.find(id)
        if (!user) {
            return next(
                new AppError('Unauthorized, please login', 400)
            )
        }
        const subscriptionId = user.subcription.id
        const generateSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_SECRET)
            .update(`${razorpay_payment_id}|${subscriptionId}`)
            .digest('hex')

        // Payment not complete
        if (generateSignature !== razorpay_signature) {
            return next(
                new AppError('Payment not verified, please try again', 500)
            )
        }

        await Payment.create(
            razorpay_payment_id,
            razorpay_signature,
            razorpay_subscription_id
        )
        user.subcription.status = 'active'
        await user.save()

        res.status(200).json({
            success: true,
            message: 'Payment verified successfully'
        })
    } catch (error) {
        return next(new AppError(error.message, 500))
    }
}
const cancelSubscription = async function (req, res, next) {
    try {
        const { id } = req.user
        const user = await User.find(id)
        if (!user) {
            return next(
                new AppError('Unauthorized, please login', 400)
            )
        }
        if (user.role === 'ADMIN') {
            return next(
                new AppError('Admin cannot purchase a subcription', 400)
            )
        }
        const subcriptionId = user.subcription.id
        const subscription = await razorpay.subscriptions.cancel(subcriptionId)
        user.subcription.status = subscription.status
        await user.save()
    } catch (error) {
        return next(new AppError(error.message, 500))
    }
}
const allPayments = async function (req, res, next) {
    const {count} = req.query
    const subcriptions = await razorpay.subscriptions.all({
        count: count || 10
    })
    res.status(200).json({
        success : true,
        message: 'All payments',
        subcriptions
    })
}

export {
    getRazorpayApiKey,
    buySubscription,
    verifySubscription,
    cancelSubscription,
    allPayments
}