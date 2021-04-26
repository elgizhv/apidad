"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Logger_1 = __importDefault(require("../core/Logger"));
const config_1 = require("../config");
const mongooseIntl = require("mongoose-intl");
// Translation Plugin
mongoose_1.default.plugin(mongooseIntl, {
    languages: Object.keys(config_1.languages),
    defaultLanguage: config_1.defaultLanguage,
});
const dbURI = config_1.db.connection_uri;
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
};
// Create the database connection
const connectDatabase = async () => {
    if (!dbURI)
        return false;
    await mongoose_1.default
        .connect(dbURI, options)
        .then(() => Logger_1.default.info("Mongoose Connected"))
        .catch((e) => Logger_1.default.error(e));
};
exports.connectDatabase = connectDatabase;
// CONNECTION EVENTS
mongoose_1.default.connection.on("error", (err) => {
    Logger_1.default.error("Mongoose default connection error: " + err);
});
mongoose_1.default.connection.on("disconnected", () => {
    Logger_1.default.info("Mongoose default connection disconnected");
});
