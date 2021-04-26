import { createLogger, transports, format } from "winston";

import { environment } from "../config";

const logLevel = environment === "development" ? "debug" : "warn";

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

export default createLogger({
  transports: [
    new transports.Console({
      level: logLevel,
      format: format.combine(
        format.errors({ stack: true }),
        format.prettyPrint()
      ),
    }),
  ],
  exitOnError: false, // do not exit on handled exceptions
});
