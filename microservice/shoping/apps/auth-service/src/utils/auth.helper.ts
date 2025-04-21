import crypto from 'crypto';
import { ValidationError } from '../../../../packages/error-handler';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;
const countryRegex = /^[A-Z]{2}$/;

export const validateRegistrationData = (data: any, userType: "user" | "seller") => {
    const { name, email, password, phone, country } = data;

    if (!name || !email || !password || (userType === "seller" && (!phone) || !country)) {
        return new ValidationError('All fields are required');
    }

    if(!emailRegex.test(email)) {
        return new ValidationError('Invalid email format');
    }
    if(!passwordRegex.test(password)) {
        return new ValidationError('Password must be at least 8 characters long and contain at least one letter and one number');
    }

    // Additional validation logic can be added here
}