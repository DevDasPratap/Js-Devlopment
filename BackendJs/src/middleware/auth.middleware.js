import jwt  from "jsonwebtoken";
import { ApiError } from "../util/ApiError.js";
import { asyncHandler } from "../util/asyn_handler.js";
import { User } from "../model/user.model.js";

export const verifyJWT = asyncHandler(async(req, res, next)=>{
    try {
        // req.cookies for browser and req.headers for mobile app
        const token = req.cookies?.accessToken || req.headers("Authorization")?.replace("Bearer ", "")
    
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRECT)
    
        const user = await User.findById(decodedToken?._id)
        .select("-password -refreshToken")
    
        if (!user) {
            throw new ApiError(401, "Invalid access token")
        }
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})