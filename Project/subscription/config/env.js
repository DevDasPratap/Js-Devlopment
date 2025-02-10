import { config } from "dotenv";

// Load environment variables from the correct file
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT, NODE_ENV, MONGO_DB } = process.env;  
