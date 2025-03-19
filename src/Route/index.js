import { Router } from "express";
import { AuthRouter } from "./authRoutes.js";
import { User } from "./userRoute.js";

export const router = Router();

router.use("/auth", AuthRouter)
router.use("/user", User)