import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Food from "./models/Food.js";

dotenv.config();

const users = [
    {
        username: "admin",
        password: "admin123"
    }
];

const foods = [
    {
        name: "Burger",
        price: 120,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
    },
    {
        name: "Pizza",
        price: 250,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
    },
    {
        name: "Pasta",
        price: 180,
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400"
    },
    {
        name: "Biryani",
        price: 200,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"
    },
    {
        name: "Dosa",
        price: 80,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400"
    },
    {
        name: "Noodles",
        price: 150,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400"
    }
];

mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {

        console.log("✅ MongoDB Connected");

        // Clear existing data
        await User.deleteMany();
        await Food.deleteMany();

        // Insert seed data
        await User.insertMany(users);
        await Food.insertMany(foods);

        console.log("✅ Demo user seeded  → username: admin | password: admin123");
        console.log("✅ Food items seeded →", foods.map(f => f.name).join(", "));

        process.exit(0);

    })
    .catch((err) => {
        console.log("❌ MongoDB Error:", err.message);
        process.exit(1);
    });
