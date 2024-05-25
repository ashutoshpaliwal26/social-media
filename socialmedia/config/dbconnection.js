import 'dotenv';
import mongoose from "mongoose";
const urlStr = process.env.MONGOURL;

const dbConnection = async()=>{
    try{
        await mongoose.connect(urlStr);
        console.log("Connected Sucessfully")
    }catch(err){
        console.log(err);
    }
}

export default dbConnection;