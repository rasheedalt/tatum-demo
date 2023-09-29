import { TatumSDK, Network } from '@tatumio/tatum'

export default class WalletService {
    public network: Network;
    public address: string;

    constructor(network: Network, address: string){
        this.network = network;
        this.address = address;
    }

    getBalance = async ()=> {
        const tatum =  await TatumSDK.init({ network: this.network });

        const balance = await tatum.address.getBalance({
            addresses: [this.address],
        });
        return balance.data[0];
    }

    getTransactions = async ()=> {
        const tatum =  await TatumSDK.init({ network: this.network });

        const transactions = await tatum.getTransactions.getBalance({
            addresses: [this.address],
        });
        return transactions.data;
    }
}
