import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  amount: Number,
  type: { type: String, enum: ["income", "expense"] },
  category: String,
  date: Date,
  notes: String
});

export default mongoose.model("Record", recordSchema);
