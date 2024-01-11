import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI =
      "mongodb+srv://jessie:jessie@first.buahyq8.mongodb.net/relationship";

    await mongoose.connect(mongoURI);

    console.log("The connection to MongoDB was successfully established!");
  } catch (error) {
    console.log("Erro with MongoDB connection");
  }
};

export default connectDB;
