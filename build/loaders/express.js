"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("../api/routes");
const user_1 = __importDefault(require("../api/middlewares/user"));
const auth_1 = __importDefault(require("../api/middlewares/auth"));
const language_1 = __importDefault(require("../api/middlewares/language"));
function default_1() {
    const app = express_1.default();
    app.use(cors_1.default());
    app.use(express_1.default.json({ limit: "10mb" }));
    app.use("/graphql", language_1.default, user_1.default);
    app.use("/api", language_1.default, user_1.default, auth_1.default, routes_1.router);
    app.use(express_1.default.static(path_1.default.join(__dirname, "../../public")));
    return app;
}
exports.default = default_1;
