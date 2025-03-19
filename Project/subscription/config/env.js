import { config } from "dotenv";

// Load environment variables from the correct file
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

if (process.env.NODE_ENV === "development") {
    console.log("Running in development mode...");
} else if (process.env.NODE_ENV === "production") {
    console.log("Running in production mode...");
}

export const { PORT, NODE_ENV, MONGO_DB, JWT_SECRECT, JWT_EXPIRES_IN } = process.env;  
