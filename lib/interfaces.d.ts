import { BraspagEnv, BraspagPaymentType, BraspagCurrency, BraspagCountry, BraspagProvider, BraspagCardBrand, BraspagTransactionStatus, BraspagReasonCode } from "./";
export interface BraspagOptions {
    merchantId: string;
    merchantKey: string;
    env: BraspagEnv;
}
export interface BraspagCustomer {
    Name: string;
}
export interface BraspagCardRequest {
    CardNumber: string;
    Holder: string;
    ExpirationDate: string;
    SaveCard: boolean;
    Brand: BraspagCardBrand;
}
export interface BraspagTokenCardRequest {
    CardToken: string;
    SaveCard: boolean;
    Brand: BraspagCardBrand;
}
export interface BraspagCardResponse extends BraspagCardRequest {
    CardToken: string;
}
export interface BraspagCreditPaymentRequest {
    Installments: number;
    Capture: boolean;
    Recurrent: boolean;
    CreditCard: BraspagCardRequest | BraspagTokenCardRequest;
    Type: BraspagPaymentType;
    Amount: number;
    ReceivedDate: string;
    Currency: BraspagCurrency;
    Country: BraspagCountry;
    Provider: BraspagProvider;
}
export interface BraspagBillPaymentRequest {
    Type: BraspagPaymentType;
    Amount: number;
    Identification?: string;
    ExpirationDate?: string;
    Currency: BraspagCurrency;
    Country: BraspagCountry;
    Provider: BraspagProvider;
    Instructions?: string;
}
export interface BraspagDebitPaymentRequest {
    Installments: number;
    Capture: boolean;
    Recurrent: boolean;
    DebitCard: BraspagCardRequest | BraspagTokenCardRequest;
    Type: BraspagPaymentType;
    Amount: number;
    ReceivedDate: string;
    Currency: BraspagCurrency;
    Country: BraspagCountry;
    Provider: BraspagProvider;
}
export interface BraspagCreditPaymentResponse extends BraspagCreditPaymentRequest {
    ProofOfSale: string;
    AcquirerTransactionId: string;
    AuthorizationCode: string;
    PaymentId: string;
    CreditCard: BraspagCardResponse;
    ReasonCode: BraspagReasonCode;
    ReasonMessage: string;
    Status: BraspagTransactionStatus;
}
export interface BraspagDebitPaymentResponse extends BraspagDebitPaymentRequest {
    ProofOfSale: string;
    AcquirerTransactionId: string;
    AuthorizationCode: string;
    PaymentId: string;
    DebitCard: BraspagCardResponse;
    ReasonCode: BraspagReasonCode;
    ReasonMessage: string;
    Status: BraspagTransactionStatus;
}
export interface BraspagBillPaymentResponse extends BraspagBillPaymentRequest {
    PaymentId: string;
    ReceivedDate: string;
    Url: string;
    Instructions: string;
    ExpirationDate: string;
    Demonstrative: string;
    BoletoNumber: string;
    BarCodeNumber: string;
    DigitableLine: string;
    Assignor: string;
    ReasonCode: BraspagReasonCode;
    ReasonMessage: string;
    Status: BraspagTransactionStatus;
}
export interface BraspagTransactionRequest {
    MerchantOrderId: string;
    Customer: BraspagCustomer;
    Payment: BraspagCreditPaymentRequest | BraspagDebitPaymentRequest | BraspagBillPaymentRequest;
}
export interface BraspagTransactionResponse {
    MerchantOrderId: string;
    Customer: BraspagCustomer;
    Payment: BraspagDebitPaymentResponse | BraspagCreditPaymentResponse;
}
export interface BraspagCaptureTransactionResponse {
    ReasonCode: BraspagReasonCode;
    ReasonMessage: string;
    Status: BraspagTransactionStatus;
}
export interface BraspagVerifyCardRequest {
    Provider: BraspagProvider;
    Card: BraspagCardRequest;
}
export interface BraspagVerifyCardResponse {
    ReasonCode: BraspagReasonCode;
    ReasonMessage: string;
    Status: BraspagTransactionStatus;
}
export interface BraspagReversalResponse {
    ReasonCode: BraspagReasonCode;
    ReasonMessage: string;
    Status: BraspagTransactionStatus;
}
