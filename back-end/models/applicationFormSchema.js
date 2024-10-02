import mongoose from "mongoose";
import validator from "validator";

const applicationFormSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Email is not Valid"]
    },
    query:{
        type:String,
        required:true
    }
})

export const Application = mongoose.model("Application",applicationFormSchema)