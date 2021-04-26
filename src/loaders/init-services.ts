import { connectDatabase } from "../database";
import { connectFirebase } from "../services/firebase";
import Logger from "../core/Logger";

export default async () => {
  connectDatabase();
  connectFirebase();

  Logger.info("innitializing services");
};
