"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = __importDefault(require("./admin"));
const auth_mutation_1 = __importDefault(require("./auth.mutation"));
const user_mutation_1 = __importDefault(require("./user.mutation"));
const Mutation = {
    ...admin_1.default,
    ...auth_mutation_1.default,
    ...user_mutation_1.default,
};
exports.default = Mutation;
