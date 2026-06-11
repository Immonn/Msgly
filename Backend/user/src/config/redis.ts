import { connect } from "mongoose"
import { createClient } from "redis"

export function redisConnect(){

    const url=process.env.REDIS_URL
    
    if (!url){
        throw new Error("Redis url not found")
    }
    
    const redisClient=createClient({
        url : url
    })
    
    redisClient
        .connect()
        .then(() =>console.log("Connected to redis"))
        .catch(console.error)
}


