import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            const error = new Error("Invalid User ID");
            error.statusCode = 400;
            throw error;
        }

        // Find user by ID and exclude password
        const user = await User.findById(id).select("-password").lean();
        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find().select("-password").lean();

        if (!users.length) {
            const error = new Error('"No users found')
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
};
