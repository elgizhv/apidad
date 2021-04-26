import { User } from "../database/model/User";
declare module "express" {
  declare interface Request {
    user?: User;
    lang?: string;
  }
}
