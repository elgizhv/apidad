"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.validateAuthToken = void 0;
const firebase_admin_1 = require("firebase-admin");
const validateAuthToken = async (token) => {
    return await firebase_admin_1.auth()
        .verifyIdToken(token)
        .catch(() => false);
};
exports.validateAuthToken = validateAuthToken;
const getUser = async (uid) => {
    return await firebase_admin_1.auth().getUser(uid);
};
exports.getUser = getUser;
