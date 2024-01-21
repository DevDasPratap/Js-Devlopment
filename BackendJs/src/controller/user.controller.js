import { asyncHandler } from "../util/asyn_handler.js";
import { ApiError } from "../util/ApiError.js";
import { User } from "../model/user.model.js";
import { uploadOnCloudinary } from "../util/cloudnary.js";
import { ApiResponse } from "../util/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // get register details from client
  // validation
  // check if user already exists //username, email
  // check for images, avater
  // upload on cloudinary
  // create object to store data in DB
  // remove password and refresh token field from response
  // check for user create response
  // return res

  const { username, email, fullname, password } = req.body;

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exist");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // const coverImageLocalPath = req.files?.coverImage[0]?.path;
  // or
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0]?.path;
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const createUser = User.findById(user._id).select("-password -refreshToken");

  if (!createUser) {
    throw new ApiError(500, "Somthing wen worng while registering user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createUser, "User register successfully"));
});

const loginUser = asyncHandler();

export { registerUser, loginUser };
