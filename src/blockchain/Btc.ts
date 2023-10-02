import { TatumBtcSDK } from '@tatumio/btc'
import { Currency } from '@tatumio/api-client'
import dotenv from 'dotenv';
import { BlockchainBase } from '../types/currencies';

dotenv.config();
const options = { testnet: process.env.TESTNET || true }


export default class BTC implements BlockchainBase{
    private sdk: any;

    constructor(){
        this.sdk = TatumBtcSDK({ apiKey: process.env.API_KEY})
    }

    generateWallet =  async () => {
        const { mnemonic, xpub } = await this.sdk.wallet.generateWallet(undefined, options)
        console.log(`Created a wallet with ${mnemonic} and public key ${xpub}.`)

        const address = await this.sdk.wallet.generateAddressFromXPub(xpub)
        console.log(`Generated BTC wallet address: ${address}`)

        return { mnemonic, xpub, address };   
    };

    getBalance = async (address: string) => {
        const balance = await this.sdk.blockchain.getBlockchainAccountBalance(address)
        console.log(`Balance of ${address} : ${JSON.stringify(balance)}`)
        return balance;
    };

    generateVirtualAccount = async (xpub: string) => {
        const account = await this.sdk.ledger.account.create({
            currency: Currency.BTC,
            xpub,
        })
        console.log(`Created xpub account: ${JSON.stringify(account)}`)

        return account;
    };

    generateDepositAddressForVirtualAccount = async (accountId: string) => {
        const address = await this.sdk.virtualAccount.depositAddress.create(accountId)
        console.log(`Deposit address: ${JSON.stringify(address)}`)
        return address;
    };

    getAllDepositAddressForVirtualAccount = async (accountId: string) => {
        const addresses = await this.sdk.virtualAccount.depositAddress.getByAccount(accountId)
        console.log(`Account addresses: ${JSON.stringify(addresses)}`)
        return addresses;
    };

    getVirtualAccountInfo = async (accountId: string) => {
        const account = await this.sdk.ledger.account.get(accountId)
        console.log(`Account info: ${JSON.stringify(account)}`)
        return account;
    };
} 