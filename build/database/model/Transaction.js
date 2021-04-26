"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = exports.TransactionSchema = exports.TransactionStatus = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../../constants/database");
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["ACTIVE"] = "ACTIVE";
    TransactionStatus["PASSIVE"] = "PASSIVE";
    TransactionStatus["CANCELED"] = "CANCELED";
    TransactionStatus["COMPLETED"] = "COMPLETED";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
exports.TransactionSchema = new mongoose_1.Schema({
    status: String,
    amount: Number,
    name: String,
    description: String,
    currency: String,
    rate: Number,
    payer: String,
    privateInformation: Object,
    apiResponse: Object,
    reference: String,
    webhook: [String],
    creator: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: database_1.DOCUMENT_NAME.USER,
    },
}, { timestamps: true });
exports.TransactionModel = mongoose_1.model(database_1.DOCUMENT_NAME.TRANSACTION, exports.TransactionSchema, database_1.COLLECTION_NAME.TRANSACTION);
