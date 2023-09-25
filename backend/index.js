import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/User.js";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 3000;

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
