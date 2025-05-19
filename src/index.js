import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Configure dotenv to load environment variables
dotenv.config({
    path: './.env' // Ensure the correct path to the .env file
});

// Connect to the database
connectDB()
.then(() => {
    //Before listening for the app, we also listen for errors
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;
    });
    //we need the DB connection before we start the server
    app.listen(process.env.PORT || 8000, () => {
        console.log("Server is running on port", process.env.PORT || 8000);
    })
})
.catch((err) => {
    console.log("MONGO DB CONNECTION ERROR!!", err);
    //We don't want to start the server if we have a DB connection error
    process.exit(1); // Exit the process with failure
});

console.log("Hello World");