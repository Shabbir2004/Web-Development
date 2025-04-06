import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

// Debug function to safely check credentials
const debugCredentials = () => {
  const credentials = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  };

  // Log credential status
  console.log("\n🔍 Cloudinary Credential Check:");
  Object.entries(credentials).forEach(([key, value]) => {
    console.log(`${key}: ${value ? "✅ Present" : "❌ Missing"}`);
    if (value) {
      // Log the first 4 characters of each credential for verification
      console.log(`   Preview: ${value.substring(0, 4)}...`);
    }
  });

  return credentials;
};

// Test configuration function
const testCloudinaryConfig = async () => {
  try {
    const credentials = debugCredentials();

    // Configure Cloudinary
    cloudinary.config({
      cloud_name: credentials.cloud_name,
      api_key: credentials.api_key,
      api_secret: credentials.api_secret,
      secure: true,
    });

    // Test API call
    console.log("\n🔄 Testing Cloudinary connection...");
    const testResult = await cloudinary.api.ping();
    console.log("✅ Connection test result:", testResult);

    return true;
  } catch (error) {
    console.error("\n❌ Cloudinary Configuration Error:");
    console.error("Error details:", {
      message: error.message,
      code: error.http_code,
      type: error.name,
    });

    return false;
  }
};

// Upload function with enhanced error handling
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      throw new Error("No file path provided");
    }

    // Check if file exists
    if (!fs.existsSync(localFilePath)) {
      throw new Error(`File not found at: ${localFilePath}`);
    }

    const fixedFilePath = path.normalize(localFilePath).replace(/\\/g, "/");
    console.log("\n📤 Attempting upload:", fixedFilePath);

    const response = await cloudinary.uploader.upload(fixedFilePath, {
      resource_type: "auto",
      timeout: 60000,
    });

    console.log("✅ Upload successful:", response.secure_url);
    fs.unlinkSync(fixedFilePath);
    return response;
  } catch (error) {
    console.error("\n❌ Upload Error Details:");
    console.error({
      errorType: error.name,
      message: error.message,
      httpCode: error.http_code,
      path: localFilePath,
    });

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    throw error;
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return null;
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Deletion error:", error);
    throw error;
  }
};

// Initialize and test configuration
await testCloudinaryConfig();

export { uploadOnCloudinary, deleteFromCloudinary };
