"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// query resolvers
const Query_1 = __importDefault(require("./queries/Query"));
// mutation resolvers
const mutations_1 = __importDefault(require("./mutations"));
exports.default = {
    Query: Query_1.default,
    Mutation: mutations_1.default,
};
