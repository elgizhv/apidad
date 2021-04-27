import path from "path";

import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });

export const environment = process.env.NODE_ENV;

export const port = process.env.PORT;

export const jwtSecret = process.env.JWT_SECRET || "secret";

export const db = {
  connection_uri: process.env.DB_CONNECTION_URI,
};

export const millikart = {
  api_url: process.env.MILLIKART_API_URL,
  api_key: process.env.MILLIKART_API_KEY,
  api_secret: process.env.MILLIKART_API_SECRET,
};

export const languages = {
  en: "English",
  az: "Azərbaycanca",
};
export const defaultLanguage = "az";

export const firebase = {
  storage: {
    bucket: process.env.FIREBASE_STORAGE_BUCKET,
  },
};
