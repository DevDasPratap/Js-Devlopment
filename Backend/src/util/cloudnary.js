import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRECT_KEY,
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
      console.log(response, response.url);
      return response;
    }
  } catch (error) {
    fs.unlinkSync(localFilePath); // rmoved the locally saved temporary file as the upload operation got failed
    console.log(error);
    return null;
  }
};

export { uploadOnCloudinary };
