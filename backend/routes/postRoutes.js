import express from "express";
import { getPosts, newPosts } from "../controllers/postController.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", newPosts);

export default router;
