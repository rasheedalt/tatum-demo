import { TatumSDK } from '@tatumio/tatum'
import BSC from '../blockchain/Bsc';
import BTC from '../blockchain/Btc';
import TRON from '../blockchain/Tron';
import { BlockchainBase } from '../types/currencies';
import { SupportedCurrencies } from '../types/wallet';


export default class WalletService {
    public currency: SupportedCurrencies;
    public client: BlockchainBase;

    constructor(currency: SupportedCurrencies){
        this.currency = currency;

        switch(currency){
            case SupportedCurrencies.BTC:
                this.client = new BTC()
                break;

            case SupportedCurrencies.BSC:
                this.client = new BSC()
                break;
            
            case SupportedCurrencies.TRON:
                this.client = new TRON();
                break;
        }
    }

    generateWallet = async () => {
        return await this.client.generateWallet();
    }

    getBalance = async (address: string) => (
        await this.client.getBalance(address)
    )

    generateVirtualAccount = async (xpub: string) => (
        await this.client.generateVirtualAccount(xpub)
    )

    generateDepositAddressForVirtualAccount = async (accountId: string) => (
        await this.client.generateDepositAddressForVirtualAccount(accountId)
    )

    getAllDepositAddressForVirtualAccount = async (accountId: string) => (
        await this.client.getAllDepositAddressForVirtualAccount(accountId)
    )

    getVirtualAccountInfo = async (accountId: string) => (
        await this.client.getVirtualAccountInfo(accountId)
    )

}
