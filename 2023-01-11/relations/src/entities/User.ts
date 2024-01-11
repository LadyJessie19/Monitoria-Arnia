import { Schema, model } from "mongoose";

// Schema
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    age: Number,
    isVampire: Boolean,
    address: { type: Schema.Types.ObjectId, ref: "Address" },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

// Model
export const User = model("User", userSchema);
