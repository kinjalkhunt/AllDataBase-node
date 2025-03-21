import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  LoginModel  from "../../Schema/loginSchema.js"; 
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "D8fg9Ksd9TnV8g7LnM7x2U8BqS9jA4kX1fS9q9dH9E2gR3wE";

export const Login1 = async (req, res) => {
    try {
        const { email, password } = req.body;
        const normalizedEmail = email.toLowerCase();
        let user = await LoginModel.findOne({ email: normalizedEmail });

        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user = new LoginModel({ email: normalizedEmail, password: hashedPassword });
            await user.save();
            return res.status(201).json({ message: "User created successfully" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // ✅ Generate JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
