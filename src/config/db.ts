import mongoose from "mongoose";
import envConfig from "./config";

const connectDatabase = async () => {
  try {
    await mongoose.connect(envConfig.mongodbString as string);
    mongoose.connection.on("connected", () => {
      console.log(`connected to db successfully`);
    });
  } catch (error) {
    console.log("failed to connect to db!!");
    process.exit(1);
  }
};
