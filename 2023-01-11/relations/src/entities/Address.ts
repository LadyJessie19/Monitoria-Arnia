import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  street: String,
  number: String,
  neighborhood: String,
});

export const Address = model("Address", addressSchema);
