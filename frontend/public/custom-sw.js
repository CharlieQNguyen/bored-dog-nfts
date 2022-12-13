/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const channel = new BroadcastChannel("notifications-channel");

self.addEventListener("push", (event) => {
  const data = event.data.json();

  const options = {
    body: data.message,
  };

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      clientList.forEach((client) => {
        if (client.focused) {
          const { title, ...messageObject } = data;
          return channel.postMessage(messageObject);
        }

        return self.registration.showNotification(data.title, options);
      });
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (clients.openWindow) {
    clients.openWindow("/");
  }
});
