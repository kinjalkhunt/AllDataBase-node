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


app.use(express.json());
app.use(cors())

// / ✅ Add session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);
// Initialize Passport
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
