"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("../../../services/firebase"));
const jwt_1 = require("../../../services/jwt");
const User_1 = require("../../../database/model/User");
const { validateAuthToken, getUser } = firebase.user;
const auth = async (parent, args, context, info) => {
    const { authToken } = args;
    let user = null;
    let result = await validateAuthToken(authToken).catch((e) => false);
    if (!result)
        throw new Error("token is not valid");
    let firebaseUser = await getUser(result.uid);
    user = await User_1.UserModel.findOne({ firebaseId: result.uid });
    if (!user) {
        let userData = {
            name: firebaseUser.displayName || result.uid,
            firebaseId: firebaseUser.uid,
            role: User_1.UserRole.USER,
            profilePicture: firebaseUser.photoURL,
        };
        user = await User_1.UserModel.create(userData);
    }
    const token = jwt_1.generateToken({ userId: user === null || user === void 0 ? void 0 : user._id });
    return { token, user };
};
exports.default = {
    auth,
};
