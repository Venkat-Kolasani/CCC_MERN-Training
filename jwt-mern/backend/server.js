import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";

import router from "./routes/routes.js";

// ===========================================
// Load Environment Variables
// ===========================================
dotenv.config();

// ===========================================
// Create Express App
// ===========================================
const app = express();

// ===========================================
// Middleware
// ===========================================
app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
        credentials: true
    })
);

// ===========================================
// Session Configuration
// ===========================================
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60 // 1 Hour
        }
    })
);

// ===========================================
// MongoDB Connection
// ===========================================
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("❌ MongoDB Connection Error");
        console.log(error.message);
    });

// ===========================================
// Default Route
// ===========================================
app.get("/", (req, res) => {
    res.send("Food Ordering Backend is Running...");
});

// ===========================================
// API Routes
// ===========================================
app.use("/", router);

// ===========================================
// Start Server
// ===========================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
