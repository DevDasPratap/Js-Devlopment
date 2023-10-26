const { register_service, login_service } = require("../service/auth.service")
 
const register = async (req, res, next) => {
    /**
     * Req input source:-
     * req body
     * req param
     * req query
     * req header
     * req cookies
     */
    // console.log(req.body)
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        console.log('All field are required')
        res.status(400).json({ message: 'Fill all fields' })
    }
    try {
        const user = await register_service({name, email, password})
        return res.status(200).json({ message: 'User created successfully', user })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const login =  async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        console.log('All field are required')
        res.status(400).json({ message: 'Fill all fields' })
    }
    try {
        const token = await login_service({email, password})
        return res.status(200).json({ message: 'Login successfully', token })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
module.exports = {
    register,
    login
}