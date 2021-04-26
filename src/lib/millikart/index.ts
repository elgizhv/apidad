import axios, { AxiosInstance } from "axios";
import md5 from "./md5";

export enum MillikartCurrency {
  AZN = "944",
}

export enum MillikartLanguage {
  EN = "en",
}
export interface MillikartParams {
  amount: number;
  currency: MillikartCurrency;
  description: string;
  reference: string;
  language: string;
}

export class MillikartGateway {
  baseUrl: string;
  fetch: AxiosInstance;
  mid: string;
  secret: string;
  constructor(baseUrl: any, mid: any, secret: any) {
    this.baseUrl = baseUrl;
    this.mid = mid;
    this.secret = secret;
    this.fetch = axios.create({
      baseURL: this.baseUrl,
      params: { mid },
    });
  }
  public generateUrl(params: MillikartParams) {
    return `${this.baseUrl}/register?${this.generateUrlParams(params)}`;
  }
  private generateUrlParams(params: MillikartParams, redirect = 1) {
    const { amount, currency, description, reference, language } = params;
    let result: string = "";
    result += `mid=${this.mid}&`;
    result += `amount=${amount}&`;
    result += `currency=${currency}&`;
    result += `description=${description}&`;
    result += `reference=${reference}&`;
    result += `language=${language}&`;
    result += `signature=${this.signature(params)}&`;
    result += `redirect=${redirect}`;
    return result;
  }
  private signature(params: MillikartParams) {
    const { amount, currency, description, reference, language } = params;
    let result: string = "";
    result += this.mid.length + this.mid;
    result += amount.toString().length + amount;
    result += currency.length + currency;
    result += description.length + description;
    result += reference.length + reference;
    result += language.length + language;

    result += this.secret;
    return md5(result).toUpperCase();
  }
}
