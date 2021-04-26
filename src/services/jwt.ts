import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
export const generateToken = (data: any) => {
  return jwt.sign(data, jwtSecret);
};

export const verifyToken = (token: string | undefined) => {
  if (!token) return false;
  try {
    return jwt.verify(token, jwtSecret);
  } catch (e) {
    return false;
  }
};
