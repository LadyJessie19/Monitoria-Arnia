import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", BookSchema);
