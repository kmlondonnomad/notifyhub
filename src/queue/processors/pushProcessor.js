import { sendPush } from "../../channels/push/fcmProvider.js";

export function pushProcessor(notification = {}) {
  return sendPush({
    token: "demo-device-token",
    message: notification.payload?.message || "",
  });
}
