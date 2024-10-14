import express from "express";
import {
  getComments,
  getCommentOnPost,
  postComment,
} from "../controllers/commentController.js";

const router = express.Router();

router.get("/comments", getComments);
router.get("/commentsOnPost", getCommentOnPost);
router.post("/comments", postComment);

export default router;
