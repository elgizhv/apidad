import { Response, NextFunction } from "express";
import { UserModel } from "../../database/model/User";

import { verifyToken } from "../../services/jwt";
export default async function (req: any, res: Response, next: NextFunction) {
  let token = req.headers["authorization"];
  if (token && token.indexOf(" ") >= 0) token = token.split(" ")[1];
  let tokenData: any = verifyToken(token);

  if (tokenData?.userId) {
    let user = await UserModel.findOne({ firebaseId: tokenData?.userId });
    if (user) req.user = user;
  }
  next();
}
