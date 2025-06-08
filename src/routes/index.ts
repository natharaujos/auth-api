import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import emojis from "./emojis";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.post<{}, MessageResponse>("/auth/register", (req, res) => {
  res.json({message: ""})
})

router.use("/emojis", emojis);

export default router;
