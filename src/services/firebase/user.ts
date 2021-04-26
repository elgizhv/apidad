import { auth } from "firebase-admin";

export const validateAuthToken = async (token: string) => {
  return await auth()
    .verifyIdToken(token)
    .catch(() => false);
};
export const getUser = async (uid: string) => {
  return await auth().getUser(uid);
};
