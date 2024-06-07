require("express-async-errors");
import express, { Request, Response } from "express";
import helmet from "helmet";

import connect from "./db/connect";

const app = express();

app.set("trust proxy", 1);

app.use(express.json());
app.use(helmet());

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
