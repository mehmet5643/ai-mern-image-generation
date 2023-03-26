import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}))

app.get("/", (req, res) => {
    res.send("Hello from DALL-E API");
    }
);

app.use("/api/v1/post",postRoutes);
app.use("/api/v1/dalle",dalleRoutes);

const startServer = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log("Server has Start in https://dall-e-0v61.onrender.com"))
    }
    catch(err){
        console.log(err);
    }
}

startServer();