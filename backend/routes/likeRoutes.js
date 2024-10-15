import express from "express";
import { getLikes, groupedLikes } from "../controllers/likeController.js";

const router = express.Router();

router.get("/likes/:post_id", getLikes);
router.get("/likes", groupedLikes);

export default router;
