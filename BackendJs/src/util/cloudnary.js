import { config as dotenvConfig } from 'dotenv';
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
          
dotenvConfig();
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRECT_KEY 
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    } else {
      // upload file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      // file uploaded successfully
      // console.log(response, response.url);
      fs.unlinkSync(localFilePath) //if not unlink then store image in local folder ./public/temp
      return response;
    }
  } catch (error) {
    fs.unlinkSync(localFilePath); // rmoved the locally saved temporary file as the upload operation got failed
    console.log(error);
    return null;
  }
};

export { uploadOnCloudinary };
