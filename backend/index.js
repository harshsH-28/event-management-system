import express from "express"
import userRoutes from "./routes/User.js"

const app = express();
const PORT = 8080;


app.use("/api",userRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`);
})