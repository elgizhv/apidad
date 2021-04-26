"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.validateFCMToken = void 0;
const firebase_admin_1 = require("firebase-admin");
const FCMTokenRepo_1 = __importDefault(require("../../database/repository/FCMTokenRepo"));
const validateFCMToken = async (token) => {
    return await firebase_admin_1.messaging()
        .send({
        notification: {
            title: "Validation",
        },
        token,
    }, true)
        .catch(() => false);
};
exports.validateFCMToken = validateFCMToken;
const sendMessage = async (data) => {
    var _a;
    let res = await firebase_admin_1.messaging().sendMulticast({
        notification: {
            title: data.title,
            body: data.body,
        },
        tokens: data.tokens,
        android: {
            notification: {
                sound: "default",
            },
        },
        apns: {
            payload: {
                aps: {
                    sound: "default",
                },
            },
        },
    });
    if (Array.isArray(res === null || res === void 0 ? void 0 : res.responses)) {
        for (let [i, resp] of Object.entries(res.responses)) {
            if (((_a = resp.error) === null || _a === void 0 ? void 0 : _a.code) == "messaging/registration-token-not-registered") {
                FCMTokenRepo_1.default.deleteByToken(data.tokens[+i]);
            }
        }
    }
    return res;
};
exports.sendMessage = sendMessage;
