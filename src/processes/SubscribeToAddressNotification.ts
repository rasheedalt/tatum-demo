import dotenv from 'dotenv';
import NotificationService from '../services/Notification';

dotenv.config();

const wallet_addresses = [
    {
        network: 'BITCOIN',
        address: process.env.BTC_WALLET_ADDRESS
    },
    {
        network: 'TRON',
        address: process.env.TRC20_USDT_WALLET_ADDRESS
    },
    {
        network: 'BINANCE',
        address: process.env.BEP20_WALLET_ADDRESS
    }
]

const subscribeToNotification = () => {
    for (const wallet of wallet_addresses) {
        const notification = new NotificationService(wallet.network, wallet.address);
        notification.subscribeToNotification();
    }
}

subscribeToNotification();