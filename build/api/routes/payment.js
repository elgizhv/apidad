"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_1 = require("../controller/payment");
const router = express_1.Router();
router.get("/callback.php", payment_1.paymentCallback);
exports.default = router;
