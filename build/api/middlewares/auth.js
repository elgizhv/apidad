"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(req, res, next) {
    if (!req.user)
        return res.status(400).json("unauthorized");
    next();
}
exports.default = default_1;
