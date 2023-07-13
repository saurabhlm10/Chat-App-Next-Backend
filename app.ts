require("dotenv").config();
import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import chatRoutes from "./routes/chatRoutes";

const app: Express = express();


app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/chat", chatRoutes);


export default app;
