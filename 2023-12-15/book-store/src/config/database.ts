import { connect, connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDatabase() {
  const url = process.env.MONGO_URL;

  connection.on("connected", () => {
    console.log("MongoDB connected");
  });
  try {
    await connect(url as string);
  } catch (error) {
    console.log(error);
  }
}
