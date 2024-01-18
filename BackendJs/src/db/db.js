import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async () => {
  try {
    const Db_res = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log('connections: ', Db_res)s
    console.log(`\nMongoDB connected !! DB HOST: ${Db_res.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
