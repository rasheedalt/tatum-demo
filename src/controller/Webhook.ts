import { RequestHandler } from 'express';
import WalletService from '../services/Wallet';
import { apiResponse } from '../types/response';
import { IncomigAssetNotification } from '../types/wallet';

export default class WebhookController {

    static processIncomingAssetNotification: RequestHandler = (req, res) => {
        const data: IncomigAssetNotification = req.body;
        //save to db
        apiResponse(res, data)
    }
}