import express from "express";
import {
  deletePost,
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
router.delete("/deletePost/:post_id", deletePost);

export default router;
