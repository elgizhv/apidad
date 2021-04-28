import {
  model,
  Schema,
  Document,
  SchemaTypes,
  Model,
  FilterQuery,
} from "mongoose";
import { DOCUMENT_NAME, COLLECTION_NAME } from "../../constants/database";
import { deleteFile } from "../../services/firebase/storage";

export const AllowedImageExtensions = ["png", "jpg", "jpeg", "gif"];

export interface ISingleMedia {
  size: number;
  url: string;
  hash: string;
}

export enum MediaType {
  PHOTO = "photo",
  VIDEO = "video",
  SOUND = "sound",
}

export interface IMedia {
  data: {
    url: string;
    ref: string;
  };
  type: MediaType;
  createdAt?: Date;
}

export interface Media extends IMedia, Document {}

interface MediaModelInterface extends Model<Media> {
  deleteOneMedia(filter: FilterQuery<Media>): Promise<Media>;
  deleteMedia(filter: FilterQuery<Media>): Promise<Number>;
}

const MediaSchema = new Schema(
  {
    data: {
      url: String,
      ref: String,
    },
    userId: SchemaTypes.ObjectId,
    $type: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);
MediaSchema.set("toJSON", {
  transform(doc: any, ret: any) {
    ret.id = ret._id.toHexString();
    delete ret._id;
  },
});

MediaSchema.statics.deleteOneMedia = async function (filter) {
  let media = await this.findOneAndDelete(filter);
  if (!media) return;
  await deleteFile(media.data.ref);
  return media;
};
MediaSchema.statics.deleteMedia = async function (filter) {
  let medias = await this.find(filter);
  for (let media of medias) {
    await deleteFile(media.data.ref);
  }
  return medias.length;
};

export const MediaModel = model<Media, MediaModelInterface>(
  DOCUMENT_NAME.MEDIA,
  MediaSchema,
  COLLECTION_NAME.MEDIA
);
