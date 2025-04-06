import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;

  // ✅ Validation: Ensure required fields are not empty
  if ([fullname, username, email, password].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  // ✅ Check if user already exists
  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  // ✅ File Upload Handling
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  let avatar = null;
  let coverImage = null;

  try {
    // Upload avatar
    avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar) throw new Error("Avatar upload failed");

    // Upload cover image (optional)
    if (coverLocalPath) {
      coverImage = await uploadOnCloudinary(coverLocalPath);
      if (!coverImage) throw new Error("Cover image upload failed");
    }

    console.log("✅ Uploaded Avatar:", avatar.secure_url);
    console.log(
      "✅ Uploaded Cover Image:",
      coverImage?.secure_url || "No cover image"
    );
  } catch (error) {
    console.error("❌ File upload error:", error);
    throw new ApiError(500, "Failed to upload images");
  }

  try {
    // ✅ Create User
    const user = await User.create({
      fullname,
      avatar: avatar.secure_url,
      coverImage: coverImage?.secure_url || "",
      email,
      password,
      username: username.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(500, "User creation failed");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User registered successfully"));
  } catch (error) {
    console.error("❌ User creation failed:", error);

    // Rollback: Delete uploaded images from Cloudinary
    if (avatar) await deleteFromCloudinary(avatar.public_id);
    if (coverImage) await deleteFromCloudinary(coverImage.public_id);

    throw new ApiError(500, "User registration failed. Images were deleted.");
  }
});

export { registerUser };
