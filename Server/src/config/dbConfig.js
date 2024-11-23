import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";
import { MONGODB_URI } from "./serverConfig.js";

async function connectDB() {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected!`);
  } catch (error) {
    console.log("MongoDB connection error ", error);
    process.exit(1);
  }
}

export default connectDB;