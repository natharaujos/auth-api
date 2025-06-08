import express from "express";
import AuthController from "../controllers/authController";

const authRoutes = express.Router();

authRoutes.post("/register", (req, res) => AuthController.register(req, res));

export default authRoutes;
