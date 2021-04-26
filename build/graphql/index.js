"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const schema_2 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
let schema = schema_1.makeExecutableSchema({
    typeDefs: schema_2.default,
    resolvers: resolvers_1.default,
});
exports.schema = schema;
