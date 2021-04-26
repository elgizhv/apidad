"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_mutation_1 = __importDefault(require("./category.mutation"));
exports.default = {
    Admin() {
        return {
            category: category_mutation_1.default,
        };
    },
};
