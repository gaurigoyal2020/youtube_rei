import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
     try {
            //Read more into what's happening here
            //Mongoose returned an object that we stored in connectionInstance
            //We can use this object to get information about the connection
            const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`\nMongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
            console.log(`MongoDB connected!! DB Port: ${connectionInstance.connection.port}`);
            console.log(`MongoDB connected!! DB Name: ${connectionInstance.connection.name}`);
        } catch (error) {
            console.error("Database connection error:", error);
            process.exit(1); // Exit the process with failure
        }
    //READ about process in node and different exit codes
}

export default connectDB;