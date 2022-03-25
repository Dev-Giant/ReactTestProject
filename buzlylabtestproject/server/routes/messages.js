import express from "express";
import {
  getMessages,
  getSingleMessage,
  createMessage,
} from "../controllers/messages.js";

const router = express.Router();

router.get("/all", getMessages);
router.get("/:id", getSingleMessage);
router.post("/", createMessage);

export default router;
