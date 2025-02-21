import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./.env" });  // Ensure dotenv loads

const dbUrl = process.env.MONGO_DB_URL;  // Use MONGO_DB_URL directly

const mongoConnection = async () => {
    try {
        if (!dbUrl) throw new Error("MongoDB URL is missing from .env file");
        
        await mongoose.connect(dbUrl);
        console.log(`✅ MongoDB Connected Successfully`);
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

export default mongoConnection;




