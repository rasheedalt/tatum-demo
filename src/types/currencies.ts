export interface BlockchainBase {
    generateWallet: () => any;

    getBalance: (address: string) => any;

    generateVirtualAccount: (xpub: string) => Promise<any>;
    
    generateDepositAddressForVirtualAccount: (accountId: string) => any;
    
    getAllDepositAddressForVirtualAccount: (accountId: string) => any;

    getVirtualAccountInfo: (accountId: string) => Promise<any>;
}