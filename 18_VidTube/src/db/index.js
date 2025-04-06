import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `\n MongoDB connected! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB Connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
