import { Router } from "express";

import paymentRouter from "./payment";

const router = Router();

router.use("/payment", paymentRouter);

export { router };
