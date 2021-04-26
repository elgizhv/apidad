"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const generateToken = (data) => {
    return jsonwebtoken_1.default.sign(data, config_1.jwtSecret);
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    if (!token)
        return false;
    try {
        return jsonwebtoken_1.default.verify(token, config_1.jwtSecret);
    }
    catch (e) {
        return false;
    }
};
exports.verifyToken = verifyToken;
