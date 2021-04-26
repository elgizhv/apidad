import mongoose from "mongoose";
import Logger from "../core/Logger";
import { db, defaultLanguage, languages } from "../config";

const mongooseIntl = require("mongoose-intl");

// Translation Plugin
mongoose.plugin(mongooseIntl, {
  languages: Object.keys(languages),
  defaultLanguage,
  fallback: true, // fields with missing translation are returned as another translation
});

const dbURI = db.connection_uri;

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
export const connectDatabase = async () => {
  if (!dbURI) return false;
  await mongoose
    .connect(dbURI, options)
    .then(() => Logger.info("Mongoose Connected"))
    .catch((e) => Logger.error(e));
};

// CONNECTION EVENTS

mongoose.connection.on("error", (err) => {
  Logger.error("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  Logger.info("Mongoose default connection disconnected");
});
