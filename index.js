import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
const app = express()
const connect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://sarapapa:DJ5wb0mxkbuLwlgj@cluster0.wj4airo.mongodb.net/?retryWrites=true&w=majority"
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





// check the connection status
app.listen(8080, () => {
  connect();
  console.log("Connected to the backend ");
});


