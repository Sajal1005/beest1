import mongoose from "mongoose";

const  itemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    publicationYear:{
        type:Number,
        required:true,
    },
    ISBN:{
        type:Number,
        required:true,
    }   
})

export default mongoose.model("Item",itemSchema);