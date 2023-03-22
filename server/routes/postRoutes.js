import express from "express";
import * as dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary"

import Post from "../mongodb/models/post.js"

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
// GET ALL POSTS
router.get("/", async (req, res) => {

})

// CREATE A POST
router.post("/", async (req, res) => {
    const {name,prompt ,photo} = req.body;
    const result = await cloudinary.uploader.upload(photo)

    const newPost = new Post({
        name,
        prompt,
        photo: result.secure_url
    })

})


export default router;