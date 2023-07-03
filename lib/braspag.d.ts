import { BraspagOptions, BraspagTransactionRequest, BraspagTransactionResponse, BraspagCaptureTransactionResponse, BraspagVerifyCardRequest, BraspagVerifyCardResponse, BraspagReversalResponse } from './';
export declare class Braspag {
    private braspagBaseSandBoxUrl;
    private braspagBaseProdUrl;
    private brasPagOptions;
    private axiosInstance;
    constructor(options: BraspagOptions);
    private handleError;
    createTransaction(transaction: BraspagTransactionRequest): Promise<BraspagTransactionResponse>;
    captureTransaction(PaymentId: string): Promise<BraspagCaptureTransactionResponse>;
    verifyCard(verifyData: BraspagVerifyCardRequest): Promise<BraspagVerifyCardResponse>;
    reversalTransaction(PaymentId: string, amount: number): Promise<BraspagReversalResponse>;
}
