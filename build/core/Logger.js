"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const config_1 = require("../config");
const logLevel = config_1.environment === "development" ? "debug" : "warn";
const options = {
    file: {
        level: logLevel,
        datePattern: "YYYY-MM-DD",
        handleExceptions: true,
        humanReadableUnhandledException: true,
        prettyPrint: true,
        json: true,
        maxSize: "20m",
        colorize: true,
        maxFiles: "14d",
    },
};
exports.default = winston_1.createLogger({
    transports: [
        new winston_1.transports.Console({
            level: logLevel,
            format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.prettyPrint()),
        }),
    ],
    exitOnError: false, // do not exit on handled exceptions
});
