import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Configure dotenv to load environment variables
dotenv.config({
    path: './.env' // Ensure the correct path to the .env file
});

// Connect to the database
connectDB();

console.log("Hello World");