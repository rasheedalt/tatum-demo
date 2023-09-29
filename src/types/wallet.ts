export interface BalanceResponse {
    balance: string;
    asset: string
}

export enum SubscriptionTypes{
    INCOMING_NATIVE_TX, INCOMING_INTERNAL_TX, ADDRESS_EVENT
}

export interface IncomigAssetNotification {
    currency: string,
    chain: string,
    amount: string,
    address: string,
    counterAddress: string,
    subscriptionType: SubscriptionTypes,
    blockNumber: number,
    txId: string,
    mempool: boolean
}