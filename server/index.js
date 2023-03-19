import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}))

app.get("/", (req, res) => {
    res.send("Hello from DALL-E API");
    }
);

const startServer = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log("Server has Start in http://localhost:8080"))
    }
    catch(err){
        console.log(err);
    }
}

startServer();