import jwt from "jsonwebtoken";
import { JWT_SECRECT } from "../config/env.js";
import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Check if Authorization header is present and starts with "Bearer"
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        // Extract token
        const token = authHeader.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRECT);

        // Fetch user from database
        const user = await User.findById(decoded.userId).select("-password").lean();
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
        }

        req.user = user;
        next(); // Proceed to the next middleware

    } catch (error) {
        return res.status(401).json({ success: false, message: "Unauthorized", error: error.message });
    }
};

export default authorize;
