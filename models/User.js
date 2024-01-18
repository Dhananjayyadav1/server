import mongoose from "mongoose";

const userSchema = mongoose.Schema({
        id: {
            type: Number
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
        },
        avatar: {
            type: String,
        },
        domain: {
            type: String,
        },
        available: {
            type: Boolean,
        },
      
   
});

export default mongoose.model("User", userSchema);