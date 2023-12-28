import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import bodyParser from "body-parser";

// config env variables
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on 3000 !");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
