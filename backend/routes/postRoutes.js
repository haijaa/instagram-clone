import express from "express";
import {
  getPosts,
  getPostsWithComments,
  getPostsWithCommentsOnId,
  newPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/postsWithComments", getPostsWithComments);
router.get("/getPostsWithCommentsOnId/:post_id", getPostsWithCommentsOnId);
router.post("/posts", newPosts);

export default router;
