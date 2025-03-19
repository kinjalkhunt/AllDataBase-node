import { Router } from "express";
import { Login1 } from "../Controller/Authentication/adminController.js";
import passport from '../config/googleAuth.js';
import jwt from 'jsonwebtoken';

export const AuthRouter = Router();

AuthRouter.post("/login", Login1);

// Google OAuth routes
AuthRouter.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// AuthRouter.get('/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     (req, res) => {
//         // Success authentication
//         const token = jwt.sign(
//             { userId: req.user._id, email: req.user.email },
//             process.env.JWT_KEY,
//             { expiresIn: "1h" }
//         );
//         res.redirect(`/auth-success?token=${token}`);
//     }
// );
AuthRouter.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        console.log("Authenticated user:", req.user); // Debugging log
        if (!req.user) {
            return res.status(400).json({ message: "User authentication failed" });
        }
        const token = jwt.sign(
            { userId: req.user._id, email: req.user.email },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        );
        res.redirect(`/v1/auth/auth-success?token=${token}`);
    }
);


AuthRouter.get('/auth-success', (req, res) => {
    const token = req.query.token; // Extract token from URL
    if (!token) {
        return res.status(400).json({ message: "Token is missing" });
    }
    res.json({ message: "Login Successful!", token });
});

