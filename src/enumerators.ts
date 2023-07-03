export enum BraspagEnv {
  SANDBOX = 'sand_box',
  PRODUCTION = 'production',
}

export enum BraspagPaymentType {
  CREDITCARD = 'CreditCard',
  DEBITCARD = 'DebitCard',
  BILL = 'Boleto',
}

export enum BraspagCurrency {
  BRL = 'BRL',
}

export enum BraspagCountry {
  BR = 'BR'
}

export enum BraspagProvider {
  SIMULATED = 'SIMULADO',
  CIELO = 'Cielo',
  CIELO30 = 'Cielo30',
  REDECARD = 'Redecard',
  REDESITEF = 'RedeSitef',
  CIELOSITEF = 'CieloSitef',
  SANTANDERSITEF = 'SantanderSitef',
  BANORTE = 'Banorte',
  GETNET = 'Getnet',
  FIRSTDATA = 'FirstData',
  GLOBALPAYMENTS = 'GlobalPayments',
}

export enum BraspagCardBrand {
  MASTER = 'Master',
  VISA = 'Visa'
}

export enum BraspagTransactionStatus {
  NOTFINISHED = 0,
  AUTHORIZED = 1,
  PAYMENTCONFIRMED = 2,
  DENIED = 3,
  VOIDED = 10,
  REFUNDED = 11,
  PENDING = 12,
  ABORTED = 13,
  SCHEDULED = 20
}

export enum BraspagReasonCode {
  SUCCESSFUL = 0,
  AFFILIATIONNOTFOUND = 1,
  ISSUFICIENTFUNDS = 2,
  COULDNOTGETCREDITCARD = 3,
  CONNECTIONWITHACQUIRERFAILED = 4,
  INVALIDTRANSACTIONTYPE = 5,
  INVALIDPAYMENTPLAN = 6,
  DENIED = 7,
  SCHEDULED = 8,
  WAITING = 9,
  AUTHENTICATED = 10,
  NOTAUTHENTICATED = 11,
  PROBLEMSWITHCREDITCARD = 12,
  CARDCANCELED = 13,
  BLOCKEDCREDITCARD = 14,
  CARDEXPIRED = 15,
  ABORTEDBYFRAUD = 16,
  COULDNOTANTIFRAUD = 17,
  TRYAGAIN = 18,
  INVALIDAMOUNT = 19,
  PROBLEMSWITHISSUER = 20,
  INVALIDCARDNUMBER = 21,
  TIMEOUT = 22,
  CARTAOPROTEGIDOISNOTENABLED = 23,
  PAYMENTMETHODISNOTENABLED = 24,
  INVALIDREQUEST = 98,
  INTERNALERROR = 99,
}