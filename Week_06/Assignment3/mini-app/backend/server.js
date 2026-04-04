import express from "express";
import { config } from "dotenv";
import mongoose, { skipMiddlewareFunction } from "mongoose";
import EmployeeApp from "./API/EmployeeAPI.js";
import cors from "cors";


const app = express();

//add cors skipMiddlewareFunction
app.use(cors({
    origin:"http://localhost:5173",
    
}));

config();


// Middleware
app.use(express.json());

// Routes
app.use('/employees', EmployeeApp);

// Database Connection & Server Start
const connectDB = async () => {
    try {
        const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/backendE";
        await mongoose.connect(dbUrl);
        console.log("database connected")
        const port = process.env.PORT || 5000
        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        })
    }
    catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}

connectDB();

export {};
