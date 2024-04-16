import { Router } from "express";
import { allPayments, buySubscription, cancelSubscription, getRazorpayApiKey, verifySubscription } from "../controllers/payment.controller.js";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";

const paymentRouter = Router()

paymentRouter.get('/razorpay-key', isLoggedIn, getRazorpayApiKey)
paymentRouter.post('/subscribe', isLoggedIn, buySubscription)
paymentRouter.post('/verify', isLoggedIn, verifySubscription)
paymentRouter.post('/unsubscription', cancelSubscription)
paymentRouter.get('/', isLoggedIn, authorizeRoles('ADMIN'), allPayments)

export default paymentRouter