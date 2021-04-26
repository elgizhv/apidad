import crypto from "crypto";
export default (string: string) => {
  return crypto.createHash("md5").update(string).digest("hex");
};
