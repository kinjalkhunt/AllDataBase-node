// mongooseDatabase Schema

import { mongoose } from "mongoose";

const LoginSchema = mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
        sparse: true
    }
}, { timestamps: true });
const LoginModel = mongoose.model("Login",LoginSchema)
export default LoginModel;