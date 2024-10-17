import express from "express";
import {
  getLikes,
  groupedLikes,
  postLike,
} from "../controllers/likeController.js";

const router = express.Router();

router.get("/likes/:post_id", getLikes);
router.get("/likes", groupedLikes);
router.post("/likes/:post_id", postLike);

export default router;
