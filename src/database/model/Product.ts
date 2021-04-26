import { Schema, model, Document, ObjectId, SchemaTypes } from "mongoose";
import { DOCUMENT_NAME, COLLECTION_NAME } from "../../constants/database";
import { Category } from "./Category";

export interface IProduct {
  name: {
    [key: string]: string;
  };
  category: any | Category;
  sales: number;
  picture: string;
  file: string;
  description: {
    [key: string]: string;
  };
  demoUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum ProductStatus {
  ACTIVE = "ACTIVE",
  PASSIVE = "PASSIVE",
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
}

export interface Product extends IProduct, Document {}

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
      intl: true,
    },
    category: {
      type: SchemaTypes.ObjectId,
      ref: DOCUMENT_NAME.CATEGORY,
    },
    sales: {
      type: Number,
      default: 0,
    },
    picture: String,
    file: String,
    description: {
      type: String,
      intl: true,
    },
    demoUrl: String,
  },
  { timestamps: true }
);

ProductSchema.set("toJSON", {
  transform(doc: any, ret: any) {
    ret.id = ret._id.toHexString();
    delete ret._id;
  },
});

export const ProductModel = model<Product>(
  DOCUMENT_NAME.PRODUCT,
  ProductSchema,
  COLLECTION_NAME.PRODUCT
);
