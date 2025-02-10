import mongoose from "mongoose";
import { MONGO_DB, NODE_ENV } from "../config/env.js";

if(!MONGO_DB){
    throw new Error(`Please define the Mongodb uri environment variable inside .env.<development/production>.local`)
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_DB)
        console.log(`Connect to database in ${NODE_ENV} mode`)
    } catch (error) {
        console.error('Error connecting to database: ', error)
        process.exit({code:1})
    }
}

export default connectToDatabase