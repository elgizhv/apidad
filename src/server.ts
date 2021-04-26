import Logger from "./core/Logger";
import { port } from "./config";
import { httpServer } from "./app";

httpServer
  .listen(port, () => Logger.info(`server running on port : ${port}`))
  .on("error", (e: any) => Logger.error(e));
