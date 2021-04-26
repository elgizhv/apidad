"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../../constants/database");
exports.CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        intl: true,
    },
    order: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
exports.CategoryModel = mongoose_1.model(database_1.DOCUMENT_NAME.CATEGORY, exports.CategorySchema, database_1.COLLECTION_NAME.CATEGORY);
