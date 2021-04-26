"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../database/model/User");
const jwt_1 = require("../../services/jwt");
async function default_1(req, res, next) {
    let token = req.headers["authorization"];
    if (token && token.indexOf(" ") >= 0)
        token = token.split(" ")[1];
    let tokenData = jwt_1.verifyToken(token);
    if (tokenData === null || tokenData === void 0 ? void 0 : tokenData.userId) {
        let user = await User_1.UserModel.findOne({ firebaseId: tokenData === null || tokenData === void 0 ? void 0 : tokenData.userId });
        if (user)
            req.user = user;
    }
    next();
}
exports.default = default_1;
