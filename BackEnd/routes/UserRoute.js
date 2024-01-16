import express from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";

const router = express.Router();

// apabila ingin merubah endpoint nya sehingga nanti akan berjalan : http://localhost:5000/user
router.get("/user", getUser);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
