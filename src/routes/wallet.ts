import { Router } from "express";
import WalletController from "../controller/Wallet";

const walletRouter = Router();

walletRouter.get('/getAssetBalance', WalletController.getAssetsInWalletAddress)
walletRouter.get('/getAssetTransactions', WalletController.getTransactionsOnWalletAddress)

export default walletRouter;
