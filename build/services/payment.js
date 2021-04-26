"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTransaction = exports.generateUrlByTransaction = exports.generateUrlByParams = exports.PaymentLanguage = exports.PaymentCurrency = void 0;
const Transaction_1 = require("../database/model/Transaction");
const uuid_1 = require("uuid");
const config_1 = require("../config");
const millikart_1 = require("../lib/millikart");
const { api_url, api_key, api_secret } = config_1.millikart;
const payService = new millikart_1.MillikartGateway(api_url, api_key, api_secret);
var PaymentCurrency;
(function (PaymentCurrency) {
    PaymentCurrency["AZN"] = "AZN";
})(PaymentCurrency = exports.PaymentCurrency || (exports.PaymentCurrency = {}));
var PaymentLanguage;
(function (PaymentLanguage) {
    PaymentLanguage["EN"] = "EN";
})(PaymentLanguage = exports.PaymentLanguage || (exports.PaymentLanguage = {}));
const generateTransaction = async (params) => {
    const reference = uuid_1.v4();
    const { amount, description, rate, currency, name, userId, payer, webhook, } = params;
    let transaction = await Transaction_1.TransactionModel.create({
        status: Transaction_1.TransactionStatus.ACTIVE,
        amount,
        name,
        description,
        currency,
        rate,
        creator: userId,
        payer,
        reference,
        webhook,
    });
    return transaction.toJSON();
};
exports.generateTransaction = generateTransaction;
const generateUrlByTransaction = async (id, params) => {
    let transaction = await Transaction_1.TransactionModel.findById(id);
    if (!transaction)
        return;
    const data = {
        amount: +transaction.amount,
        currency: transaction.currency,
        description: transaction.description || "no description",
        language: (params === null || params === void 0 ? void 0 : params.language) || PaymentLanguage.EN,
        rate: transaction.rate,
        reference: transaction.reference,
    };
    return generateUrlByParams(data);
};
exports.generateUrlByTransaction = generateUrlByTransaction;
const generateUrlByParams = async (params) => {
    const currency = PaymentCurrency[params.currency];
    const language = PaymentLanguage[params.language];
    const amount = Math.ceil(+params.amount * 100) * +params.rate;
    const data = {
        amount,
        description: params.description,
        currency: millikart_1.MillikartCurrency[currency],
        language: millikart_1.MillikartLanguage[language],
        reference: `${params.reference}.${Date.now()}`,
    };
    let url = await payService.generateUrl(data);
    return url;
};
exports.generateUrlByParams = generateUrlByParams;
