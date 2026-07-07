import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import Food from "../models/Food.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// ===========================================
// LOGIN
// ===========================================
router.post("/login", async (req, res) => {

    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Username and Password are required."
            });
        }

        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Username or Password."
            });
        }

        req.session.user = {
            id: user._id,
            username: user.username
        };

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            success: true,
            message: "Login Successful",
            token
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

});

// ===========================================
// GET ALL FOODS
// ===========================================
router.get("/foods", auth, async (req, res) => {

    try {

        const foods = await Food.find();

        res.json({
            success: true,
            foods
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Unable to Fetch Foods"
        });

    }

});

// ===========================================
// ORDER FOOD
// ===========================================
router.post("/order", auth, async (req, res) => {

    try {

        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Food Name is Required"
            });
        }

        const food = await Food.findOne({ name });

        if (!food) {
            return res.status(404).json({
                success: false,
                message: "Food Not Found"
            });
        }

        res.json({
            success: true,
            message: "Food Ordered Successfully",
            orderedFood: {
                id: food._id,
                name: food.name,
                price: food.price,
                image: food.image
            }
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Unable to Order Food"
        });

    }

});

// ===========================================
// LOGOUT
// ===========================================
router.get("/logout", (req, res) => {

    req.session.destroy(() => {
        res.json({
            success: true,
            message: "Logout Successful"
        });
    });

});

export default router;
