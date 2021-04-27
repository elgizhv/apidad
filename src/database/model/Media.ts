import { model, Schema, Document, SchemaTypes, ObjectId } from "mongoose";
import { DOCUMENT_NAME, COLLECTION_NAME } from "../../constants/database";

export const AllowedImageExtensions = ["png", "jpg", "jpeg", "gif"];

export interface ISingleMedia {
  size: number;
  url: string;
  hash: string;
}

export enum MediaTypes {
  PHOTO = "photo",
  VIDEO = "video",
  SOUND = "sound",
}

export interface IMedia {
  data: any;
  type: MediaTypes;
  createdAt?: Date;
}

export interface Media extends IMedia, Document {}

const schema = new Schema(
  {
    data: Object,
    userId: SchemaTypes.ObjectId,
    type: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const MediaModel = model<Media>(
  DOCUMENT_NAME.MEDIA,
  schema,
  COLLECTION_NAME.MEDIA
);
