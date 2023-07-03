"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BraspagEnv;
(function (BraspagEnv) {
    BraspagEnv["SANDBOX"] = "sand_box";
    BraspagEnv["PRODUCTION"] = "production";
})(BraspagEnv = exports.BraspagEnv || (exports.BraspagEnv = {}));
var BraspagPaymentType;
(function (BraspagPaymentType) {
    BraspagPaymentType["CREDITCARD"] = "CreditCard";
    BraspagPaymentType["DEBITCARD"] = "DebitCard";
    BraspagPaymentType["BILL"] = "Boleto";
})(BraspagPaymentType = exports.BraspagPaymentType || (exports.BraspagPaymentType = {}));
var BraspagCurrency;
(function (BraspagCurrency) {
    BraspagCurrency["BRL"] = "BRL";
})(BraspagCurrency = exports.BraspagCurrency || (exports.BraspagCurrency = {}));
var BraspagCountry;
(function (BraspagCountry) {
    BraspagCountry["BR"] = "BR";
})(BraspagCountry = exports.BraspagCountry || (exports.BraspagCountry = {}));
var BraspagProvider;
(function (BraspagProvider) {
    BraspagProvider["SIMULATED"] = "SIMULADO";
    BraspagProvider["CIELO"] = "Cielo";
    BraspagProvider["CIELO30"] = "Cielo30";
    BraspagProvider["REDECARD"] = "Redecard";
    BraspagProvider["REDESITEF"] = "RedeSitef";
    BraspagProvider["CIELOSITEF"] = "CieloSitef";
    BraspagProvider["SANTANDERSITEF"] = "SantanderSitef";
    BraspagProvider["BANORTE"] = "Banorte";
    BraspagProvider["GETNET"] = "Getnet";
    BraspagProvider["FIRSTDATA"] = "FirstData";
    BraspagProvider["GLOBALPAYMENTS"] = "GlobalPayments";
})(BraspagProvider = exports.BraspagProvider || (exports.BraspagProvider = {}));
var BraspagCardBrand;
(function (BraspagCardBrand) {
    BraspagCardBrand["MASTER"] = "Master";
    BraspagCardBrand["VISA"] = "Visa";
})(BraspagCardBrand = exports.BraspagCardBrand || (exports.BraspagCardBrand = {}));
var BraspagTransactionStatus;
(function (BraspagTransactionStatus) {
    BraspagTransactionStatus[BraspagTransactionStatus["NOTFINISHED"] = 0] = "NOTFINISHED";
    BraspagTransactionStatus[BraspagTransactionStatus["AUTHORIZED"] = 1] = "AUTHORIZED";
    BraspagTransactionStatus[BraspagTransactionStatus["PAYMENTCONFIRMED"] = 2] = "PAYMENTCONFIRMED";
    BraspagTransactionStatus[BraspagTransactionStatus["DENIED"] = 3] = "DENIED";
    BraspagTransactionStatus[BraspagTransactionStatus["VOIDED"] = 10] = "VOIDED";
    BraspagTransactionStatus[BraspagTransactionStatus["REFUNDED"] = 11] = "REFUNDED";
    BraspagTransactionStatus[BraspagTransactionStatus["PENDING"] = 12] = "PENDING";
    BraspagTransactionStatus[BraspagTransactionStatus["ABORTED"] = 13] = "ABORTED";
    BraspagTransactionStatus[BraspagTransactionStatus["SCHEDULED"] = 20] = "SCHEDULED";
})(BraspagTransactionStatus = exports.BraspagTransactionStatus || (exports.BraspagTransactionStatus = {}));
var BraspagReasonCode;
(function (BraspagReasonCode) {
    BraspagReasonCode[BraspagReasonCode["SUCCESSFUL"] = 0] = "SUCCESSFUL";
    BraspagReasonCode[BraspagReasonCode["AFFILIATIONNOTFOUND"] = 1] = "AFFILIATIONNOTFOUND";
    BraspagReasonCode[BraspagReasonCode["ISSUFICIENTFUNDS"] = 2] = "ISSUFICIENTFUNDS";
    BraspagReasonCode[BraspagReasonCode["COULDNOTGETCREDITCARD"] = 3] = "COULDNOTGETCREDITCARD";
    BraspagReasonCode[BraspagReasonCode["CONNECTIONWITHACQUIRERFAILED"] = 4] = "CONNECTIONWITHACQUIRERFAILED";
    BraspagReasonCode[BraspagReasonCode["INVALIDTRANSACTIONTYPE"] = 5] = "INVALIDTRANSACTIONTYPE";
    BraspagReasonCode[BraspagReasonCode["INVALIDPAYMENTPLAN"] = 6] = "INVALIDPAYMENTPLAN";
    BraspagReasonCode[BraspagReasonCode["DENIED"] = 7] = "DENIED";
    BraspagReasonCode[BraspagReasonCode["SCHEDULED"] = 8] = "SCHEDULED";
    BraspagReasonCode[BraspagReasonCode["WAITING"] = 9] = "WAITING";
    BraspagReasonCode[BraspagReasonCode["AUTHENTICATED"] = 10] = "AUTHENTICATED";
    BraspagReasonCode[BraspagReasonCode["NOTAUTHENTICATED"] = 11] = "NOTAUTHENTICATED";
    BraspagReasonCode[BraspagReasonCode["PROBLEMSWITHCREDITCARD"] = 12] = "PROBLEMSWITHCREDITCARD";
    BraspagReasonCode[BraspagReasonCode["CARDCANCELED"] = 13] = "CARDCANCELED";
    BraspagReasonCode[BraspagReasonCode["BLOCKEDCREDITCARD"] = 14] = "BLOCKEDCREDITCARD";
    BraspagReasonCode[BraspagReasonCode["CARDEXPIRED"] = 15] = "CARDEXPIRED";
    BraspagReasonCode[BraspagReasonCode["ABORTEDBYFRAUD"] = 16] = "ABORTEDBYFRAUD";
    BraspagReasonCode[BraspagReasonCode["COULDNOTANTIFRAUD"] = 17] = "COULDNOTANTIFRAUD";
    BraspagReasonCode[BraspagReasonCode["TRYAGAIN"] = 18] = "TRYAGAIN";
    BraspagReasonCode[BraspagReasonCode["INVALIDAMOUNT"] = 19] = "INVALIDAMOUNT";
    BraspagReasonCode[BraspagReasonCode["PROBLEMSWITHISSUER"] = 20] = "PROBLEMSWITHISSUER";
    BraspagReasonCode[BraspagReasonCode["INVALIDCARDNUMBER"] = 21] = "INVALIDCARDNUMBER";
    BraspagReasonCode[BraspagReasonCode["TIMEOUT"] = 22] = "TIMEOUT";
    BraspagReasonCode[BraspagReasonCode["CARTAOPROTEGIDOISNOTENABLED"] = 23] = "CARTAOPROTEGIDOISNOTENABLED";
    BraspagReasonCode[BraspagReasonCode["PAYMENTMETHODISNOTENABLED"] = 24] = "PAYMENTMETHODISNOTENABLED";
    BraspagReasonCode[BraspagReasonCode["INVALIDREQUEST"] = 98] = "INVALIDREQUEST";
    BraspagReasonCode[BraspagReasonCode["INTERNALERROR"] = 99] = "INTERNALERROR";
})(BraspagReasonCode = exports.BraspagReasonCode || (exports.BraspagReasonCode = {}));
//# sourceMappingURL=enumerators.js.map