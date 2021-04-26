"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MillikartGateway = exports.MillikartLanguage = exports.MillikartCurrency = void 0;
const axios_1 = __importDefault(require("axios"));
const md5_1 = __importDefault(require("./md5"));
var MillikartCurrency;
(function (MillikartCurrency) {
    MillikartCurrency["AZN"] = "944";
})(MillikartCurrency = exports.MillikartCurrency || (exports.MillikartCurrency = {}));
var MillikartLanguage;
(function (MillikartLanguage) {
    MillikartLanguage["EN"] = "en";
})(MillikartLanguage = exports.MillikartLanguage || (exports.MillikartLanguage = {}));
class MillikartGateway {
    constructor(baseUrl, mid, secret) {
        this.baseUrl = baseUrl;
        this.mid = mid;
        this.secret = secret;
        this.fetch = axios_1.default.create({
            baseURL: this.baseUrl,
            params: { mid },
        });
    }
    generateUrl(params) {
        return `${this.baseUrl}/register?${this.generateUrlParams(params)}`;
    }
    generateUrlParams(params, redirect = 1) {
        const { amount, currency, description, reference, language } = params;
        let result = "";
        result += `mid=${this.mid}&`;
        result += `amount=${amount}&`;
        result += `currency=${currency}&`;
        result += `description=${description}&`;
        result += `reference=${reference}&`;
        result += `language=${language}&`;
        result += `signature=${this.signature(params)}&`;
        result += `redirect=${redirect}`;
        return result;
    }
    signature(params) {
        const { amount, currency, description, reference, language } = params;
        let result = "";
        result += this.mid.length + this.mid;
        result += amount.toString().length + amount;
        result += currency.length + currency;
        result += description.length + description;
        result += reference.length + reference;
        result += language.length + language;
        result += this.secret;
        return md5_1.default(result).toUpperCase();
    }
}
exports.MillikartGateway = MillikartGateway;
