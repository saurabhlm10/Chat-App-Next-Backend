import express, { Express, Request, Response, Router } from "express";
import { sendMessage } from "../controllers/chatControllers/sendMessage";

const router: Router = express.Router();

router.post("/sendmessage", sendMessage);

export default router;
