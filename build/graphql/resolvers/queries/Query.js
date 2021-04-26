"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("./Category");
const Product_1 = require("./Product");
const User_1 = require("./User");
const Query = {
    ...User_1.UserQuery,
    ...Category_1.CategoryQuery,
    ...Product_1.ProductQuery,
};
exports.default = Query;
