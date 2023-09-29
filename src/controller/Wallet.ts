import { Request, RequestHandler } from 'express';
import WalletService from '../services/Wallet';
import { apiResponse } from '../types/response';
import { BalanceResponse } from '../types/wallet';
import { TatumSDK, Network } from '@tatumio/tatum'


export default class WalletController {

    static getAssetsInWalletAddress: RequestHandler = async (
        req: Request<{}, {}, {}, {network: Network, address: string}>, 
        res
    ) => {
        const { network, address } = req.query;

        const service = new WalletService(network, address);
        const data: BalanceResponse = await service.getBalance()
        apiResponse(res, data)
    }

    static getTransactionsOnWalletAddress: RequestHandler = async (
        req: Request<{}, {}, {}, {network: Network, address: string}>, 
        res
    ) => {
        const { network, address  } = req.query;

        const service = new WalletService(network, address);
        const data = await service.getTransactions()
        apiResponse(res, data)
    }
}