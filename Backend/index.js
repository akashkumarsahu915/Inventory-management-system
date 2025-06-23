import express from 'express';
import dotenv from 'dotenv'; 
import ConnectDb from "./database/connectdb.js"
import router from './route/AddProduct.js';
import cors from "cors";
import cookieParser from 'cookie-parser'; // Importing cookie-parser to handle cookies
dotenv.config();   // Importing dotenv to manage environment variables
const app= express();
const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173"}))
app.use("/admin",router)
ConnectDb();
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Welcome to the Backend API",
        success: true
    })
})
app.listen(port, () => {
    console.log(`server is listening at ${port}`)
})
