"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = exports.UserRole = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../../constants/database");
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "USER";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
exports.UserSchema = new mongoose_1.Schema({
    firebaseId: String,
    name: String,
    profilePicture: String,
    role: String,
});
exports.UserModel = mongoose_1.model(database_1.DOCUMENT_NAME.USER, exports.UserSchema, database_1.COLLECTION_NAME.USER);
