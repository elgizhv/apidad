import {
  TransactionModel,
  TransactionStatus,
} from "../database/model/Transaction";
import { v4 as uuidv4 } from "uuid";
import { millikart } from "../config";
import {
  MillikartCurrency,
  MillikartGateway,
  MillikartLanguage,
  MillikartParams,
} from "../lib/millikart";

const { api_url, api_key, api_secret } = millikart;
const payService = new MillikartGateway(api_url, api_key, api_secret);

export enum PaymentCurrency {
  AZN = "AZN",
}
export enum PaymentLanguage {
  EN = "EN",
}

export interface PaymentParams {
  amount: string | number;
  currency: PaymentCurrency;
  description: string;
  language: PaymentLanguage;
  rate: number | string;
  reference: string;
}

export interface TransactionParams {
  name: string;
  amount: string;
  currency: PaymentCurrency;
  description: string;
  language: PaymentLanguage;
  rate: number | string;
  userId?: any;
  payer?: string;
  webhook?: string[];
}

const generateTransaction = async (params: TransactionParams) => {
  const reference = uuidv4();
  const {
    amount,
    description,
    rate,
    currency,
    name,
    userId,
    payer,
    webhook,
  } = params;

  let transaction = await TransactionModel.create({
    status: TransactionStatus.ACTIVE,
    amount,
    name,
    description,
    currency,
    rate,
    creator: userId,
    payer,
    reference,
    webhook,
  });
  return transaction.toJSON();
};

const generateUrlByTransaction = async (
  id: any,
  params?: Partial<PaymentParams>
) => {
  let transaction = await TransactionModel.findById(id);
  if (!transaction) return;

  const data: PaymentParams = {
    amount: +transaction.amount,
    currency: transaction.currency as PaymentCurrency,
    description: transaction.description || "no description",
    language: params?.language || PaymentLanguage.EN,
    rate: transaction.rate,
    reference: transaction.reference,
  };

  return generateUrlByParams(data);
};

const generateUrlByParams = async (params: PaymentParams) => {
  const currency = PaymentCurrency[params.currency];
  const language = PaymentLanguage[params.language];
  const amount = Math.ceil(+params.amount * 100) * +params.rate;

  const data: MillikartParams = {
    amount,
    description: params.description,
    currency: MillikartCurrency[currency],
    language: MillikartLanguage[language],
    reference: `${params.reference}.${Date.now()}`,
  };
  let url = await payService.generateUrl(data);
  return url;
};

export { generateUrlByParams, generateUrlByTransaction, generateTransaction };
