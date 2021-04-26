import { NextFunction, Request, Response } from "express";
import { defaultLanguage, languages } from "../../config";

export default function (req: Request, res: Response, next: NextFunction) {
  const availableLanguages = Object.keys(languages);
  let lang;

  const reqLang = req.get("language") || "";

  if (availableLanguages.includes(reqLang)) lang = reqLang;
  else lang = req.acceptsLanguages(availableLanguages);

  if (lang) req.lang = lang;
  else req.lang = defaultLanguage;
  next();
}
