// mongooseDatabase Schema

import { mongoose } from "mongoose";

const LoginSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})
const LoginModel = mongoose.model("Login",LoginSchema)
export default LoginModel;