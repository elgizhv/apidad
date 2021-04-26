"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Root_1 = __importDefault(require("./Root"));
const User_1 = __importDefault(require("./User"));
const Root_2 = __importDefault(require("./admin/Root"));
const Category_1 = __importDefault(require("./Category"));
const Product_1 = __importDefault(require("./Product"));
const Auth_1 = __importDefault(require("./Auth"));
const typeDefs = [Root_1.default, Root_2.default, Auth_1.default, User_1.default, Category_1.default, Product_1.default];
exports.default = typeDefs;
