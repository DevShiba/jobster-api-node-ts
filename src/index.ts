require("express-async-errors");
import express, { Request, Response } from "express";
import helmet from "helmet";

import authRouter from "./routes/auth";
import jobsRouter from "./routes/jobs";

import connect from "./db/connect";

const app = express();

app.set("trust proxy", 1);

app.use(express.json());
app.use(helmet());

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI must be defined");
    }
    await connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};
 
start();
