import { Router } from "express";
import { loginAdmin } from "../Controller/Authentication/adminController.js";

export const AuthRouter = Router();

AuthRouter.post("/login", loginAdmin)
