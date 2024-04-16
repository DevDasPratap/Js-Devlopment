const { check } = require('express-validator')

exports.registerValidator = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password is required').isStrongPassword({
        minLength: 7,
        minLowercase: 1,
        minSymbols: 1,
        minUppercase: 1
    }),
    check('mobile', 'Mobile is required').isLength({
        min: 10,
        max: 10
    }),
    check('image').custom(
        (value, { req }) => {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                return true
            } else {
                return false
            }
        }
    ).withMessage('Please upload an jpeg, png image')
]