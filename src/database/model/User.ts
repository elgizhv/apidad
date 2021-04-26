import { Schema, model, Document } from "mongoose";
import { DOCUMENT_NAME, COLLECTION_NAME } from "../../constants/database";

export interface IUser {
  firebaseId: string;
  name: string;
  profilePicture?: string;
  role: UserRole;
}

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface User extends IUser, Document {}

export const UserSchema = new Schema({
  firebaseId: String,
  name: String,
  profilePicture: String,
  role: String,
});
UserSchema.set("toJSON", {
  transform(doc: any, ret: any) {
    ret.id = ret._id.toHexString();
    delete ret._id;
  },
});

export const UserModel = model<User>(
  DOCUMENT_NAME.USER,
  UserSchema,
  COLLECTION_NAME.USER
);
