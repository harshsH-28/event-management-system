import express from "express";
import { login, signup, logout } from "../controllers/AuthController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is Working");
});

router.get("/login", login);
router.get("/register", signup);
router.get("/logout", logout);

export default router;
