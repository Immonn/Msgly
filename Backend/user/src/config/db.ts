import mongoose, { Schema } from "mongoose";

const connectDb=async ()=>{
    const url=process.env.MONGO_URL;
    if (!url){
        throw new Error("Mongo_Url is not define in .env")
    }

    try{
        await mongoose.connect(url,{
            dbName:"Msgly"
        })
        console.log("Connected to mongoDb")
    }catch(e){
        console.log("Failed To connect to MONGODB",e)
        process.exit(1);
    }
}

export default connectDb;