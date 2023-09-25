import express from "express";
import { login, signup, logout } from "../controllers/AuthController.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import createError from "http-errors";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is Working");
});

router.get("/login", login);
router.post("/register", signup);
router.get("/logout", logout);

export default router;
