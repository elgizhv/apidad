import { Schema, model, Document, ObjectId, SchemaTypes } from "mongoose";

import { DOCUMENT_NAME, COLLECTION_NAME } from "../../constants/database";
import { User } from "./User";

type ID = any;

export interface ITransaction {
  status: TransactionStatus;
  amount: number;
  name: string;
  description?: string;
  currency: string;
  rate: number;
  creator: ID | User;
  payer?: string;
  reference: string;
  webhook?: string[];
  privateInformation?: any;
  apiResponse?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum TransactionStatus {
  ACTIVE = "ACTIVE",
  PASSIVE = "PASSIVE",
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
}

export interface Transaction extends ITransaction, Document {}

export const TransactionSchema = new Schema(
  {
    status: String,
    amount: Number,
    name: String,
    description: String,
    currency: String,
    rate: Number,
    payer: String,
    privateInformation: Object,
    apiResponse: Object,
    reference: String,
    webhook: [String],
    creator: {
      type: SchemaTypes.ObjectId,
      ref: DOCUMENT_NAME.USER,
    },
  },
  { timestamps: true }
);

TransactionSchema.set("toJSON", {
  transform(doc: any, ret: any) {
    ret.id = ret._id.toHexString();
    delete ret._id;
  },
});

export const TransactionModel = model<Transaction>(
  DOCUMENT_NAME.TRANSACTION,
  TransactionSchema,
  COLLECTION_NAME.TRANSACTION
);
