"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_services_1 = __importDefault(require("./loaders/init-services"));
init_services_1.default().then(() => {
    require("./server");
});
