import { sendPush } from "../../channels/push/fcmProvider.js";

export function pushProcessor() {
  return sendPush();
}
