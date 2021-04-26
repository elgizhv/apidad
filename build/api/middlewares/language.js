"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
function default_1(req, res, next) {
    const lang = req.acceptsLanguages(Object.keys(config_1.languages));
    if (lang)
        req.lang = lang;
    else
        req.lang = config_1.defaultLanguage;
    next();
}
exports.default = default_1;
