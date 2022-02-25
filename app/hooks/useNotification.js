import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushToken";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener) {
      Notifications.addNotificationReceivedListener(notificationListener);
    }
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
          allowAnnouncements: true,
        },
      });

      // const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) {
        return;
      }
      const result = await Notifications.getExpoPushTokenAsync();
      const token = result.data;
      console.log(token);
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
