import { Router } from "express";
import WalletController from "../controller/Wallet";

const walletRouter = Router();

walletRouter.post('/:currency/generate-wallet', WalletController.generateWallet)
walletRouter.get('/:currency/generate-balance/:address', WalletController.getBalance)

walletRouter.post('/:currency/virtual-account/generate', WalletController.generateVirtualAccount)
walletRouter.post('/:currency/virtual-account/:accountId/generate-deposit-address', WalletController.generateDepositAddressForVirtualAccount)
walletRouter.get('/:currency/virtual-account/:accountId', WalletController.getVirtualAccountInfo)

export default walletRouter;
