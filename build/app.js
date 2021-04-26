"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.httpServer = exports.app = void 0;
const http_1 = __importDefault(require("http"));
// Loaders
const express_1 = __importDefault(require("./loaders/express"));
const apollo_1 = __importDefault(require("./loaders/apollo"));
const app = express_1.default(); // Load Express
exports.app = app;
const httpServer = http_1.default.createServer(app); // create Http Server
exports.httpServer = httpServer;
const server = apollo_1.default(httpServer, app); // load Apollo Server
exports.server = server;
