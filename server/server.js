import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
await connectDB()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Server is live")
})
app.use("/api/users",userRouter)

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})