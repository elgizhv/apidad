import cors from "cors";
import path from "path";

import express from "express";
import { router } from "../api/routes";
import userMiddleware from "../api/middlewares/user";
import authMiddleware from "../api/middlewares/auth";
import languageMiddleware from "../api/middlewares/language";

export default function () {
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: "10mb" }));

  app.use("/graphql", languageMiddleware, userMiddleware);
  app.use("/api", languageMiddleware, userMiddleware, authMiddleware, router);
  app.use(express.static(path.join(__dirname, "../../public")));

  return app;
}
