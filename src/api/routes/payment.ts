import { Router } from "express";
import { paymentCallback } from "../controller/payment";

const router = Router();

router.get("/callback.php", paymentCallback);

export default router;
