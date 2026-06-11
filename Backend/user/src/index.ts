import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import { redisConnect } from "./config/redis.js"


dotenv.config()


const app=express()

app.listen(3000,()=>{
    console.log("Server is running")
    connectDb()
    redisConnect()
})