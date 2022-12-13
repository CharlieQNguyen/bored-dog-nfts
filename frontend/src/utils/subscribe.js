import { createSubscription } from "../api/subscriptions/useSubscription";
import { config } from "../config";
import { urlBase64ToUint8Array } from "./urlBase64ToUint8Array";

export const subscribe = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        if (!registration.pushManager) {
          return;
        }

        registration.pushManager
          .getSubscription()
          .then((existedSubscription) => {
            if (existedSubscription === null) {
              registration.pushManager
                .subscribe({
                  applicationServerKey: urlBase64ToUint8Array(
                    config.vapidKeys.publicKey
                  ),
                  userVisibleOnly: true,
                })
                .then((newSubscription) => {
                  createSubscription(newSubscription);
                })
                .catch((e) => {
                  if (Notification.permission !== "granted") {
                    console.log("Permission was not granted.");
                  } else {
                    console.error(
                      "An error ocurred during the subscription process.",
                      e
                    );
                  }
                });
            } else {
              createSubscription(existedSubscription);
            }
          });
      })
      .catch((e) => {
        console.error(
          "An error ocurred during Service Worker registration.",
          e
        );
      });
  }
};
