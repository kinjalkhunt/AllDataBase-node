import { Router } from "express";
import { Login1 } from "../Controller/Authentication/adminController.js";
import passport from '../config/googleAuth.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { authenticateToken } from "../Middleware/jwtToken.js";
dotenv.config();
export const AuthRouter = Router();

AuthRouter.post("/login", Login1);

// Google OAuth routes
AuthRouter.get('/google',
    (req, res, next) => {
        console.log("Starting Google authentication...");
        passport.authenticate('google', { 
            scope: ['profile', 'email'],
            prompt: 'select_account'
        })(req, res, next);
    }
);

AuthRouter.get('/google/callback',
    (req, res, next) => {
        console.log("Received callback from Google");
        
        
        passport.authenticate('google', { 
            failureRedirect: '/login',
            successRedirect: 'http://localhost:3000/',
            session: false,
            failWithError: true
        })(req, res, next);
    },
    (req, res) => {
        try {
            console.log("Authenticated user:", req.user);
            
            if (!req.user) {
                console.error("No user data received from Google");
                return res.redirect('/login?error=no_user_data');
            }

            const token = jwt.sign(
                { 
                    userId: req.user._id.toString(), 
                    email: req.user.email 
                }, 
                process.env.JWT_KEY,
                { expiresIn: "1h" }
            );

            console.log("Generated Token:", token);
            res.redirect(`${process.env.FRONTEND_URL}/auth-success?token=${token}`);
        } catch (error) {
            console.error("Error in callback handler:", error);
            res.redirect('/login?error=callback_error');
        }
    }
);

AuthRouter.get('/auth-success', (req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(400).json({ message: "Token is missing" });
    }
    res.json({ message: "Login Successful!", token });
});
AuthRouter.get("/protected-route", authenticateToken, (req, res) => {
    res.json({ message: "You accessed a protected route!", user: req.user });
});


