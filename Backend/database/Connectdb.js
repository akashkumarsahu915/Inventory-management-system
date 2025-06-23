import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const ConnectDb=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongodb connected succesfully")
    }).catch((error)=>{
        console.log("the error is :",error)
    })
}
export default ConnectDb;
// OQSqupTwtKqZbJS5