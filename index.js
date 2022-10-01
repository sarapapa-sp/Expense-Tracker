import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import expenseentryRouter from "./Routes/expenseentry.js";

const app = express();
const connect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://sarapapa:<Password>@cluster0.wj4airo.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected");
  } catch (err) {
    throw err;
  }
};
// Check is connection is lost
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected");
});

// adding the routes
app.use(express.json());
app.use("/api", expenseentryRouter);
app.use((err, req, res, next) => {
  const errorStatus = err.status;
  const message = err.message;
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: message,
    stack: err.stack,
  });
});

// check the connection status
app.listen(8080, () => {
  connect();
  console.log("Connected to the backend ");
});
