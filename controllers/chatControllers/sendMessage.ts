import express, { Express, Request, Response } from "express";
import { pusherServer } from "../../lib/pusher";

interface SendMessageBody{
    channel: string
    event: string
    messageBody: string
}
interface SendMessageResponse {
  success: boolean;
  message: string;
}



export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { channel, event, messageBody}: SendMessageBody = req.body;

    const responseObject: SendMessageResponse = {
      success: false,
      message: "",
    };

    if (!(channel && event && messageBody)) {
      res.status(401).json(responseObject);
    }

    pusherServer.trigger(channel, event, JSON.parse(messageBody));

    responseObject.success = true;
    responseObject.message = "Message sent successfully";
    res.status(200).json(responseObject);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};
