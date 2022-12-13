import webpush from "web-push";
import { config } from "../../config.js";
import { findAllSubscriptions } from "../stores/subscriptions.js";

webpush.setVapidDetails(
  "mailto:test@test.com",
  config.vapidKeys.publicKey,
  config.vapidKeys.privateKey
);

export const sendWebPush = async (message) => {
  const subscriptions = await findAllSubscriptions();
  const payload = JSON.stringify({
    title: "Bored Dog NFTs",
    message: message,
  });

  subscriptions.forEach((subscription) => {
    webpush.sendNotification(subscription, payload);
  });
};
