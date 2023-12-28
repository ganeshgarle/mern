import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => {
    console.log("------error", err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Server is running on 3000 !");
});