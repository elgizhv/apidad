"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryQuery = void 0;
const Category_1 = require("../../../database/model/Category");
const graphql_fields_1 = __importDefault(require("../../../helpers/utils/graphql-fields"));
const graphql_options_1 = __importDefault(require("../../../helpers/utils/graphql-options"));
exports.CategoryQuery = {
    categories: async (parent, args, context, info) => {
        let fields = graphql_fields_1.default({ info });
        const { filter, options } = args;
        const filterQuery = {};
        if (filter === null || filter === void 0 ? void 0 : filter.ids)
            filterQuery._id = { $in: filter.ids };
        if (filter === null || filter === void 0 ? void 0 : filter.name)
            filterQuery.name = { $regex: filter.name, $options: "i" };
        let query = Category_1.CategoryModel.find(filterQuery);
        graphql_options_1.default(query, options);
        if (fields)
            query.select(Object.keys(fields));
        return await query.exec();
    },
    category: async (parent, args, context, info) => {
        let fields = graphql_fields_1.default({ info });
        let query = Category_1.CategoryModel.findById(args.id);
        if (fields)
            query.select(Object.keys(fields));
        return await query.exec();
    },
};
