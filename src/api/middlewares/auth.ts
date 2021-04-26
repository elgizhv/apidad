import { Response, NextFunction } from "express";

export default async function (req: any, res: Response, next: NextFunction) {
  if (!req.user) return res.status(400).json("unauthorized");
  next();
}
