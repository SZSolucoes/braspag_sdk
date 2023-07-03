import { Request, Response, Router } from 'express';
import {
  BraspagOptions,
  BraspagTransactionRequest,
  BraspagTransactionResponse,
  BraspagErroResponse,
  BraspagCaptureTransactionResponse,
  BraspagErro,
  BraspagVerifyCardRequest,
  BraspagVerifyCardResponse,
  BraspagReversalResponse,
} from './';

import { getInstance, AxiosInstance, AxiosResponse, AxiosError } from './axios-instance';
import { BraspagEnv } from './enumerators';

export class Braspag {
  private braspagBaseSandBoxUrl: string = 'https://apisandbox.braspag.com.br/';
  private braspagBaseProdUrl: string = 'https://api.braspag.com.br/';
  private brasPagOptions: BraspagOptions;
  private axiosInstance: AxiosInstance;

  constructor(options: BraspagOptions) {
    this.brasPagOptions = options;

    const url = this.brasPagOptions.env == BraspagEnv.PRODUCTION ? this.braspagBaseProdUrl : this.braspagBaseSandBoxUrl;
    this.axiosInstance = getInstance(url, this.brasPagOptions.merchantId, this.brasPagOptions.merchantKey);
  }

  private handleError(err: AxiosError) {
    if (err.response) {
      let error = new Error(`Error status: ${err.response.status}`);
      if (err.response.status == 400) {
        let braspagErroResponse: BraspagErroResponse = {
          failures: err.response.data
        };
        error = Object.assign(error, braspagErroResponse)
      }

      throw error;
    }

    throw new Error('Unknown Error')
  }

  async createTransaction(transaction: BraspagTransactionRequest): Promise<BraspagTransactionResponse> {
    let data: BraspagTransactionResponse;

    try {

      const response: AxiosResponse<BraspagTransactionResponse> = await this.axiosInstance.post('v2/sales/', transaction);
      data = response.data;

    } catch (err) {
      this.handleError(err);
    }

    return data;
  }

  async captureTransaction(PaymentId: string): Promise<BraspagCaptureTransactionResponse> {
    let data: BraspagCaptureTransactionResponse;

    try {

      const response: AxiosResponse<BraspagCaptureTransactionResponse> = await this.axiosInstance.put(`v2/sales/${PaymentId}/capture`);
      data = response.data;

    } catch (err) {
      this.handleError(err);
    }

    return data;
  }

  async verifyCard(verifyData: BraspagVerifyCardRequest): Promise<BraspagVerifyCardResponse> {
    let data: BraspagVerifyCardResponse;

    try {

      const response: AxiosResponse<BraspagVerifyCardResponse> = await this.axiosInstance.post(`v2/verifycard`, verifyData);
      data = response.data;

    } catch (err) {
      this.handleError(err);
    }

    return data;
  }

  async reversalTransaction(PaymentId: string, amount: number): Promise<BraspagReversalResponse> {
    let data: BraspagReversalResponse;

    try {

      const response: AxiosResponse<BraspagReversalResponse> = await this.axiosInstance.put(`v2/sales/${PaymentId}/void`, null, {
        params: {
          amount
        }
      });

      data = response.data;

    } catch (err) {
      this.handleError(err);
    }

    return data;
  }

}