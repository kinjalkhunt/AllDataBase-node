import { Router } from "express";
import { CreateUser, deletedUser, getAllUsers, getUserId, updatedUser } from "../Controller/userController.js";

export const User = Router()

User.post("/create", CreateUser)
User.get("/getAll", getAllUsers)
User.get("/get/:id", getUserId)
User.put("/update/:id", updatedUser)
User.delete("/delete/:id", deletedUser)