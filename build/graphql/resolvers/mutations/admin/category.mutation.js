"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_translation_1 = __importDefault(require("../../../../helpers/utils/graphql-translation"));
const Category_1 = require("../../../../database/model/Category");
exports.default = {
    async create(args, context, info) {
        const { data } = args;
        if (data.name.length == 0)
            throw new Error("name cant be empty");
        let category = await Category_1.CategoryModel.create({
            name: graphql_translation_1.default.list(data.name),
        });
        graphql_translation_1.default.translate(category, context);
        return category;
    },
};
