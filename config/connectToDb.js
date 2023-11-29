import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.MONGOURL;

function connectToDb() {
  mongoose.connect(URL).then(()=>{
    console.log("DB connected successfully");
}).catch(error => console.log(error));  
}

export default connectToDb