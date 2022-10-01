import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const EntrySchema = new Schema({
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
}, { timestamps: true });


export default mongoose.model("expenseentry",EntrySchema)


