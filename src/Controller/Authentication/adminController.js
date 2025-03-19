import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  LoginModel  from "../../Schema/loginSchema.js"; 

const JWT_SECRET = process.env.JWT_SECRET || "D8fg9Ksd9TnV8g7LnM7x2U8BqS9jA4kX1fS9q9dH9E2gR3wE";

export const Login1 = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await LoginModel.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Email not found" });
        }

        // Compare the password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ message: "Server error", error });
    }
};
