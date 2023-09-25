import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import createError from "http-errors";

const prisma = new PrismaClient();

// Login
const login = (req, res, next) => {
  res.status(200).send("Login API");
};

// Signup
const signup = async (req, res, next) => {
  const { name, email, username, password, role } = req.body;
  const userExist = await prisma.user.findUnique({
    where: {
      username,
      email,
    },
  });

  if (userExist)
    return next(createError(409, "User already exist, login instead!"));
  const hashPassword = await bcrypt.hash(password, 10);
  const data = {
    name,
    username,
    email,
    password: hashPassword,
    role,
  };

  const newUser = await prisma.user.create({ data });

  res.status(200).json(newUser);
};

const logout = (req, res, next) => {
  res.status(200).send("Logout API");
};

export { login, signup, logout };
