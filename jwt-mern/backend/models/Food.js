import mongoose from "mongoose";

// ===========================================
// Food Schema
// ===========================================
const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        price: {
            type: Number,
            required: true,
            min: 1
        },

        image: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

// ===========================================
// Export Model
// ===========================================
const Food = mongoose.model("Food", foodSchema);

export default Food;
