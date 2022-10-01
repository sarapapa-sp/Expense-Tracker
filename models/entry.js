import mongoose from "mongoose";


const EntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


export default mongoose.model("Expenseentry",EntrySchema)


