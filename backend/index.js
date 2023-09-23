import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/User.js";

const app = express();
const PORT = 8080;
const DBURL = "mongodb://127.0.0.1:27017/test";

// Database Connection
mongoose
  .connect(DBURL)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Error", err);
  });

// MiddleWares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", userRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
