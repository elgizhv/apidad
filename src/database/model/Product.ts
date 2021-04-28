import {
  Schema,
  model,
  Document,
  SchemaTypes,
  FilterQuery,
  Model,
} from "mongoose";
import { DOCUMENT_NAME, COLLECTION_NAME } from "../../constants/database";
import { Category } from "./Category";
import { MediaModel } from "./Media";

interface ProductModelInterface extends Model<Product> {
  deleteOneProduct(filter: FilterQuery<Product>): Promise<Product>;
  deleteProduct(filter: FilterQuery<Product>): Promise<Number>;
}
export interface ProductFeature {
  name: string;
  value: string;
}
export interface IProduct {
  name: {
    [key: string]: string;
  };
  category: any | Category;
  sales: number;
  price: number;
  picture: {
    url: string;
    ref: string;
  };
  file: string;
  description: {
    [key: string]: string;
  };
  features: ProductFeature[];
  tags: string[];
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
    price: {
      type: Number,
      default: 0,
    },
    picture: {
      url: String,
      ref: String,
    },
    file: String,
    description: {
      type: String,
      intl: true,
    },
    features: [
      {
        name: String,
        value: String,
      },
    ],
    tags: [String],
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

export const ProductModel = model<Product, ProductModelInterface>(
  DOCUMENT_NAME.PRODUCT,
  ProductSchema,
  COLLECTION_NAME.PRODUCT
);

ProductSchema.statics.deleteOneProduct = async function (filter) {
  let product = await ProductModel.findByIdAndDelete(filter);
  if (!product) return;
  if (product?.picture?.ref) {
    await MediaModel.deleteMedia({ "data.ref": product.picture.ref });
  }
  return product;
};

ProductSchema.statics.deleteProduct = async function (filter) {
  let products = await ProductModel.find(filter);
  let mediaRefs = [];
  for (let product of products) {
    if (product?.picture?.ref) {
      mediaRefs.push(product.picture.ref);
    }
  }
  await MediaModel.deleteMedia({ "data.ref": { $in: mediaRefs } });
  return products.length;
};
