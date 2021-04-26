"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_sort_1 = __importDefault(require("./graphql-sort"));
const graphqlOptions = (query, options) => {
    const { limit, skip, order } = options || {};
    let sort = graphql_sort_1.default(order);
    if (sort)
        query.sort(sort);
    if (limit > 0)
        query.limit(limit);
    if (skip > 0)
        query.skip(skip);
};
exports.default = graphqlOptions;
