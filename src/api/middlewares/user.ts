import { Response, NextFunction } from "express";
import { UserModel } from "../../database/model/User";

import { verifyToken } from "../../services/jwt";
export default async function (req: any, res: Response, next: NextFunction) {
  let token = req.headers["authorization"];
  if (token && token.indexOf(" ") >= 0) token = token.split(" ")[1];

  let data: any = verifyToken(token);

  if (data?.userId) {
    let user = await UserModel.findOne({ _id: data?.userId });
    if (user) req.user = user;
  }
  next();
}
