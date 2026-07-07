import mongoose from "mongoose";

// ===========================================
// User Schema
// ===========================================
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        password: {
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
const User = mongoose.model("User", userSchema);

export default User;
