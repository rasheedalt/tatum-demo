import { Router } from "express";
import WebhookController from "../controller/Webhook";

const webhookRouter = Router();

webhookRouter.post('/notify', WebhookController.processIncomingAssetNotification)

export default webhookRouter;
