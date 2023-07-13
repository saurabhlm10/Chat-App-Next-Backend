"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const pusher_1 = require("../../lib/pusher");
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { channel, event, messageBody } = req.body;
        const responseObject = {
            success: false,
            message: "",
        };
        if (!(channel && event && messageBody)) {
            res.status(401).json(responseObject);
        }
        pusher_1.pusherServer.trigger(channel, event, JSON.parse(messageBody));
        responseObject.success = true;
        responseObject.message = "Message sent successfully";
        res.status(200).json(responseObject);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error,
        });
    }
});
exports.sendMessage = sendMessage;
