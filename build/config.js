"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLanguage = exports.languages = exports.millikart = exports.db = exports.jwtSecret = exports.port = exports.environment = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../.env") });
exports.environment = process.env.NODE_ENV;
exports.port = process.env.PORT;
exports.jwtSecret = process.env.JWT_SECRET || "secret";
exports.db = {
    connection_uri: process.env.DB_CONNECTION_URI,
};
exports.millikart = {
    api_url: process.env.MILLIKART_API_URL,
    api_key: process.env.MILLIKART_API_KEY,
    api_secret: process.env.MILLIKART_API_SECRET,
};
exports.languages = {
    en: "English",
    az: "Azərbaycanca",
};
exports.defaultLanguage = "az";
