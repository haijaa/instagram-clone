import express from "express";
import {
  changeUser,
  createUser,
  deleteUser,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.delete("/users", deleteUser);
router.put("/users", changeUser);

export default router;
