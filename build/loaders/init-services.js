"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const firebase_1 = require("../services/firebase");
const Logger_1 = __importDefault(require("../core/Logger"));
exports.default = async () => {
    database_1.connectDatabase();
    firebase_1.connectFirebase();
    Logger_1.default.info("innitializing services");
};
