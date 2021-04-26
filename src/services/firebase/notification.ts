import { messaging } from "firebase-admin";
import FCMTokenRepo from "../../database/repository/FCMTokenRepo";
// This registration token comes from the client FCM SDKs.

export interface FCMNotification {
  title?: string;
  body?: string;
  tokens: string[];
}

export const validateFCMToken = async (token: string) => {
  return await messaging()
    .send(
      {
        notification: {
          title: "Validation",
        },
        token,
      },
      true
    )
    .catch(() => false);
};

export const sendMessage = async (data: FCMNotification) => {
  let res = await messaging().sendMulticast({
    notification: {
      title: data.title,
      body: data.body,
    },
    tokens: data.tokens,
    android: {
      notification: {
        sound: "default",
      },
    },
    apns: {
      payload: {
        aps: {
          sound: "default",
        },
      },
    },
  });

  if (Array.isArray(res?.responses)) {
    for (let [i, resp] of Object.entries(res.responses)) {
      if (resp.error?.code == "messaging/registration-token-not-registered") {
        FCMTokenRepo.deleteByToken(data.tokens[+i]);
      }
    }
  }
  return res;
};
