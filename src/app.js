import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: process.env.COR_ORIGN || "*", // Fallback to wildcard if env variable is not set
    credentials: true,
  })
);

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("Public"));
app.use(cookieParser());

// Import and use router
import userRouter from "./routes/user.route.js";
import homeRouter from "./routes/homeRouter.js";
import aboutRouter from "./routes/about.route.js";
import instagramFollowersRouter from "./routes/instagram/instagramFollower.route.js";
import instagramLikesRouter from "./routes/instagram/instagramLikes.route.js";
import instagramAutoLikesRouter from "./routes/instagram/instagramAutoLikes.route.js";
import insatagramAutoReelsRouter from "./routes/instagram/instagramAutoReels.route.js";
app.use("/api/user", userRouter);
app.use("/api/home", homeRouter);
app.use("/api/about", aboutRouter);
app.use("/api/instagram/follower", instagramFollowersRouter);
app.use("/api/instagram/likes", instagramLikesRouter);
app.use("/api/instagram/auto/likes", instagramAutoLikesRouter);
app.use("/api/instagram/auto/reels", insatagramAutoReelsRouter);
export { app };
