import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    isActive: { type: Boolean, default: true },
    email: { type: String, unique: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  },
  { timestamps: true }
);

export const Author = mongoose.model("Author", AuthorSchema);
