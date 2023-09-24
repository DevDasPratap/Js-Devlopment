const authModel = require("../models/authModel")
const emailValidator = require('email-validator')
const bcrypt = require('bcrypt')
/******************************************************
 * @SIGNUP
 * @route /api/auth/signup
 * @method POST
 * @description singUp function for creating new user
 * @body name, email, password, confirmPassword
 * @returns User Object
 ******************************************************/
const signUp = async (req, res, next) => {
    // payload get
    const { name, email, password, confirmPassword } = req.body
    console.log(name, email, password, confirmPassword)

    // every field is required
    if (!name || !email || !password || !confirmPassword) {
        // throw new Error('Every field are required') // This error show backend terminal
        /* this error show client */
        return res.status(400).json({
            success: false,
            data: 'Every field are required'
        })
    }

    // validate email using npm package "email-validator"
    const validEmail = emailValidator.validate(email)
    if (!validEmail) {
        return res.status(400).json({
            success: false,
            data: 'Please provide a valid email address 📩'
        })
    }

    // send password not match err if password !== confirmPassword
    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            data: 'password and confirm Password does not match ❌'
        })
    }
    try {
        // db store
        // const authInfo = authModel(req.body)
        /* or */
        const authInfo = authModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        })
        // userSchema "pre" middleware functions for "save" will hash the password using bcrypt
        // before saving the data into the database
        const result = await authInfo.save()
        // db store end
        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        // send the message of the email is not unique.
        if (error.code === 11000) { //duplicate entry store to db
            return res.status(400).json({
                success: false,
                message: 'Account already exists with provide email id',
            })
        }
        console.log(error)
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

/******************************************************
 * @SIGNIN
 * @route /api/auth/signin
 * @method POST
 * @description verify user and send cookie with jwt token
 * @body email , password
 * @returns User Object , cookie
 ******************************************************/

const signIn = async (req, res) => {
    const { email, password } = req.body
    // send response with error message if email or password is missing
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password are required'
        })
    }
    try {
        // Lookup from DB - check user exist or not
        const user = await authModel
            .findOne({ email }) //one field lookup - email
            .select('+password') // in db collection(document) i only select password
        // If user is null or the password is incorrect return response with error message
        // if (!user || user.password !== password) { // for db and req.body password compare (login with token)
        if (!user || !(await bcrypt.compare(password,user.password))) { // login with normal password
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }
        //cookie set - Create jwt token using userSchema method( jwtToken() )
        const token = user.jwtToken();
        user.password = undefined;

        const cookieOption = {
            maxAge: 24 * 60 * 60 * 1000, //24hr
            httpOnly: true //  not able to modify  the cookie in client side
        };

        res.cookie("token", token, cookieOption);
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

const getUser = async (req, res) => {
    // const userId = req.body.id // req.body not rquired bcz user data avalible in cookie
    // alredy login all data get in cookie => defined on authModel=> jwtToken
    const userId = req.user.id
    try {
        const user = await authModel.findById(userId)
        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

const logout = async(req, res)=>{
    try {
        const cookieOption = {
            expires: new Date(),
            httpOnly:true
        }
        res.cookie('token', null, cookieOption) //set token null for destroy token value
        res.status(200).json({
            success: true,
            message: 'Logged out'
        });
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
    signUp,
    signIn,
    getUser,
    logout
}