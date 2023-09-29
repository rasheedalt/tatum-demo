import {TatumSDK, Network, Ethereum, ResponseDto, AddressBasedNotification} from '@tatumio/tatum'
import dotenv from 'dotenv';

dotenv.config();

const webhookurl = process.env.BASE_URL + '/api/webhook/incomming-transaction'

export default class NotificationService {
    public network: Network;
    public address: string;

    constructor(network: Network, address: string){
        this.network = network;
        this.address = address;
    }

    subscriibeToNotification = async ()=> {
        const tatum =  await TatumSDK.init({ network: this.network });

        const subscription: ResponseDto<AddressBasedNotification> = await tatum.notification.subscribe.addressEvent({
            address: this.address,
            url: webhookurl
          })
    }
}
