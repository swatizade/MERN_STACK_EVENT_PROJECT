import express from "express";
import { sendMessage } from "../Controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
// router.get("/message", message);

export default router;
