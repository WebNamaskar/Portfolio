import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Portfolio"
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err=>{
        console.log("Some Error Occured while connecting to MongoDB database",err);   
    })
}