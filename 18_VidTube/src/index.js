import dotenv from "dotenv";

// ✅ Load environment variables first
dotenv.config({ path: "./.env" });

import { app } from "./app.js";
import connectDB from "./db/index.js";

// ✅ Set PORT with a default value
const PORT = process.env.PORT || 7000;

// ✅ Connect to MongoDB before starting the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit the process if DB connection fails
  });

// ✅ Handle unexpected errors
process.on("uncaughtException", (err) => {
  console.error("❗ Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Rejection at:", promise, "reason:", reason);
});
