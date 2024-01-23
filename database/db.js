import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const Connection = async()=>{
    // const URL = ``
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // useUnifiedTopology:true,
            // useNewUrlParser:true,
        });

        console.log("Database connected successfully!");

    } catch (error) {
        console.log("Error while connecting with database", error);
        
    }
}

export default Connection;