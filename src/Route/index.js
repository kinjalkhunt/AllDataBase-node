import { Router } from "express";
import { AuthRouter } from "./authRoutes.js";

export const router = Router();

router.use("/auth", AuthRouter)