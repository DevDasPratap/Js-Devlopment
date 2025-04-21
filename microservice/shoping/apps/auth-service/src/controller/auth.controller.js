import { NextFunction, Request, Response } from "express";
import prisma from "../../../../packages/libs/prisma"
import ValidationError from "../../../../packages/error-handler/index";

// Register a new user
export const register = async (req:Request, res:Response, next: NextFunction) => {
    try {
        validateRegistrationData(req.body, "user");
        const { email, password } = req.body;
        const existUser = await prisma.users.findUnique({where:email})
        if (existUser) {
            return next(new ValidationError("User already exists", 400));
        }
    } catch (error) {
        next(error);
    }
}