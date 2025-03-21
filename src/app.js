import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import mongoConnection from "../src/DBconnection/mongoConnection.js";
import { router } from "./Route/index.js";
import cors from "cors"
import { CreateUser, deletedUser, getAllUsers, getUserId, updatedUser } from "./Controller/userController.js";
import passport from './config/googleAuth.js';
import session from "express-session";

dotenv.config();  
const app = express();

// CORS configuration
app.use(cors({
    origin: ["http://localhost:3000", process.env.FRONTEND_URL],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Session configuration
app.use(session({
    secret: process.env.JWT_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true
    }
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

app.use("/v1",router)

const port = process.env.PORT || 8000;
// render home page
app.get("/", (req, res) => {
    res.send("Hello I'm All DataBase Project");
});
mongoConnection();

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
