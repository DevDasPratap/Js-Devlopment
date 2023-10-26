const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())


const uri = 'mongodb://localhost:27017/auth_by_pd'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: { //Own validator
            validator: function (v) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
            },
            message: (m) => `Invalid email ${m.value}`
        }

    },
    role: {
        type: [String],
        required: false,
        default: ['STUDENT']
    },
    accountStatus: {
        type: String,
        enum: ['PENDING', 'ACTIVE', 'REJECTED'],
        default: 'PENDING',
        required: false
    },
    password: {
        type: String,
        required: true
    },
})
const User = mongoose.model('User', userSchema)

function connectDB(url) {
    return mongoose.connect(url)
}
app.post('/register', async (req, res, next) => {
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

        let user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).json({ message: 'User already exist' })
        }
        user = new User({ name, email, password })
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        user.password = hash
        await user.save()
        return res.status(200).json({ message: 'User created successfully' })
    } catch (error) {
        console.log(error)
        next(error)
    }
})
app.post('/login', async (req, res, next)=>{
    const {email, password} = req.body
    if (!email || !password) {
        console.log('All field are required')
        res.status(400).json({ message: 'Fill all fields' })
    }
    try {
        let user = await User.findOne({email:email})
        if (!user) {
            return res.status(400).json({ message: 'Crediential not match' })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Crediential not match' })
        }
        // user.password = undefined
        //or
        delete user._doc.password
        
        return res.status(200).json({message:'Login successfully', user})
    } catch (error) {
        console.log(error)
        next(error)
    }
})
app.get('/', (_, res) => {
    res.json()
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'Server error occured' })
})
connectDB(uri).then(() => {
    console.log(`DB connected`)
    app.listen(4200, () => {
        console.log(`Server running on port 4200`)
    })
}).catch((err) => {
    console.log(`Got error: ${err}`)
})
