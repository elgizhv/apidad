import { Response } from "express";

const paymentCallback = (req: any, res: Response) => {
  res.json("true");
};

export { paymentCallback };
