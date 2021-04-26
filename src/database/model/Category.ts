import { Schema, model, Document, ObjectId, SchemaTypes } from "mongoose";
import { DOCUMENT_NAME, COLLECTION_NAME } from "../../constants/database";

export interface ICategory {
  name: {
    [key: string]: string;
  };
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category extends ICategory, Document {}

export const CategorySchema = new Schema(
  {
    name: {
      type: String,
      intl: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

CategorySchema.set("toJSON", {
  transform(doc: any, ret: any) {
    ret.id = ret._id.toHexString();
    delete ret._id;
  },
});

export const CategoryModel = model<Category>(
  DOCUMENT_NAME.CATEGORY,
  CategorySchema,
  COLLECTION_NAME.CATEGORY
);
