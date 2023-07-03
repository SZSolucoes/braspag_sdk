import axios, { AxiosInstance } from 'axios';


export { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
export const getInstance = (baseURL: string, merchantId: string, merchantKey: string): AxiosInstance => {

  const instance: AxiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'merchantId': merchantId,
      'merchantKey': merchantKey,
    }
  });

  return instance
}
