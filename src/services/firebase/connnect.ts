import * as admin from "firebase-admin";

import fs from "fs";
import path from "path";
import Logger from "../../core/Logger";

export default () => {
  const keyPath = path.join(__dirname, "../../../keys/firebase-key.json");
  const serviceAccount: any = JSON.parse(fs.readFileSync(keyPath).toString());
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "apidado.appspot.com",
  });
  Logger.info("Firebase Connected");
};
