import { Router } from "express";

import paymentRouter from "./payment";
import mediaRouter from "./media";

const router = Router();

router.use("/payment", paymentRouter);
router.use("/media", mediaRouter);

export { router };
