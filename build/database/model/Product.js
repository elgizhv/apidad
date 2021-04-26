"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.ProductSchema = exports.ProductStatus = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../../constants/database");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["ACTIVE"] = "ACTIVE";
    ProductStatus["PASSIVE"] = "PASSIVE";
    ProductStatus["CANCELED"] = "CANCELED";
    ProductStatus["COMPLETED"] = "COMPLETED";
})(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
exports.ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        intl: true,
    },
    category: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: database_1.DOCUMENT_NAME.CATEGORY,
    },
    sales: {
        type: Number,
        default: 0,
    },
    picture: String,
    file: String,
    description: {
        type: String,
        intl: true,
    },
    demoUrl: String,
}, { timestamps: true });
exports.ProductModel = mongoose_1.model(database_1.DOCUMENT_NAME.PRODUCT, exports.ProductSchema, database_1.COLLECTION_NAME.PRODUCT);
