const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        
        // Check if email, password, and name are provided
        if (!email || !password || !name) {
            return res.status(400).json({ message: "Email, password, and name are required" });
        }

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user object
        const userInfo = new User({
            email,
            password: hashedPassword,
            name
        });

        // Save user to the database
        await userInfo.save();

        return res.status(201).json({ message: "Success" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "Authentication failed: Incorrect email or password" });
        }

        // Check password
        const isPassMatch = await bcrypt.compare(password, user.password);
        if (!isPassMatch) {
            return res.status(403).json({ message: "Authentication failed: Incorrect email or password" });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            {
                email: user.email,
                name: user.name,
                _id: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: '4h' }
        );

        // Include JWT token in user object
        const userObject = {
            email: user.email,
            name: user.name,
            _id: user._id,
            jwtToken
        };

        return res.status(200).json({ message: "Success", data: userObject });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    registerUser,
    loginUser
}
