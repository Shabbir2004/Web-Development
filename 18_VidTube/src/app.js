import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"; // ✅ Load .env variables at the start

dotenv.config(); // Load environment variables

const app = express();

// ✅ CORS Configuration (with fallback)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Default to local frontend
    credentials: true,
  })
);

// ✅ COMMON MIDDLEWARES
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // Ensure 'public/' exists
app.use(cookieParser());

// ✅ Import Routes
import router from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";

// ✅ Define API Routes
app.use("/api/v1/healthcheck", router);
app.use("/api/v1/users", userRouter);

// ✅ Export the app instance
export { app };
