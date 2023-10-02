import { Request, RequestHandler } from 'express';
import WalletService from '../services/Wallet';
import { apiResponse } from '../types/response';
import {  SupportedCurrencies } from '../types/wallet';
import { TatumSDK, Network } from '@tatumio/tatum'


export default class WalletController {

    static generateWallet: RequestHandler = async (
        req: Request<{}, {}, {}, {currency: SupportedCurrencies}>, 
        res
    ) => {
        const { currency } = req.query;

        const service = new WalletService(currency);
        const data: { address: string, xpub: string } = await service.generateWallet()
        apiResponse(res, data)
    }

    static generateVirtualAccount: RequestHandler = async (
        req: Request<{}, {}, {}, {currency: SupportedCurrencies, xpub: string}>, 
        res
    ) => {
        const { currency, xpub } = req.query;

        const service = new WalletService(currency);
        const data: any = await service.generateVirtualAccount(xpub)
        apiResponse(res, data)
    }

    static getBalance: RequestHandler = async (
        req: Request<{currency: SupportedCurrencies, address: string}, {}, {}, {}>, 
        res
    ) => {
        const { currency, address } = req.params;

        const service = new WalletService(currency);
        const data: any = await service.getBalance(address)
        apiResponse(res, data)
    }

    static generateDepositAddressForVirtualAccount: RequestHandler = async (
        req: Request<{currency: SupportedCurrencies, accountId: string}, {}, {}, {}>, 
        res
    ) => {
        const { currency, accountId } = req.params;

        const service = new WalletService(currency);
        const data: any = await service.generateDepositAddressForVirtualAccount(accountId)
        apiResponse(res, data)
    }

    static getVirtualAccountInfo: RequestHandler = async (
        req: Request<{currency: SupportedCurrencies, accountId: string}, {}, {}, {}>, 
        res
    ) => {
        const { currency, accountId } = req.params;

        const service = new WalletService(currency);
        const data: any = await service.getVirtualAccountInfo(accountId)
        apiResponse(res, data)
    }

}