import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";

const channel = new BroadcastChannel("notifications-channel");

export const useNotifications = () => {
  useEffect(() => {
    channel.onmessage = (event) => {
      showNotification({
        title: event.data.message,
        color: "orange",
      });
    };
  }, []);
};
