import express from "express";
import UserController from "../controllers/userController";
import authMiddleware from "../middlewares/authMiddleware";

const userRoutes = express.Router();

userRoutes.get("/", authMiddleware, (req, res) =>
  UserController.getDetails(req, res)
);

export default userRoutes;
